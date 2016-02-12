'use strict';
var gulp = require('gulp');
var data = require('gulp-data');
var rename = require("gulp-rename");
var mindmupParse = require("../gulp-custom/mindmup.parser.js");


module.exports = function(options) {

	gulp.task('mindmap:blog', function(done) {

		return gulp.src(options.drive+"**/*.blog.mup")
		.pipe(data(function(file) {
			var mindmap = mindmupParse.toJson(file);
			var pArr = [];
			const unordered = mindmap.ideas;	
			var ordered = mindmupParse.sort(unordered);
			mindmupParse.clean(ordered);
			var finalContent = JSON.stringify(ordered);
			file.contents = new Buffer(finalContent);
		}))
		.pipe(rename(function (path) {
			path.extname = ".json";
			path.dirname = "./";
		}))
		.pipe(gulp.dest('./content/published-blog'))
		});
};
