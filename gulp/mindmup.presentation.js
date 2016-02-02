'use strict';
var gulp = require('gulp');
var data = require('gulp-data');
var rename = require("gulp-rename");
var mindmupParse = require("../gulp-custom/mindmup.parser.js");

module.exports = function(options) {
	gulp.task('mindmap:presentation', function(done) {
		return gulp.src(options.drive+"**/RxJS.presentation.mup")
			.pipe(data(function(file) {
				var mindmap = parseMindmap(file);
				var pArr = [];
				mindmapAll = mindmap.ideas;
				traverseMindmap(mindmap.ideas,pArr,undefined);
				var sortedFileArr = pArr.sort(sortBy('order'));
				var finalContent = convertToHTML(sortedFileArr);
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
