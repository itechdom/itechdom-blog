//this is the main post file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./post.actions.js');
var dispatcher = require('../lib/dispatcher/dispatcher.js');

class postView {

	render(){
		var branchit = require('../../../../blog/Branchit.mup.md');
		$('app').html(branchit);
	}
	constructor() {

	}
}


module.exports = new postView();
