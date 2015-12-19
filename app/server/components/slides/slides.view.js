'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./blog.actions.js');
var model = require('./blog.model.js');
var renderer = require('../utils/renderer/renderer.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');
var util = require("util");


class blogView{

	constructor() {

	}
	render(message){
		dispatcher.customEvent.emit("blog.output$",message);
		var d = JSON.stringify(message);
		renderer(d);
	}
}

module.exports = new blogView();
