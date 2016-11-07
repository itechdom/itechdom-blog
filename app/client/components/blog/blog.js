'use strict';
//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
import { blogView } from './blog.view.js';
var {actionMain} = require("./blog.actions.js");
var model = require("./blog.model.js");
var animate = require('animate.css');

class blogMain{

	constructor(){

		let actions = new actionMain();
		this.model = model;
		var data;
		data = this.model.getBlog();
		blogView(data);

	}
}
module.exports = new blogMain();
