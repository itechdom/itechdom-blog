'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js')
var load = require("promise?bluebird!./slides.js");

class actionMain{

	constructor(){

		var actions =  {

			request$: clientActions['changeRoute$'].filter((d)=> {
				return d == "/slides";
			})

		}

		actions.request$.subscribe(()=>{
			load().then(function(file) {

			});
		})

		return actions;
	}
}

module.exports = new actionMain();
