'use strict';
var Rx = require('rx');
var actions = require('./blog.actions.js');
var publishedBlogs = require('../../../../content/published-blog/blogs.json');

class blogModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}
	getBlog(){
		return JSON.parse(publishedBlogs);
	}
	insertBlog(blog){

	}
	updateBlog(id){

	}
	deleteBlog(id){

	}
}
module.exports = new blogModel();
