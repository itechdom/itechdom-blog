'use strict';
var Rx = require('rx');
var actions = require('./blog.actions.js');

actions.get$.subscribe((reqRes)=>{
	reqRes.res.write("\n Hello World \n");
	reqRes.res.end();
})
