'use strict';
var Rx = require('rx');
var model = require('./admin.model.js');
var view = require('./admin.view.js');
var router = require('../utils/router/router.js');
var actions = require('./admin.actions.js');
var debug = require('../utils/debugger/debugger.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');


//admin serves as a verifier for the request using acl and after that it adds routing and request forwarding based on the components registered
// the logic goes like this, we get a route we verify that we have a module registered based on it
// we then just route the requests to it 
// we also use acl to verify the access level to that user

class adminMain{

	constructor(){

		router.model.registerRoute("/admin");
		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.get$.subscribe((req)=>{
			this.model.getTodo().then((admins)=>{
				this.view.render(admins);
				//notify people that we have done outputing the view
			});
		})

		actions.post$.subscribe((req)=>{
			this.model.insertTodo().then((admin)=>{
				this.view.render(admin);
			});
		});

		actions.update$.subscribe((req)=>{

		});

		actions.delete$.subscribe((req)=>{

		});

		debug.model.registerComponent(this);
	}
}

module.exports = new adminMain();

