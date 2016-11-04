let AWS = require('aws-sdk');
let config = require('config');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Promise = require('bluebird');

//TODO: import this from thinktank-common later if it makes sense
export class AWSEmail {
  ses;
  constructor() {
    this.ses = new AWS.SES({
      region: config.get('aws.region')
    });
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
      },
      Source: config.get('email.source')
    }
  }
  send(emailObject, callback) {
    let awsEmail = this.getAWSEmail(emailObject);
    return new Promise((resolve, reject) => {
        this.ses.sendEmail(awsEmail, (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })
  }
}
