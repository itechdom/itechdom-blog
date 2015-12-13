//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
var dispatcher = require('../lib/dispatcher/dispatcher.js');

class blogView {

	render(){
		var header = require('../../src/views/blog/header.html');
		var content = require('../../src/views/blog/index.html');
		var footer = require('../../src/views/blog/footer.html');
		$('blog-header').html(header);
		$('blog').html(content);
		$('blog-footer').html(footer);

	}
	constructor() {

	}
}


module.exports = new blogView();
