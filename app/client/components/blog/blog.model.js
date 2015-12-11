var Rx = require('rx');
var actions = require('./todo.actions.js');

class todoModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
		//implement all the actions
		actions.addTodo$.subscribe((data)=>{
			addTodo(data);
		})
	}
	getTodo(){
		return $.get("http://localhost:4000/todo");
	}
	insertTodo(todo){

	}
	updateTodo(id){

	}
	deleteTodo(id){

	}
}
module.exports = new todoModel();
