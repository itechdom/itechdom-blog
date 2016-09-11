'use strict';
var reveal = require('reveal.js');
require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/sky.css');
require('highlight.js/styles/default.css');
var customScss = require("./slides.scss");

var $ = require('jquery');
var template = require('../../../../content/presentations/RxJS.presentation.html');


class slidesView {

	render(){
		$('app').html(template);
		reveal.initialize();
	}
	constructor() {

	}
}
module.exports = new slidesView();
