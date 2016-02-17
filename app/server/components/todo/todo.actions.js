'use strict';
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');

var req$ = serverActions.req$.filter((reqObj)=>{
	return reqObj.req.url == "/todo";
});

var actions =  {
	req$,
	get$:req$.filter((reqObj)=>{
		return reqObj.req.method == 'GET';
	}),
	post$:req$.filter((reqObj)=>{
		return reqObj.req.method == 'POST';
	}),
	update$:req$.filter((reqObj)=>{
		return reqObj.req.method == 'UPDATE';
	}),
	delete$:req$.filter((reqObj)=>{
		return reqObj.req.method == 'DELETE';
	})
}


module.exports = actions;
