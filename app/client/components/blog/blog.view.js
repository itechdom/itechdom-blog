'use strict';
var $ = require('jquery');

var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

var style = require('./scss/main.scss');
var blog = require('./blog.html');
var content = require('./views/content.html');
var header = require('./views/header.html');
var footer = require('./views/footer.html');


export let blogView = (blogList)=>{

	$('app').html('')
	$('app').append(blog)
	$('blog-header').html(header);
	$('blog-content').html(content);
	$('blog-footer').html(footer);
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
