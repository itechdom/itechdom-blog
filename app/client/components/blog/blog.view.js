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
import {homeView} from './views/home.js';


export let blogView = (blogList)=>{

	$('app').html('')
	$('app').append(blog)
	$('blog-header').html(header);
	$('blog-content').html(content);
	$('blog-footer').html(footer);

	// 1: Create a function that declares what the DOM should look like
	function render(count)  {

		//depending on the route render specific components
		return h('div', {},
		[String(count),homeView()]);
	}

	// 2: Initialise the document
	var count = 0;      // We need some app data. Here we just store a count.

	var tree = render(count);               // We need an initial tree
	var rootNode = createElement(tree);     // Create an initial root DOM node ...
	document.body.appendChild(rootNode);    // ... and it should be in the document

	// 3: Wire up the update logic
	setTimeout(function () {
		count++;
		var newTree = render(count);
		var patches = diff(tree, newTree);
		rootNode = patch(rootNode, patches);
		tree = newTree;
	}, 1000);
}
