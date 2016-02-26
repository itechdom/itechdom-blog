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
var hello = require('./blog.html');


class blogView {

	render(blog){

/**		var tree = template(count);               // We need an initial tree
		var rootNode = createElement(tree);     // Create an initial root DOM node ...

		document.body.appendChild(rootNode);    // ... and it should be in the document

		setInterval(function () {
			count++;
			var newTree = template(count);
			var patches = diff(tree, newTree);
			rootNode = patch(rootNode, patches);
			tree = newTree;
		}, 1000);
**/
	}
	constructor() {

	}
}


module.exports = new blogView();
