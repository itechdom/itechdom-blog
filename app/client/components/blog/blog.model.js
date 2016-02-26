'use strict';
var Rx = require('rx');
var actions = require('./blog.actions.js');

var blogs = require('../../../../content/blog-published/Intro\ to\ Elm.blog.json');

var blogList = JSON.parse(blogs);

class blogModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}
	getBlog(){
		return blogList;
	}
	insertBlog(blog){

	}
	updateBlog(id){

	}
	deleteBlog(id){

	}
}
module.exports = new blogModel();
