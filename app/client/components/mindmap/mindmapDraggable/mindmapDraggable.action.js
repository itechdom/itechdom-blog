'use strict';
var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent;
var EventEmitter = require('events').EventEmitter,
	customEvent = new EventEmitter();


class mindmapDraggableActionMain{
	constructor(){
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
		}
	}

}

module.exports = mindmapDraggableActionMain();
