'use strict';
var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent;
var EventEmitter = require('events').EventEmitter,
    customEvent = new EventEmitter();
var clientActions = require('../client/client.actions.js')

class mindmapAction{
	constructor(){
		return {
			request$:clientActions['changeRoute$'].filter((d)=> {
				return d == "/mindmap";
			})
		}
	}

}

module.exports = new mindmapAction();
