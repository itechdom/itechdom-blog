//this is the main client file
var Rx = require('rx');
var actions = require("./mindmapDraggable.actions.js");
var view = require("./mindmapDraggable.view.js");

class mindmapDraggableMain{
	constructor(){
		this.actions = actions;
	}
}
module.exports = new Main();
