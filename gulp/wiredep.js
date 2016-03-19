var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	config = require('../config.js');

gulp.task('wiredep', function() {
    console.log('wiredep');

    return gulp.src(config.path.app + '**/*.ect')
      .pipe(wiredep({
        ignorePath: /(\.\.\/)*\.\./
      }))
      .pipe(gulp.dest(config.path.app));
});