import {AWSEmail} from './awsEmailService';

let emailList = [
    {
        'address':'osamah.net.m@gmail.com',
        'message':'hello email',
        'subject':'subject here'
    },
    {
        'address':'osamah.net.m@gmail.com',
        'message':'hello email',
        'subject':'subject here'
    }
]

//validate a list of emails
let hasInvalidEmail = emailList.map((email)=>{
    return emailValidator.validate(email.address);
}).filter(isEmailVerified => !isEmailVerified);

if(hasInvalidEmail.length > 0){
    if(email.address){
        return console.log("email address is invalid");
    }
    return console.log("email is missing");
}

/** Returns the number of files in the given directory. */
let sendEmail = async (function (dir) {
    for(let i=0;i<emailList.length;i++){
        let emailNotifications = await(awsEmail.send(emailList[i]));
    }
});

sendEmail
.then((data)=>{
    console.log("sent data",data);
})
.catch((err)=>{
    console.log("err",err);
})
