//mindmup conversion here
//the only thing we need is to concatentate all the ideas together in one file
//go through ideas one by one, traverse the tree till you get an attachment, find the title of that idea and add to the attachement
//If there's no attachement, then just append the title
'use strict';

var gulp = require('gulp');
var data = require('gulp-data');
var path = require('path');
var concat = require('gulp-concat');
var flatten = require('flat');
var rename = require("gulp-rename");


module.exports = function(options) {

      gulp.task('db:save', function(options) {
		return gulp.src('./json-blog/all-blog.json')
			.pipe(data(function(file) {
				var blogs = JSON.parse(String(file.contents));
				console.log(blogs);
			}))
			/**.pipe(data(function(file) {
				var mindmap = parseMindmap(file);
				var content = processMindmap(mindmap);
				var finalContent = convertToMarkdown(content);
				file.contents = new Buffer(finalContent);
			}))
			
			.pipe(rename(function (path) {
				path.extname = ".md"
			}))
			.pipe(gulp.dest('./blog'))
			**/
	});

};
