'use strict';
global.jQuery = global.$ = require('jquery');
global._ = require('underscore');
global.Color = require('color');
global.Hammer = require('jquery-hammerjs/jquery.hammer.js');
require('jquery.hotkeys');
var actions = require("./mindmap.actions.js");
var view = require("./mindmapView/mindmapView.view.js");


class mindmapMain{
	constructor(){
		this.actions = actions;
		this.actions.request$.subscribe(()=>{
			view.render();
		})
	}
}

module.exports = new mindmapMain();
