'use strict';
//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
import { blogView } from './blog.view.js';
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
			new blogView.render(data);
		});
		
	}
}
module.exports = new blogMain();
