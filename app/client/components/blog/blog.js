'use strict';
//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./blog.view.js');
var actions = require("./blog.actions.js");
var model = require("./blog.model.js");

class blogMain{

	constructor(){

		this.actions = actions;
		this.view = view;
		this.model = model;
		actions.request$.subscribe(()=>{
			this.model.getBlog().then((data)=>{
				this.view.render(data);
			})
		});
	}
}
module.exports = new blogMain();
