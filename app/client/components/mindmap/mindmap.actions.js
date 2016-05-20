'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js')
var load = require("promise?bluebird!./mindmap.js");
var $ = require('jquery');

class mindmapAction{

	constructor(){

		var actions =  {
			request$:clientActions['changeRoute$'].filter((d)=> {
				return d == "/mindmap";
			})
		}
		actions.request$.subscribe(()=>{

			$('app').empty();

			load().then(function(file) {
				new file();
			});

		});
		return actions;
	}

}

module.exports = new mindmapAction();
