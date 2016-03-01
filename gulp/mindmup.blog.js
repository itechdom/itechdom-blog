'use strict';
var gulp = require('gulp');
var data = require('gulp-data');
var rename = require("gulp-rename");
var mindmupParse = require("../gulp-custom/mindmup.parser.js");
var count = 0;
var concat = require('gulp-concat');
var path = require('path');
var sync = require('run-sequence');


module.exports = function(options) {

	gulp.task('mindmap:blog-deal', function(done) {

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
			var name = path.basename.split(".")[0]
			path.basename = name.replace(/\s+/g, '-').toLowerCase();
		}))
		.pipe(gulp.dest('./content/published-blog'))
			.pipe(data(function(file){	
				var contents = String(file.contents);
				var filename = path.basename(file.path);
				contents = `{"${filename}":${contents}},`;
				if(count == 0){
					contents = '[' + contents;
				}
				count++;
				file.contents = new Buffer(contents);
			}))
		.pipe(concat('blogs.json'))
			.pipe(gulp.dest('./content/published-blog'))
	})
	gulp.task('mindmap:blog-seal',function(done){	
		return gulp.src("./content/published-blog/blogs.json")
			.pipe(data(function(file){
				var contents = String(file.contents);
				contents = contents.slice(0,-1)
				contents = contents + ']';
				file.contents = new Buffer(contents)
			}))
		.pipe(gulp.dest("./content/published-blog"));
	})
	gulp.task('mindmap:blog', function(done){
		sync('mindmap:blog-deal', 'mindmap:blog-seal', done);
	});
};
