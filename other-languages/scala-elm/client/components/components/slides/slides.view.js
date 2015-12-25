var reveal = require('reveal.js');
var marked = require('reveal.js/plugin/markdown/markdown.js');
var markdown = require('reveal.js/plugin/markdown/marked.js');

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/sky.css';

require('highlight.js/styles/default.css');
var hljs = require('highlight.js');


var $ = require('jquery');

class slidesView {

	render(){
		var template = require('../../../../presentations/RxJS.presentation.mup.html');
		$('app').html(template);
		reveal.initialize();
		hljs.initHighlightingOnLoad();
	}
	constructor() {

	}
}
module.exports = new slidesView();
