//this is the main admin file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./admin.actions.js');
var model = require('./admin.model.js');
var dispatcher = require('../lib/dispatcher/dispatcher.js');


// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed components?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general
class adminView {

	render(){
		var content = require('../../src/views/admin/admin.html');
		$('admin').html(content);
	}
	constructor() {

	}
}


module.exports = new adminView();
