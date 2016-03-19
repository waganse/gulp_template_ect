var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../config.js');

gulp.task('jshint', function(tasks) {
    console.log('jshint');

    return gulp.src(config.path.scripts + '**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});