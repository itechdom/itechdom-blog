//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./blog.view.js');
var actions = require("./blog.actions.js");

class blogMain{

	constructor(){

		this.actions = actions;
		this.view = view;
		actions.request$.subscribe(()=>{
			view.render();
		});
	}
}
module.exports = new blogMain();
