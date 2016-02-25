'use strict';
var $ = require('jquery');
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');
var routerModel = require('./router.model.js');
var subject = new Rx.Subject();

class actionMain{

    constructor(){
        //All the default actions for this app
        var request$ = serverActions['req$'];

	//subscibe the subject to the soruce (request)
	request$.subscribe((reqRes)=>{
		console.log(reqRes);
		if(routerModel.routes[reqRes.req.url]){
			console.log("there's a route");
			subject.onNext(reqRes);
		}
		else{
			reqRes.res.write("\n NO ROUTE AVAILABLE!");
			reqRes.res.end();
		}
	});
        return {
            req$: subject
        }
    }
}
module.exports = new actionMain();
