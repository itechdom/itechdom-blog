import revealConnector from './revealConnector/reveal.connector.js';
var $ = require('jquery');

class slidesView {

	render(){
		var template = require('./slides.html');
		$('app').html(branchit);
	}
	constructor() {

	}
}
module.exports = new slidesView();
