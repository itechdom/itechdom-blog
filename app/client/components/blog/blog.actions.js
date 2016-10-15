'use strict';
var Rx = require('rx');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')

class actionMain{
  constructor(){
    var request = clientActions['changeRoute$'];
    return {
      request$: request.filter((d)=> {
        return true;
      }),
      post$: request.filter((d)=> {
        return /\/post\/.*/.test(d);
      }),
      viewLoaded$: Rx.Observable.fromEvent(dispatcher,'todo.viewLoaded$'),
      dataLoaded$:Rx.Observable.fromEvent(dispatcher,'todo.dataLoaded$'),
      addTodo$:Rx.Observable.fromEvent(dispatcher,'todo.addTodo$')
    }
  }
}

module.exports = new actionMain();
