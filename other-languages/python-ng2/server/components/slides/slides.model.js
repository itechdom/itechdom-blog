'use strict';
var Rx = require('rx');
var orm = require('../utils/orm/orm.js');
var mongoose = require('mongoose');


class helloModel{

	constructor() {
		this.schema = mongoose.Schema({
			title: Object,
		},{collection:'hello'});
		this.repo = orm.repo();
		this.model = mongoose.model('hello', this.schema);
	}
	getSlides(){
		var query = this.model.find({});
		var callback = query.exec();
		return callback;
	}
	insertSlides(){
		var hello = new this.model({title:"hi",completed:false});
		var callback = hello.save();
		return callback;
	}
	updateSlides(hello){

	}
	deleteSlides(hello){
		//var hello = this.model.findByIdAndRemove()
	}
}
module.exports = new helloModel();
