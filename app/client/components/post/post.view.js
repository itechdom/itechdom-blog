'use strict';
//this is the main post file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./post.actions.js');
var dispatcher = require('../lib/dispatcher/dispatcher.js');


class postView {
	constructor() {
	}
	render(){
		$('app').html(branchit);
	}
}


module.exports = new postView();
