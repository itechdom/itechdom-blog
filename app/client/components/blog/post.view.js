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
var content = require('./views/post.html');
var header = require('./views/header.html');
var sidebar = require('./views/sidebar.html');
var footer = require('./views/footer.html');


class postView {

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
			listHtml = `
			<h1>${title}</h1>
			<img class="img-responsive" src="http://placehold.it/900x300" alt="">
			<!-- Author -->
			<p class="lead">
			by <a href="#">Osama Alghanmi</a>
			</p>
			<hr>
			<!-- Post Content -->
			<p class="lead">Hello, this is the post</p>
			`
		})
		$('.post__content').append(listHtml);
	}
	constructor() {

	}
}

module.exports = new postView();
