'use strict';
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');

var request$ = serverActions.request$.filter((reqObj)=>{
	return reqObj.req.url == "/todo";
});

var actions =  {
	request$,
	get$:request$.filter((reqObj)=>{
		return reqObj.req.method == 'GET';
	}),
	post$:request$.filter((reqObj)=>{
		return reqObj.req.method == 'POST';
	}),
	update$:request$.filter((reqObj)=>{
		return reqObj.req.method == 'UPDATE';
	}),
	delete$:request$.filter((reqObj)=>{
		return reqObj.req.method == 'DELETE';
	})
}


module.exports = actions;
