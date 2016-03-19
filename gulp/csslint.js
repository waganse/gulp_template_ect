var gulp = require('gulp'),
    csslint = require('gulp-csslint'),
    config = require('../config.js');

gulp.task('csslint', function() {
    console.log('csslint');

    return gulp.src(config.path.tmp + '**/*.css')
      .pipe(csslint('.csslintrc'))
      .pipe(csslint.reporter());
});