//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js');
var dispatcher = require('../lib/dispatcher/dispatcher.js');
var Vue = require('vue');


// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed components?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general
class todoView {


	render(){

		var ht = require('./todo.html');
		$('todo').html(ht);
		var message = "hello, Vue.js!";

		//initialize Vue
		var demo = new Vue({
			el: '#demo',
		    	data: {
			    message: 'Hello Vue.js!'
			}
		});
		
	}
	constructor() {

	}
}


module.exports = new todoView();
