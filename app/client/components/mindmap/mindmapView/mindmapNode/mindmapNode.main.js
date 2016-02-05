//this is the main client file
var Rx = require('rx');
var actions = require("./mindmapNode.actions.js");
var view = require("./mindmapNode.view.js");

class mindmapNodeMain{
	constructor(){
		this.actions = actions;
	}
}
module.exports = new Main();
