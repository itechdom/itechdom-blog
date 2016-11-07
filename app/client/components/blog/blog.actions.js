'use strict';
var Rx = require('rx');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')

export class actionMain{
  constructor(){
    var request = clientActions['changeRoute$'];
    this.request$= request.filter((d)=> {
      return true;
    })
    this.home$= request.filter((d)=> {
      return /home/.test(d);
    })
    this.about$= request.filter((d)=> {
      return /about/.test(d);
    })
    this.viewLoaded$= Rx.Observable.fromEvent(dispatcher,'todo.viewLoaded$')
    this.dataLoaded$=Rx.Observable.fromEvent(dispatcher,'todo.dataLoaded$')
    this.addTodo$=Rx.Observable.fromEvent(dispatcher,'todo.addTodo$')
  }
}
