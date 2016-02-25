//this is the main client file
var Rx = require('rx');
var actions = require("./mindmapConnector.actions.js");
var view = require("./mindmapConnector.view.js");

class mindmapConnectorMain{
	constructor(){
		this.actions = actions;
	}
}
module.exports = new Main();
