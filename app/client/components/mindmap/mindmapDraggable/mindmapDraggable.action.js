'use strict';
var Rx = require('rx');

class mindmapDraggableActionMain{
	constructor(){
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
		}
	}

}

module.exports = new mindmapDraggableActionMain();
