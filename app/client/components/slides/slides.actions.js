'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js')

class actionMain{

	constructor(){
		return {
			request$: clientActions['changeRoute$'].filter((d)=> {
				return d == "/slides";
			})

		}
	}
}
module.exports = new actionMain();
