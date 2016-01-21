'use strict';
//this is the main post file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./post.view.js');
var actions = require("./post.actions.js");


class postMain{

	constructor(){

		this.actions = actions;
		this.view = view;
		actions.request$.subscribe(()=>{
			view.render();
		});
	}
}
module.exports = new postMain();
