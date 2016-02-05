'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');

class mindmapViewView {

	render(){
		$('app').html(template);
	}
	constructor() {

	}
}
module.exports = new mindmapViewView();
