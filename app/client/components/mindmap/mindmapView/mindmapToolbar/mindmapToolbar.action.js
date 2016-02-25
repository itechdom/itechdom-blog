'use strict';
var Rx = require('rx');

class mindmapToolbarActionMain{
	constructor(){
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
		}
	}

}

module.exports = mindmapToolbarActionMain();
