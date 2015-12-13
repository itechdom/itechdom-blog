'use strict';
var Rx = require('rx');
var model = require('./user.model.js');
var view = require('./user.view.js');
var router = require('../utils/router/router.js');
var actions = require('./user.actions.js');
var debug = require('../utils/debugger/debugger.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');


class userMain{

	constructor(){

		router.model.registerRoute("/test");
		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.get$.subscribe((req)=>{
			this.model.getUser().then((users)=>{
				this.view.render(users);
			});
		})

		debug.model.registerComponent(this);
	}
}

module.exports = new userMain();

