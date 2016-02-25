'use strict';
var Rx = require('rx');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')


class actionMain{

    constructor(){
        return {
            request$: clientActions['changeRoute$'].filter((d)=> {
                return d == "/admin";
            }),
            viewLoaded$: Rx.Observable.fromEvent(dispatcher.customEvent,'admin.viewLoaded$'),
            dataLoaded$:Rx.Observable.fromEvent(dispatcher.customEvent,'admin.dataLoaded$'),
	        addTodo$:Rx.Observable.fromEvent(dispatcher.customEvent,'admin.addTodo$')
        }
    }
}
module.exports = new actionMain();
