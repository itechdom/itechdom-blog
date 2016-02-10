'use strict';
//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');

class blogView {

	render(blog){

		var header = require('../../src/views/blog/header.html');
		var content = require('../../src/views/blog/index.html');
		var footer = require('../../src/views/blog/footer.html');

		var topics = [];

		blog.map((topic)=>{	
			topics.push(topic.data[0].title)
		})

		var template  = require('./blog.html');

		$('app').html(template);
		$('blog-header').html(header);
		$('blog').html(content);
		$('blog-footer').html(footer);
		
	}
	constructor() {

	}
}


module.exports = new blogView();
