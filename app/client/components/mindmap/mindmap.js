'use strict';
var view = require('./mindmapView/mindmapView.view.js');
var actions = require('./mindmap.actions.js');
var model = require('./Elm.mup.json');

class mindmapMain{

	constructor(){
		var jModel = JSON.parse(model);
		view.render(jModel);
		draggable(100,100);
	}

}

module.exports = mindmapMain;
