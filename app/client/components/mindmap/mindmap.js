'use strict';
global.jQuery = global.$ = require('jquery');
global._ = require('underscore');
global.Color = require('color');
global.Hammer = require('jquery-hammerjs/jquery.hammer.js');
require('jquery.hotkeys');

var view = require('./mindmapView/mindmapView.view.js');
var actions = require('./mindmap.actions.js');

class mindmapMain{
	constructor(){

		actions.request$.subscribe(()=>{
			view.render();
		})

	}
}

module.exports = new mindmapMain();
