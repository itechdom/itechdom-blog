//this is the main admin file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./admin.model.js');
var view = require('./admin.view.js');
var actions = require("./admin.actions.js");
var sidebar = require('./adminSidebar/adminSidebar.view.js')

class adminMain{

	constructor(){
		this.actions = actions;
		this.view = view;
		this.model = model;

		actions.request$.subscribe(()=>{
			this.view.render();
			sidebar.render();
		});
	}
}
module.exports = new adminMain();
