'use strict';
var Rx = require('rx');
var model = require('./slides.model.js');
var view = require('./slides.view.js');
var router = require('../utils/router/router.js');
var actions = require('./slides.actions.js');
var debug = require('../utils/debugger/debugger.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');


class slidesMain{

	constructor(){
		router.model.registerRoute("/test");
		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.get$.subscribe((req)=>{
			this.model.getSlides().then((slides)=>{
				this.view.render(slides);
			});
		})

		debug.model.registerComponent(this);
	}
}

module.exports = new slidesMain();
