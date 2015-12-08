//mindmup conversion here
//the only thing we need is to concatentate all the ideas together in one file
//go through ideas one by one, traverse the tree till you get an attachment, find the title of that idea and add to the attachement
//If there's no attachement, then just append the title
'use strict';

var gulp = require('gulp');
var data = require('gulp-data');
var path = require('path');
var concat = require('gulp-concat');

module.exports = function(options) {

      gulp.task('test:mindmap', function() {
		return gulp.src('./mindmaps/**/*.mup.json')
			.pipe(data(function(file) {
				var mindmap = JSON.parse(String(file.contents));
				var title = mindmap.title;
				var ideas = mindmap.ideas;
				var condensed = {};
				condensed['title'] = title;
				condensed['idea'] = ideas;
				file.contents = new Buffer(JSON.stringify(condensed));
			}))
			//.pipe(concat('ideas.json'))
			.pipe(gulp.dest('./test-map/output.json'));
	});

};

