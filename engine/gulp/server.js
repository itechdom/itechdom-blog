'use strict';

var gulp = require('gulp');

var serve = require('browser-sync');

var util = require('util');

var shell = require('gulp-shell');

module.exports = function(options) {

gulp.task('serve', function(){
	serve({
		port: process.env.PORT || 3000,
		open: false,
		server: {
			baseDir: "./"
		}
	});

	//start the express server
	shell.task('node server.js');
});

};
