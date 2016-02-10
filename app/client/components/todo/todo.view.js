'use strict';
var customScss = require("./todo.scss");
var $ = require('jquery');
var Rx = require('rx');
var template = require('./todo.html');
var actions = require('./todo.actions.js');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');

var view = {

	render(todos){

		       $('app').html(template);

		       $('.todo-list').html(``);

		       todos.forEach((todo)=>{       
			       $('.todo-list').append(`<li>${todo}</li>`);
		       })

		       setTimeout(function(){
			       dispatcher.emit('todoViewRendered$',$('app'));
		       },5)

		       var keyPressed = 
			       Rx.Observable.fromEvent($('input'),'keypress')
			       .filter((e)=>e.which == 13)
			       .subscribe((e)=>{
				       dispatcher.emit('todoViewKeypressed$',e);
			       })
	}
}

module.exports = view;
