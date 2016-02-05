//this is the main client file
var Rx = require('rx');
var actions = require("./mindmapView.actions.js");
var view = require("./mindmapView.view.js");

class mindmapViewMain{
	constructor(){
		this.actions = actions;
	}
}
module.exports = new Main();
