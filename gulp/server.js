'use strict';

var gulp = require('gulp');

var serve = require('browser-sync');

var util = require('util');

var nodemon = require('gulp-nodemon');

module.exports = function (options) {
    gulp.task('serve:client', function () {
        serve({
            port: process.env.PORT || 3000,
            open: false,
            server: {
                baseDir: "./"
            }
        });
    });
};
