'use strict';
var Rx = require('rx');
var actions = require('./blog.actions.js');

class blogModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}
	getBlog(){
		return $.get("http://localhost:4000/blog");
	}
	insertBlog(blog){

	}
	updateBlog(id){

	}
	deleteBlog(id){

	}
}
module.exports = new blogModel();
