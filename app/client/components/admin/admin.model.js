'use strict';
var Rx = require('rx');
var actions = require('./admin.actions.js');

class adminModel{

	//the crud module operations stores the module we are supposed to access
	constructor() {
		this.schema = {
			module:"blog|user",
		}
	}
	getModule(){
		return $.get("http://localhost:4000/admin");
	}

	//add a module to the backend based on users selections
	insertModule(module){

	}
	deleteModule(id){

	}
}
module.exports = new adminModel();
