'use strict';
var Rx = require('rx');

class mindmapActionMain{
	constructor(){
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
		}
	}

}

module.exports = mindmapActionMain();
