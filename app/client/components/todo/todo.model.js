'use strict';
var todos = ['hello','how are you'];
var dispatcher = require('../../lib/dispatcher/dispatcher.js');

var model = {

	getTodo(){
		return this.todos;
	},
	insertTodo(todo){
		todos.push(todo);
		dispatcher.emit('todoModelUpdate$',todos);
	},
	todos
}

module.exports = model;
