'use strict';
var reveal = require('reveal.js');

require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/sky.css');
require('highlight.js/styles/default.css');

var hljs = require('highlight.js');

var $ = require('jquery');

var template = require('../../../../presentations/RxJS.presentation.mup.html');

class slidesView {

	render(){
		$('app').html(template);
		reveal.initialize();
		hljs.initHighlightingOnLoad();
	}
	constructor() {

	}
}
module.exports = new slidesView();
