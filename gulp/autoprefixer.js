var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('../config.js');

gulp.task('autoprefixer', function() {
    console.log('autoprefixer');

    return gulp.src(config.path.tmpStyles + '**/*.css')
        .pipe(autoprefixer({
            browsers: [
              'last 2 versions',
              'Explorer >= 8',
              'Firefox ESR',
              'Android >= 2.3',
              'iOS >= 7'
            ]
        }))
        .pipe(gulp.dest(config.path.tmpStyles));
});