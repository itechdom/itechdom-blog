'use strict';
global.jQuery = global.$ = require('jquery');
//global._ = require('underscore');
//global.Color = require('color');
//global.Hammer = require('jquery-hammerjs/jquery.hammer.js');
//require('jquery.hotkeys');
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
