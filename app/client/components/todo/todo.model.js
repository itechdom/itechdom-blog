'use strict';
var todos = ['hello','how are you'];
var dispatcher = require('./utils/dispatcher/dispatcher.js');

var model = {

	getTodo(){
		return this.todos;
	},
	insertTodo(todo){
		todos.push(todo);
		dispatcher.customEvent.emit('todoModelUpdate$',todos);
	},
	todos
}

module.exports = model;
