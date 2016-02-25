//this is the main client file
var Rx = require('rx');
var actions = require("./mindmapToolbar.actions.js");
var view = require("./mindmapToolbar.view.js");

class mindmapToolbarMain{
	constructor(){
		this.actions = actions;
	}
}
module.exports = new Main();
