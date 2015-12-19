import revealConnector from './revealConnector/reveal.connector.js';

//this is the main zPresent file
var $ = require('jquery');

class zPresentView {

	render(){
		var template = require('./zPresent.html');
		$('app').html(branchit);
	}
	constructor() {

	}
}


module.exports = new zPresentView();
