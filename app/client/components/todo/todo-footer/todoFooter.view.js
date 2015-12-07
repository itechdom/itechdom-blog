//this is the main todo file
var $ = require('jquery');
var actions = require('../todo.actions.js');

class todoView{

	constructor() {

		this.template = "todo";

		actions.dataLoaded$.subscribe(()=>{
			var content = require('./todoFooter.html');
			$('todo-footer').html(content);
		});

	}
}

module.exports = new todoView();
