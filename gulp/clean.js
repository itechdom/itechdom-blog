'use strict';
var gulp = require('gulp');
var del = require('del');

module.exports = function(options) {
    gulp.task('clean', function () {
        return del([
            'dist/'
        ]);
    });
};
