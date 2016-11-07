'use strict';
var $ = require('jquery');

var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

var style = require('./scss/main.scss');
var blog = require('./blog.html');
var header = require('./views/header.html');
var footer = require('./views/footer.html');
import {homeView} from './views/home.js';
import {aboutView} from './views/about.js';
import {actionMain} from './blog.actions.js';
let currentTree;

export let blogView = (blogList)=>{

	$('app').html('')
	$('app').append(blog)
	$('blog-header').html(header);
	$('blog-footer').html(footer);

	let actions = new actionMain();

	actions.home$.subscribe(()=>{
		console.log('home');
		renderHome();
	})

	actions.about$.subscribe(()=>{
		console.log('about');
		renderAbout();
	})

	function renderHome(){
		let homeTree =  h('div', {},
		[homeView()]);
		let rootNode = createElement(homeTree);     // Create an initial root DOM node ...
		$('blog-content').html('');
		$('blog-content').append(rootNode);
	}

	function renderAbout(){
		let aboutTree =  h('div', {},
		[aboutView()]);
		let rootNode = createElement(aboutTree);     // Create an initial root DOM node ...
		$('blog-content').html('');
		$('blog-content').append(rootNode);
	}

	function reRender(tree, data, renderFunc){
		var newTree = renderFunc();
		var patches = diff(tree, newTree);
		rootNode = patch(rootNode, patches);
		tree = newTree;
	}

}
