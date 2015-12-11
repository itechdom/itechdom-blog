//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var dispatcher = require('../lib/dispatcher/dispatcher.js');

// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed components?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general
class todoView {

	render(){
		var ht = require('../../src/views/blog/index.html');
		$('blog').html(ht);
	}
	constructor() {

	}
}


module.exports = new todoView();
