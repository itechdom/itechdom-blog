'use strict';
var canvasView = require('./mindmapView/canvas/mindmap.canvas.js');
var domView = require('./mindmapView/dom/mindmap.dom.js');
var actions = require('./mindmap.actions.js');
var model = require('./Elm.mup.json');

class mindmapMain{

	constructor(){
		var jsonModel = JSON.parse(model);
        var root = {"1":{
            title:"Elm",
            ideas:{}
        }
        }
        jsonModel.map((node,index)=>{
            root["1"].ideas[index+1] = node;
        })
        console.log(root);
		canvasView.render(root);
        domView.render(root);
	}

}

module.exports = mindmapMain;
