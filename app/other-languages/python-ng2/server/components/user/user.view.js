'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./user.actions.js');
var model = require('./user.model.js');
var renderer = require('../utils/renderer/renderer.js');
var dispatcher = require('../utils/dispatcher/dispatcher.js');
var util = require("util");


class userView{

	constructor() {

	}
	render(message){
		dispatcher.customEvent.emit("user.output$",message);
		var d = JSON.stringify(message);
		renderer(d);
	}
}

module.exports = new userView();
