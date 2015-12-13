//this is the main post file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./post.actions.js');
var dispatcher = require('../lib/dispatcher/dispatcher.js');

class postView {

	render(){
		var ht = require('./post.html');
		$('post').html(ht);
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


module.exports = new postView();
