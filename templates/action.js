'use strict';
var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent;
var EventEmitter = require('events').EventEmitter,
	customEvent = new EventEmitter();


class <%= name %>ActionMain{
	constructor(){
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
		}
	}

}

module.exports = new <%= name %>ActionMain();
