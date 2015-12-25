//this is the main adminSidebar file
var $ = require('jquery');
var Rx = require('rx');
var actions = require("../admin.actions.js");

class adminSidebarMain{

	constructor(){
		this.actions = actions;
		this.view = view;
	}
}
module.exports = new adminSidebarMain();
