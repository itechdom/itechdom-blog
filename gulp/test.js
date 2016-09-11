'use strict';

var gulp = require('gulp');

module.exports = function(options) {

      gulp.task('test', function() {
			// Be sure to return the stream 
		return gulp.src(options.test)
			.pipe(karma({
				configFile: 'config/karma.conf.js',
				action: 'run'
			}))
			.on('error', function(err) {
			// Make sure failed tests cause gulp to exit non-zero 
			throw err;
			});
	});
};

