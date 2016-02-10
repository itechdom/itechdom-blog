'use strict';
var Rx = require('rx');
var dispatcher = require('../lib/dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')

class actionMain{

    constructor(){
        return {
            request$: clientActions['changeRoute$'].filter((d)=> {
                return d == "/blog";
            }),
            viewLoaded$: Rx.Observable.fromEvent(dispatcher.customEvent,'todo.viewLoaded$'),
            dataLoaded$:Rx.Observable.fromEvent(dispatcher.customEvent,'todo.dataLoaded$'),
	        addTodo$:Rx.Observable.fromEvent(dispatcher.customEvent,'todo.addTodo$')
        }
    }
}
module.exports = new actionMain();
