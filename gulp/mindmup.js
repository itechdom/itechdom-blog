//mindmup conversion here
//the only thing we need is to concatentate all the ideas together in one file
//go through ideas one by one, traverse the tree till you get an attachment, find the title of that idea and add to the attachement
//If there's no attachement, then just append the title
'use strict';

var gulp = require('gulp');
var data = require('gulp-data');
var path = require('path');

module.exports = function(options) {

      gulp.task('test:mindmap', function() {
		return gulp.src('./mindmaps/**/*.mup.json')
			.pipe(data(function(file,cb) {
			file.contents = new Buffer("hello");
			})).pipe(gulp.dest('./test-map/'));
	});

};

