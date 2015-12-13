'use strict';
var Rx = require('rx');
var model = require('./admin.model.js');
var view = require('./admin.view.js');
var router = require('../utils/router/router.js');
var actions = require('./admin.actions.js');
var debug = require('../utils/debugger/debugger.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');


//admin serves as a verifier for the request using acl and after that it adds routing and request forwarding based on the components registered
class adminMain{

	constructor(){

		router.model.registerRoute("/admin");
		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.get$.subscribe((req)=>{
			this.model.getTodo().then((admins)=>{
				this.view.render(admins);
			});
		})

		actions.post$.subscribe((req)=>{
			this.model.insertTodo().then((admin)=>{
				console.log(admin);
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

