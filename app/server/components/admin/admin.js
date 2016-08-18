'use strict';
var Rx = require('rx');
var model = require('./admin.model.js');
var view = require('./admin.view.js');
var actions = require('./admin.actions.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');


//admin serves as a verifier for the request using acl and after that it adds routing and request forwarding based on the components registered
// the logic goes like this, we get a route we verify that we have a module registered based on it
// we then just route the requests to it
// we also use acl to verify the access level to that user

class adminMain{

	constructor(){

		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.get$.subscribe((req)=>{

		})

		actions.post$.subscribe((req)=>{

		});

		actions.update$.subscribe((req)=>{

		});

		actions.delete$.subscribe((req)=>{

		});
	}
}

module.exports = new adminMain();
