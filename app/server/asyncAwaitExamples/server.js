"use strict";
var express = require('express');
var http = require('https');
var fs = require('fs');
var awsEmailService_1 = require('./awsEmailService');
var promise = require('bluebird');
var pgp = require('pg-promise')({ promiseLib: promise });
var request = require('request');
var config = require('config');
var camelCase = require('camel-case');
var AWS = require('aws-sdk');
var jwt = require('express-jwt');
var emailValidator = require("email-validator");
var awsEmail = new awsEmailService_1.AWSEmail();
/**
* Configurations
**/
//jwt token
var jwtConfig = {
    "secret": new Buffer(config.get("auth0.secret"), "base64"),
    "audience": config.get("auth0.clientid")
};
// security
// verify the jwt token sent from the client sending a 401 if it isn't valid
// OPTIONS requests will not include a token so don't require it!
var jwtCheck = jwt(jwtConfig);
//database setup
var schema = config.get('database.schema');
var conString = "postgres://" + config.get("database.user") + ":" + config.get("database.password") + "@" + config.get("database.host") + ":" + config.get("database.port") + "/" + config.get("database.database");
var db = pgp(conString);
//AWS simple mail server
AWS.config.update({ accessKeyId: config.get('aws.access_key_id'), secretAccessKey: config.get('aws.secret_access_key'), region: config.get('aws.region') });
var options = {
    key: fs.readFileSync('cert.key'),
    cert: fs.readFileSync('cert.crt')
};
// Express Application
var app = express();
var router = express.Router();
// Server Code
var server = http.createServer(options, app);
var port = config.get("server.port");
server.listen(port);
console.log("server is listening on port", port);
/**
* Utility functions
**/
function respond(response, statusCode, message, data) {
    //camelCase data objects
    var camelData = {};
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
app.use(function (req, res, next) {
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
app.use(function (req, res, next) {
    var rawBody = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        rawBody += chunk;
    });
    req.on('end', function () {
        try {
            req.body = JSON.parse(rawBody);
        }
        catch (e) {
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
router.get('/api/', function (req, res) {
    res.sendFile(__dirname + '/doc.html');
});
//gets an email information (email, title, body) and pushes it to a mail server
router.post('/api/v1/email', function (req, res) {
    var emailList = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    //validate a list of emails
    var hasInvalidEmail = emailList.map(function (email) {
        return emailValidator.validate(email);
    }).filter(function (isEmailVerified) { return isEmailVerified === false; });
    if (hasInvalidEmail.length > 0) {
        return respond(res, 422, 'Email is missing or invalid', {});
    }
    var emailProps = {
        subject: subject,
        message: message
    };
    return awsEmail.send(emailList, emailProps, function (err, data) {
        if (err) {
            return respond(res, 400, 'There was an error delivering the email, check the data property in the response', err);
        }
        return respond(res, 200, 'email sent', {});
    });
});
