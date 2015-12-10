'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js');
var renderer = require('../utils/renderer/renderer.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');
var util = require("util");


class todoView{

	constructor() {

	}
	render(message){
		dispatcher.customEvent.emit("todo.output$",message);
		var d = JSON.stringify(message);
		renderer(d);
	}
}

module.exports = new todoView();
