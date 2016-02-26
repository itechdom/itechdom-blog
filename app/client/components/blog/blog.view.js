'use strict';
var $ = require('jquery');
var Rx = require('rx');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');

//var template  = require('./blog.template.js');
//var h = require('virtual-dom/h');
///var diff = require('virtual-dom/diff');
//var patch = require('virtual-dom/patch');
//var createElement = require('virtual-dom/create-element');
//var webcomponents = require('webcomponents.js/webcomponents.js');

var blog = require('./blog.html');
var content = require('./views/content.html');
var header = require('./views/header.html');
var sidebar = require('./views/sidebar.html');
var footer = require('./views/footer.html');


class blogView {

	render(blogList){
		$('app').html('')
		$('app').append(blog)
		$('blog-header').html(header);
		$('blog-content').html(header);
		$('blog-footer').html(footer);
		$('blog-sidebar').html(sidebar);
	}
	constructor() {

	}
}


module.exports = new blogView();
