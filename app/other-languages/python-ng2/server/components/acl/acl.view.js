'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./admin.actions.js');
var model = require('./admin.model.js');
var renderer = require('../utils/renderer/renderer.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');
var util = require("util");


class adminView{

	constructor() {

	}
	render(message){
		dispatcher.customEvent.emit("admin.output$",message);
		var d = JSON.stringify(message);
		renderer(d);
	}
}

module.exports = new adminView();
