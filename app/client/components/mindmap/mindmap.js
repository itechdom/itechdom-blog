'use strict';
var canvasView = require('./mindmapView/canvas/mindmap.canvas.js');
var domView = require('./mindmapView/dom/mindmap.dom.js');
var actions = require('./mindmap.actions.js');
var model = require('./Elm.mup.json');

class mindmapMain{

	constructor(){
		var jsonModel = JSON.parse(model);
        var root = {
            title:"Elm",
            ideas:jsonModel
        }
		canvasView.render(jsonModel);
        domView.render(jsonModel);
	}

}

module.exports = mindmapMain;
