'use strict';
var view = require('./mindmapView/canvas/mindmap.canvas.js');
var domView = require('./mindmapView/dom/mindmap.dom.js');
var actions = require('./mindmap.actions.js');
var model = require('./Elm.mup.json');

class mindmapMain{

	constructor(){
		var jModel = JSON.parse(model);
		view.render(jModel);
        domView.render(jModel);
	}

}

module.exports = mindmapMain;
