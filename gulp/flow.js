var gulp  = require('gulp')
var shell = require('gulp-shell')

module.exports = function(options){
gulp.task('flow', shell.task([
    'npm run flow'
]));
}
