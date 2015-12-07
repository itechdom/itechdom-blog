//this is the main todo file
var $ = require('jquery');
var actions = require('../todo.actions.js');

class todoContentView{

	render(){
		var content = require('./todoContent.html');
		$('todo-content').html(content);
	}
	constructor() {
		this.template = "todo-content";
	}
}

module.exports = new todoContentView();
