'use strict';
var Rx = require('rx');
var dispatcher = require('../lib/dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')


class actionMain{

    constructor(){
        return {
            request$: clientActions['changeRoute$'].filter((d)=> {
                return d == "/blog/1";
            }),
            viewLoaded$: Rx.Observable.fromEvent(dispatcher.customEvent,'post.viewLoaded$'),
            dataLoaded$:Rx.Observable.fromEvent(dispatcher.customEvent,'post.dataLoaded$'),
	        addTodo$:Rx.Observable.fromEvent(dispatcher.customEvent,'post.addTodo$')
        }
    }
}
module.exports = new actionMain();
