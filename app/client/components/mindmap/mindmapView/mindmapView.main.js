//this is the main client file
'use strict';
var Rx = require('rx');
var actions = require("./mindmapView.actions.js");
var view = require("./mindmapView.view.js");

class mindmapViewMain{
	constructor(){
		this.actions = actions;
		view.render();
	}
}
module.exports = new Main();
