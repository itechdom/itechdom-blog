'use strict';
var Rx = require('rx');
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
