//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('../todo.actions.js');

class todoView{

	constructor() {

		this.template = "todo";

		actions.dataLoaded$.subscribe(()=>{
			var content = require('./todoHeader.html');
			$('todo-header').html(content);
		});

	}
}

module.exports = new todoView();
