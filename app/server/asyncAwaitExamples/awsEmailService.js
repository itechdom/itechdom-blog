var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Promise = require('bluebird');

//TODO: import this from thinktank-common later if it makes sense
export class AWSEmail {
  constructor() {
  }
  getAWSEmail(emailObject){
    return {
      Destination: {
        ToAddresses: emailObject.address
      },
      Message: {
        Body: {
          Html: {
            Data: emailObject.message,
            Charset: 'UTF-8'
          },
          Text: {
            Data: emailObject.message,
            Charset: 'UTF-8'
          }
        },
        Subject: {
          Data: emailObject.subject,
          Charset: 'UTF-8'
        }
      }
    }
  }
  sendEmail(awsEmail,callback){
      callback(undefined,'email sent');
  }
  send(emailObject, callback) {
    let awsEmail = this.getAWSEmail(emailObject);
    return new Promise((resolve, reject) => {
        this.sendEmail(awsEmail, (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })
  }
}
