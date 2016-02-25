'use strict';
var $ = require('jquery');
var Rx = require('rx');
var RxNode = require('rx-node');
var fromEvent = Rx.Observable.fromEvent;
var server = require("./server.js");

var req$ = fromEvent(server,'request',function(req,res){
	return {
		req,
    		res
	}
});

var actions =   {
	req$:req$
}

module.exports = actions;
