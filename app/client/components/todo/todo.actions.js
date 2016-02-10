'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js');
var $ = require('jquery');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');


var todoViewRendered$ = Rx.Observable.fromEvent(dispatcher,'todoViewRendered$');
var todoViewKeypressed$ = Rx.Observable.fromEvent(dispatcher,'todoViewKeypressed$');

var todoModelUpdate$ = Rx.Observable.fromEvent(dispatcher,'todoModelUpdate$');

var actions =  {
	request$:clientActions['changeRoute$'].filter((d)=> {
		return d == "/todo";
	}),
	todoViewRendered$,
	todoViewKeypressed$,
	todoModelUpdate$
}

module.exports = actions;
