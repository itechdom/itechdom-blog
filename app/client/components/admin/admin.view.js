'use strict';
//this is the main admin file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./admin.actions.js');
var model = require('./admin.model.js');
var dispatcher = require('../lib/dispatcher/dispatcher.js');

class adminView {

	render(){
		var content = require('../../src/views/admin/admin.html');
		var template = require('./admin.html');
		$('app').html(template);
		$('admin').html(content);
	}
	constructor() {

	}
}


module.exports = new adminView();
