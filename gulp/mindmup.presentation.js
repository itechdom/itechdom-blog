'use strict';
var gulp = require('gulp');
var data = require('gulp-data');
var rename = require("gulp-rename");
var mindmupParse = require("../gulp-custom/mindmup.parser.js");

module.exports = function(options) {
	gulp.task('mindmap:presentation', function(done) {
		return gulp.src(options.drive+"**/*.presentation.mup")
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
			var finalContent = mindmupParse.toHTML(pArr);
			file.contents = new Buffer(finalContent);
		}))
	.pipe(rename(function (path) {
		path.extname = ".html";
		path.dirname = "./";
	}))
	.pipe(gulp.dest('./content/presentations'))
	});
	gulp.task('watch:presentation', function(){
		gulp.watch(options.drive+"**/*.presentation.mup", ['mindmap:presentation']);
	})
};
