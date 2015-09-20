'use strict';

var gulp = require('gulp');
var serve = require('browser-sync');


module.exports = function(options) {
gulp.task('reload',function(){
	serve.reload();
});
gulp.task('watch', function(){
	gulp.watch(options.app, ['webpack','reload']);
});
gulp.task('watch:material', function(){
	gulp.watch(options.material, ['slides:build','reload']);
});

};
