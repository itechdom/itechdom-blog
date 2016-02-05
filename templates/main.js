//this is the main client file
var Rx = require('rx');
var actions = require("./<%= name %>.actions.js");
var view = require("./<%= name %>.view.js");

class <%= name %>Main{
	constructor(){
		this.actions = actions;
	}
}
module.exports = new <%= name %>Main();
