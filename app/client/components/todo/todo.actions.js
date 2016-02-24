'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js');
var $ = require('jquery');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');
var load = require("promise?bluebird!./todo.js");
var todoViewRendered$ = Rx.Observable.fromEvent(dispatcher,'todoViewRendered$');
var todoViewKeypressed$ = Rx.Observable.fromEvent(dispatcher,'todoViewKeypressed$');
var todoModelUpdate$ = Rx.Observable.fromEvent(dispatcher,'todoModelUpdate$');

class todoAction{

	constructor(){

		var actions =  {
			request$:clientActions['changeRoute$'].filter((d)=> {
				return d == "/todo";
			}),
			todoViewRendered$,
			todoViewKeypressed$,
			todoModelUpdate$
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
module.exports = new todoAction();
