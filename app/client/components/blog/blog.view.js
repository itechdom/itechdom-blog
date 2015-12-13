//this is the main blog file
var $ = require('jquery');
var Rx = require('rx');
var dispatcher = require('../lib/dispatcher/dispatcher.js');

class blogView {

	render(){
		var ht = require('../../src/views/blog/index.html');
		$('blog').html(ht);
	}
	constructor() {

	}
}


module.exports = new blogView();
