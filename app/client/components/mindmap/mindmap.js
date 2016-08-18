'use strict';
var canvasView = require('./mindmapView/canvas/mindmap.canvas.js');
var domView = require('./mindmapView/dom/mindmap.dom.js');
var actions = require('./mindmap.actions.js');
var model = require('./example.js');

class mindmapMain{
	constructor(){
		var root = {"1":{
			title:"Elm",
			ideas:{}
		}
	}
	model.map((node,index)=>{
		root["1"].ideas[index+1] = node;
	})
	canvasView.render(root);
	domView.render(root);
}

}

module.exports = mindmapMain;
