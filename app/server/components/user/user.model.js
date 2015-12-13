'use strict';
var Rx = require('rx');
var orm = require('../utils/orm/orm.js');
var mongoose = require('mongoose');


class userModel{

	constructor() {
		this.schema = mongoose.Schema({
			title: String,
			completed: Boolean
		});
		this.repo = orm.repo();
		this.model = mongoose.model('users', this.schema);
	}
	getUser(){
		var query = this.model.find({});
		var callback = query.exec();
		return callback;
	}
	insertUser(){
		var user = new this.model({title:"hi",completed:false});
		var callback = user.save();
		return callback;
	}
	updateUser(user){

	}
	deleteUser(user){
		//var user = this.model.findByIdAndRemove()
	}
}
module.exports = new userModel();
