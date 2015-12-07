'use strict';
var Rx = require('rx');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');

class actionMain{

    constructor(){
        return {
            viewLoaded$: Rx.Observable.fromEvent(dispatcher.customEvent,'todo-content.viewLoaded$'),
            dataLoaded$: Rx.Observable.fromEvent(dispatcher.customEvent,'todo-content.dataLoaded$')
        }
    }

}
module.exports = new actionMain();
