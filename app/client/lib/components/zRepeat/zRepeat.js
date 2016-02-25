//this is the main zRepeat file
var view = require('./zRepeat.view.js');

class zRepeatMain{

	//takes actions that it should register to to re-render the view
	constructor(){
		this.view = view;
	}
}
module.exports = new zRepeatMain();
