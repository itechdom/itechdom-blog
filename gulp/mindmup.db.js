'use strict';

var gulp = require('gulp');
var data = require('gulp-data');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var url;
var mindmupParse = require('../gulp-custom/mindmup.parser.js')

module.exports = function(options) {

	gulp.task('mindmap:db', function(done) {
		return gulp.src(options.drive+"**/*.mup")
			.pipe(data(function(file) {
				var mindmap = mindmupParse.toJson(file);
				var pArr = [];
                if(mindmap.ideas){
                    const unordered = mindmap.ideas;	
                    var ordered = mindmupParse.sort(unordered);
                    mindmupParse.clean(ordered);
                    var finalContent = JSON.stringify(ordered);
                    file.contents = new Buffer(finalContent);
                }
			}))
            .pipe(rename(function (path) {
                path.extname = ".json";
            }))
			.pipe(gulp.dest('./content/json-blog'))
			});
};
