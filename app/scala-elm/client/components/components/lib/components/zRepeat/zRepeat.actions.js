'use strict';
var Rx = require('rx');
var dispatcher = require('../dispatcher/dispatcher.js');

class actionMain{

    constructor(){
        return {
            viewLoaded$: Rx.Observable.fromEvent(dispatcher.customEvent,'zRepeat.viewLoaded$'),
            dataLoaded$:Rx.Observable.fromEvent(dispatcher.customEvent,'zRepeat.dataLoaded$')
        }
    }
}
module.exports = new actionMain();
