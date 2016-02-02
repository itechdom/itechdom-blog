'use strict';
var gulp = require('gulp');
var data = require('gulp-data');
var path = require('path');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var MongoClient = require('mongodb').MongoClient
var mindmupParse = require('../gulp-custom/mindmup.parser.js');

module.exports = function(options) {

	gulp.task('mindmap:md', function(done) {
		return gulp.src(options.drive+'/**/*.mup')
		.pipe(data(function(file) {
			var mindmap = mindmupParse.toJson(file);
			var pArr = [];
			const unordered = mindmap.ideas;	
			var ordered = mindmupParse.sort(unordered);
			var currentIndex = 0;
			ordered.forEach((obj,index)=>{
				mindmupParse.flatten(obj.ideas,pArr);
				obj = mindmupParse.processItem(obj,index);
				if(index == 0){
					pArr.splice(0,0,obj);
					currentIndex = pArr.length;
				}
				else{
					pArr.splice(currentIndex,0,obj);
					currentIndex = pArr.length;
				}
			})
			
			var finalContent = mindmupParse.ToMarkdown(pArr);
			file.contents = new Buffer(finalContent);
		}))
	.pipe(rename(function (path) {
		path.extname = ".md"
	}))
	.pipe(gulp.dest('./content/md-blog'))
	});

};
