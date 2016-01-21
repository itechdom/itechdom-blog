//this is the main client file
var $ = require('jquery');
var Rx = require('rx');
var actions = require("./client.actions.js");


class clientMain{

	constructor(){
		this.actions = actions;
	}
}
module.exports = new clientMain();
