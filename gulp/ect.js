var gulp = require('gulp'),
    ect = require('gulp-ect'),
    htmlhint = require('gulp-htmlhint'),
    plumber = require('gulp-plumber'),
    data = require('../app/_data/variables.json'),
    config = require('../config.js');

gulp.task('ect', function() {
    console.log('ect');

    return gulp.src(config.path.app + '**/[^_]*.ect')
        .pipe(plumber())
        .pipe(ect({
            data: data
        }))
        .pipe(gulp.dest(config.path.tmp))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
});