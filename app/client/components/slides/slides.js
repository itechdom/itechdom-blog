//import highlight.js
require('highlight.js/styles/default.css');
require('highlight.js/styles/agate.css');

//this is the main slides file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./slides.view.js');
var actions = require("./slides.actions.js");
var model = require("./slides.model.js");

class slidesMain{

	constructor(){

		this.actions = actions;
		this.view = view;
		this.model = model;
		actions.request$.subscribe(()=>{
			this.model.getSlides().then((data)=>{
				this.view.render(data);
			})
		});
	}
}
module.exports = new slidesMain();
