var reveal = require('reveal.js');
var marked = require('reveal.js/plugin/markdown/markdown.js');
var markdown = require('reveal.js/plugin/markdown/marked.js');

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/sky.css';
var $ = require('jquery');

class slidesView {

	render(){
		var template = require('../../../../presentations/RxJS.presentation.mup.html');
		$('app').html(template);
		//initialize reveal to start the slides
		reveal.initialize();
	}
	constructor() {

	}
}
module.exports = new slidesView();
