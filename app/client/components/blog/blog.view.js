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

var style = require('./scss/main.scss');
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
		$('blog-content').html(content);
		$('blog-footer').html(footer);
		$('blog-sidebar').html(sidebar);

		//render list
		var listHtml = "";
		var obj;
		var title;
		var blogListView = blogList.map((blog)=>{
			obj = Object.keys(blog)[0];
			title = Object.keys(blog)[0].split('.')[0];
			listHtml += `
			<a href="/#/post/${obj}"><h1>${title}</h1></a>
			<img class="img-responsive" src="http://placehold.it/900x300" alt="">
			<!-- Author -->
			<p class="lead">
			by <a href="#">Osama Alghanmi</a>
			</p>
			<p><span class="glyphicon glyphicon-time"></span> Posted on August 24, 2013 at 9:00 PM</p>
			<p><span class="glyphicon glyphicon-time"></span> 0 Comments</p>
			<hr>
			`
		})
		$('.blog__list').append(listHtml);

	}
	constructor() {

	}
}


module.exports = new blogView();
