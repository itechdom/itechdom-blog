import * as express from 'express';
import * as http from 'https';
import * as fs from 'fs';
import * as util from 'util';

import {AWSEmail} from './awsEmailService';

const promise = require('bluebird');
const pgp = require('pg-promise')({ promiseLib: promise });
const request = require('request');
const config = require('config');
const camelCase = require('camel-case');
const AWS = require('aws-sdk');
const jwt = require('express-jwt');
const emailValidator = require("email-validator");
const awsEmail = new AWSEmail();

/**
* Configurations
**/

//jwt token
let jwtConfig = {
	"secret": new Buffer(config.get("auth0.secret"), "base64"),
	"audience": config.get("auth0.clientid")
};
// security
// verify the jwt token sent from the client sending a 401 if it isn't valid
// OPTIONS requests will not include a token so don't require it!
let jwtCheck = jwt(jwtConfig);

//database setup
let schema = config.get('database.schema');
let conString = "postgres://"+config.get("database.user")+":"+config.get("database.password")+"@"+config.get("database.host")+":"+config.get("database.port")+"/"+config.get("database.database");
const db = pgp(conString);

//AWS simple mail server
AWS.config.update({accessKeyId: config.get('aws.access_key_id'), secretAccessKey: config.get('aws.secret_access_key'), region: config.get('aws.region')});
let options = {
	key  : fs.readFileSync('cert.key'),
	cert : fs.readFileSync('cert.crt')
};

// Express Application
let app = express();
let router = express.Router();

// Server Code
let server = http.createServer(options, app);
let port = config.get("server.port");
server.listen(port);
console.log("server is listening on port",port);

/**
* Utility functions
**/
function respond(response:express.Response, statusCode:number, message:string, data:Object ){
	//camelCase data objects
	let camelData = {};
	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			camelData[camelCase(key)] = data[key];
		}
	}
	response.status(statusCode).json({
		data: camelData,
		message: message
	});
}

/**
* Routes
**/
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
	res.header('Access-Control-Allow-Origin', req.headers['Origin'] || req.headers['origin']);

	if ('OPTIONS' == req.method) {
		res.sendStatus(200);
		res.end();
	}
	return next();
});

//all api call variables are passed in in json format
//this will parse the body
app.use(function(req, res, next) {

	let rawBody = '';
	req.setEncoding('utf8');

	req.on('data', function(chunk) {
		rawBody += chunk;
	});

	req.on('end', function() {
		try{
			req.body = JSON.parse(rawBody);
		}catch(e){
			req.body = {};
		}
		next();
	});

});

app.use('/', router);

//verify all requests going through api through jwtCheck with Auth0
app.use('/api', jwtCheck.unless({ method: 'OPTIONS' }));

/**
* Unauthorized handler
*/
// app.use('/api',jwtCheck, function (req, res) {
// 	console.log(req.user);
// 	if (!req.user) {
// 		res.status(401)
// 			.json({
// 				status: 'error 401',
// 				data: 'No authorization token was found.',
// 				message: 'UnauthorizedError'
// 			});
// 	}
// });


router.get('/api/', (req:express.Request, res:express.Response)=>{
	res.sendFile(__dirname + '/doc.html');
});

//gets an email information (email, title, body) and pushes it to a mail server
router.post('/api/v1/email', (req:express.Request, res:express.Response) => {

	let emailList:Array<Object> = req.body.emailList;

	//validate a list of emails
	let hasInvalidEmail = emailList.map((email)=>{
		return emailValidator.validate(email.address);
	}).filter(isEmailVerified => !isEmailVerified);

	if(hasInvalidEmail.length > 0){
        if(email.address){
            return respond(res,422,`Email ${email.address} is invalid`,{});
        }
        return respond(res,422,`Email is missing`,{});
	}

    /** Returns the number of files in the given directory. */
    let sendEmail = async (function (dir) {
        for(let i=0;i<emailList.length;i++){
            let emailNotifications = await(awsEmail.send(emailList[i]));
        }
    });

    sendEmail
        .then((data)=>{
            respond(res,200,'email sent',{});
        })
        .catch((err)=>{
            respond(res,400,'There was an error delivering the email, check the data property in the response',err);
        })
});
