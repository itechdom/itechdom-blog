'use strict';
var gulp = require('gulp');
var data = require('gulp-data');
var path = require('path');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var MongoClient = require('mongodb').MongoClient
var mindmupParser = require('./lib/mindmup.parser.js');

module.exports = function(options) {

	gulp.task('mindmap:md', function(done) {
		return gulp.src(options.drive+'/**/RxJS.presentation.mup')
			.pipe(data(function(file) {
				var mindmap = mindmup.parse(file);
				var pArr = [];
				var mindmapAll = mindmap.ideas;
				levelsDeep = 0;
				const unordered = mindmap.ideas;	
				var ordered = sortMindmap(unordered);
				var currentIndex = 0;
				ordered.forEach((obj,index)=>{
					traverseMindmap(obj.ideas,pArr);
					obj = processMindmapObject(obj,index);
					if(index == 0){
						pArr.splice(0,0,obj);
						currentIndex = pArr.length;
					}
					else{
						pArr.splice(currentIndex,0,obj);
						currentIndex = pArr.length;
					}
				})
				var finalContent = convertToMarkdown(pArr);
				file.contents = new Buffer(finalContent);
			}))
		.pipe(rename(function (path) {
			path.extname = ".md"
		}))
		.pipe(gulp.dest('./content/md-blog'))
	});

};
