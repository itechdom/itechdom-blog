var reveal = require('reveal.js');
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/sky.css';
var $ = require('jquery');

class slidesView {

	render(){
		var template = require('./slides.html');
		$('app').html(template);
		//initialize reveal to start the slides
		reveal.initialize();
	}
	constructor() {

	}
}
module.exports = new slidesView();
