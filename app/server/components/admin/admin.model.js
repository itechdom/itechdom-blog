'use strict';
var Rx = require('rx');
var orm = require('../utils/orm/orm.js');
var mongoose = require('mongoose');


class adminModel{

	constructor() {
		this.schema = mongoose.Schema({
			title: String,
			completed: Boolean
		});
		this.repo = orm.repo();
		this.model = mongoose.model('admins', this.schema);
	}
	getAdmin(){
		var query = this.model.find({});
		var callback = query.exec();
		return callback;
	}
	insertAdmin(){
		var admin = new this.model({title:"hi",completed:false});
		var callback = admin.save();
		return callback;
	}
	updateAdmin(admin){

	}
	deleteAdmin(admin){
		//var admin = this.model.findByIdAndRemove()
	}
}
module.exports = new adminModel();
