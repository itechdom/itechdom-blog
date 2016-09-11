'use strict';
//import highlight.js


//this is the main slides file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./slides.view.js');
var actions = require("./slides.actions.js");
var model = require("./slides.model.js");
window.$ = $;


class slidesMain{

	constructor(){

		this.actions = actions;
		this.view = view;
		this.model = model;

		actions.request$.subscribe(()=>{
				this.view.render();
		});

	}
}

module.exports = new slidesMain();
