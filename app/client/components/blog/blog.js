'use strict';
//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./blog.view.js');
var post = require('./post.view.js');
var actions = require("./blog.actions.js");
var model = require("./blog.model.js");
var animate = require('animate.css');

class blogMain{

	constructor(){

		this.actions = actions;
		this.view = view;
		this.model = model;
		var data;

		actions.request$.subscribe(()=>{
			data = this.model.getBlog();
			this.view.render(data);
		});
		actions.post$.subscribe(()=>{
			data = this.model.getBlog();
			post.render(data);
		});
	}
}
module.exports = new blogMain();
