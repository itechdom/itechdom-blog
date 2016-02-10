'use strict';
var Rx = require('rx');
var clientActions = require('./utils/client/client.actions.js');
var $ = require('jquery');
var dispatcher = require('./utils/dispatcher/dispatcher.js');

	var todoViewRendered$ = Rx.Observable.fromEvent(dispatcher.customEvent,'todoViewRendered$');
	var todoViewKeypressed$ = Rx.Observable.fromEvent(dispatcher.customEvent,'todoViewKeypressed$');

	var todoModelUpdate$ = Rx.Observable.fromEvent(dispatcher.customEvent,'todoModelUpdate$');

	var actions =  {
            request$: clientActions['changeRoute$'],
	    todoViewRendered$,
	    todoViewKeypressed$,
	    todoModelUpdate$
        }

module.exports = actions;
