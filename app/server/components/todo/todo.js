'use strict';
var Rx = require('rx');
var routerModel = require('../router/router.model.js');
var actions = require('./todo.actions.js');

//register route
routerModel.routes['/todo'] = '/todo';

actions.req$.subscribe((reqRes)=>{
	reqRes.res.write("\n Hello World \n");
	reqRes.res.end();
})

/**actions.get$.subscribe((reqRes)=>{
reqRes.res.write("\n Hello World \n");
reqRes.res.end();
})
actions.post$.subscribe((reqRes)=>{
reqRes.res.write("\n Hello World \n");
reqRes.res.end();
})
**/
