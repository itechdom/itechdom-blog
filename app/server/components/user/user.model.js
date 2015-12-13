'use strict';
var Rx = require('rx');
var orm = require('../utils/orm/orm.js');
var mongoose = require('mongoose');


class blogModel{

	constructor() {
		this.schema = mongoose.Schema({
			title: String,
			completed: Boolean
		});
		this.repo = orm.repo();
		this.model = mongoose.model('blogs', this.schema);
	}
	getBlog(){
		var query = this.model.find({});
		var callback = query.exec();
		return callback;
	}
	insertBlog(){
		var blog = new this.model({title:"hi",completed:false});
		var callback = blog.save();
		return callback;
	}
	updateBlog(blog){

	}
	deleteBlog(blog){
		//var blog = this.model.findByIdAndRemove()
	}
}
module.exports = new blogModel();
