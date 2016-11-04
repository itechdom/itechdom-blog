var AWSEmail = require('./awsEmailService');
var awsEmail = new AWSEmail();
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const emailValidator = require("email-validator");


    let emailList = [
        {
            'address':'osamah.net.m@gmail.com',
            'message':'hello email',
            'subject':'subject here'
        },
        {
            'address':'oalghnmi@gmail.com',
            'message':'hello email',
            'subject':'subject here'
        }
    ]

    //validate a list of emails
    let InvalidEmailList = emailList.map((email,index)=>{
        return { 
            isValid:emailValidator.validate(email.address),
            index 
        }
    }).filter(email => email.isValid === false);

    if(InvalidEmailList.length > 0){
        let firstInvalidEmail = emailList[InvalidEmailList[0].index];
        if(firstInvalidEmail.address){
            return console.log(`email address:${firstInvalidEmail.address} is invalid`);
        }
        return console.log("email is missing");
    }

    let sendEmail = async (function (emailList) {
        for(let i=0;i<emailList.length;i++){
            let emailNotifications = await(awsEmail.send(emailList[i]));
        }
    });

    sendEmail(emailList)
    .then((data)=>{
        console.log("sent email",data);
    })
    .catch((err)=>{
        console.log("err",err);
    })
