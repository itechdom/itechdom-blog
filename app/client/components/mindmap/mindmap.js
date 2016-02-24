'use strict';
global.jQuery = global.$ = require('jquery');
//global._ = require('underscore');
//global.Color = require('color');
//global.Hammer = require('jquery-hammerjs/jquery.hammer.js');
//require('jquery.hotkeys');

var view = require('./mindmapView/mindmapView.view.js');
var actions = require('./mindmap.actions.js');
var model = require('../../../../content/json-blog/Knowledge/Formal\ Science/Computer\ Science/Elm/Elm.mup.json');
var draggable = require('./mindmapView/mindmapDraggable.view.js');


class mindmapMain{
	constructor(){
		var jModel = JSON.parse(model);
		actions.request$.subscribe(()=>{
		$('app').html();
		view.render(jModel);
		draggable(100,100);
		})
	}
}

module.exports = new mindmapMain();
