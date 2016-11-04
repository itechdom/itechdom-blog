var Promise = require('bluebird');

//TODO: import this from thinktank-common later if it makes sense
module.exports = class AWSEmail {
  constructor() {
      this.count = 0;
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
      console.log(awsEmail);
      if(this.count === 1){
        return callback({err:awsEmail+"cannot be sent"},"hello");
      }
      this.count++;
      return callback(undefined,"hello");
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
