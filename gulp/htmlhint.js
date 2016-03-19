var gulp = require('gulp'),
    htmlhint = require('gulp-htmlhint'),
    config = require('../config.js');

gulp.task('htmlhint', function() {
    console.log('htmlhint');

    return gulp.src(config.path.tmp + '**/*.html')
      .pipe(htmlhint('.htmlhintrc'))
      .pipe(htmlhint.reporter());
});