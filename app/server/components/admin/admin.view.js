'use strict';
var $ = require('jquery');
var Rx = require('rx');
var renderer = require('../utils/renderer/renderer.js');
var util = require("util");

class adminView{

	constructor() {

	}
	render(message){
		var d = JSON.stringify(message);
		renderer(d);
	}
}

module.exports = new adminView();
