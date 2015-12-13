'use strict';
var Rx = require('rx');
var model = require('./blog.model.js');
var view = require('./blog.view.js');
var router = require('../utils/router/router.js');
var actions = require('./blog.actions.js');
var debug = require('../utils/debugger/debugger.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');


class blogMain{

	constructor(){

		router.model.registerRoute("/test");
		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.get$.subscribe((req)=>{
			this.model.getBlog().then((blogs)=>{
				this.view.render(blogs);
			});
		})

		debug.model.registerComponent(this);
	}
}

module.exports = new blogMain();

