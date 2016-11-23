var gulp = require('gulp'),
    cmq = require('gulp-combine-media-queries'),
    config = require('../config.js');

gulp.task('cmq', function () {
  gulp.src(config.path.tmpStyles + '*.css')
    .pipe(cmq({
      log: true
    }))
    .pipe(gulp.dest(config.path.tmpStyles));
});