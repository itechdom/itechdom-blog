var h = require('virtual-dom/h');
var diff = require("vtree/diff");
var createElement = require("vdom/create-element");
var patch = require("vdom/patch");
var model = require("./renderer.model.js");


//this could be a component that collect all the components and provide a central
//Location to compile them
class rendererMain{

	constructor(){
		this.model = model;
	}
	//take an html and render it back with all data bound?
	dataBind(){
		console.log(this);
	}
	render(view,component){
		//render the view after patching everything ...

	}
}


//this.render = function(todos){
//
//    if(!todos){
//        todos = [];
//    }
//
//    return 	h("ul.todo-list",todos.map(function(todo){
//        return	h("li", [
//            h("div.view", [
//                h("input.toggle", { "type": "checkbox"}),
//                h("label", [ todo.name ]),
//                h("button.destroy")
//            ]),
//            h("form", [
//                h("input.edit")
//            ])
//        ])
//    }))
//}
