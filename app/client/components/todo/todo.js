'use strict';
//this is the main todo file
var view = require('./todo.view.js');
var actions = require("./todo.actions.js");
var model = require("./todo.model.js");

		actions.request$.subscribe(()=>{
			view.render(model.todos);
		});

		actions.todoViewKeypressed$.subscribe((e)=>{
			model.insertTodo(e.target.value);
		})

		actions.todoModelUpdate$.subscribe(()=>{
			view.render(model.todos);
		})
