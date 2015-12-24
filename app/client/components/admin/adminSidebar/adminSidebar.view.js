'use strict';
//this is the main admin file
var $ = require('jquery');
var Rx = require('rx');

class adminView {

	render(){
		var content = require('../../../src/views/admin/sidebar.html');
		$('admin-sidebar').html(content);
	}
	constructor() {

	}
}


module.exports = new adminView();
