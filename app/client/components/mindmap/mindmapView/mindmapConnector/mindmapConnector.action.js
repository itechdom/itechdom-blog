'use strict';
var Rx = require('rx');

class mindmapConnectorActionMain{
	constructor(){
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
		}
	}

}

module.exports = mindmapConnectorActionMain();
