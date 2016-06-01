'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js')

class Action{

	constructor(){
		var actions =  {
			request$:clientActions['changeRoute$'].filter((d)=> {
				return d == "/3d";
			})
		}
		return actions;
	}

}

module.exports = new Action();
