//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./todoContent.view.js');
var actions = require('./todoContent.actions.js');
var todoActions = require('../todo.actions.js');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');


class todoContentMain{

    constructor(){
		this.view = view;
		this.actions = actions;

        todoActions.dataLoaded$.subscribe((data)=>{
            view.render();
            dispatcher.customEvent.emit('todo-content.dataLoaded$',[{_id:1}]);
            dispatcher.customEvent.emit('todo-content.viewLoaded$',data);
        });

    }
}
module.exports = new todoContentMain();
