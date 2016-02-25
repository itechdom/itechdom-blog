'use strict';
var Rx = require('rx');


class mindmapNodeActionMain{
	constructor(){
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
		}
	}

}

module.exports = mindmapNodeActionMain();
