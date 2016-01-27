'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./slides.actions.js');
var model = require('./slides.model.js');
var renderer = require('../utils/renderer/renderer.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');
var util = require("util");


class slidesView{

	constructor() {

	}
	render(message){
		dispatcher.customEvent.emit("slides.output$",message);
		var d = JSON.stringify(message);
		renderer(d);
	}
}

module.exports = new slidesView();
