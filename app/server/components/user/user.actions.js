'use strict';
var Rx = require('rx');
var serverActions = require('../utils/server/server.actions.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');


class actionMain{

  constructor(){
    //All the default actions for this app
    var request = serverActions['request$'].filter((req)=>{
      return req.url == "/user";
    });
    return {
      request$:request,
      get$:request.filter((req)=>{
        return req.method == 'GET';
      }),
      post$:request.filter((req)=>{
        return req.method == 'POST';
      }),
      update$:request.filter((req)=>{
        return req.method == 'UPDATE';
      }),
      delete$:request.filter((req)=>{
        return req.method == 'DELETE';
      }),
      input$:Rx.Observable.fromEvent(dispatcher.customEvent,'user.input$'),
      output$:Rx.Observable.fromEvent(dispatcher.customEvent,'user.output$')
    }
  }
}
module.exports = new actionMain();
