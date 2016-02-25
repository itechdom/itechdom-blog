'use strict';
var gulp = require('gulp');
var data = require('gulp-data');
var template = require('gulp-template');
var argv = require('yargs').argv;
var rename = require('gulp-rename');
var dist,moduleName;

/**
 *
 * -f: Folder where the file will be generated
 * -n: The module name
 *
 */
module.exports = function(options) {

	gulp.task('template', function(done) {
		return gulp.src('templates/*')
					    .pipe(data(function(file) {
					    moduleName = argv.n;
					    return {name: moduleName};
					    }))
					    .pipe(rename(function (path) {
					    path.basename = argv.n + "." + path.basename;
					    }))
					    .pipe(template())
					    .pipe(gulp.dest(argv.f))
					    });
					    }
