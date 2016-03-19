var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	nib = require('nib'),
	config = require('../config.js');

gulp.task('stylus', function() {
    console.log('stylus');

    return gulp.src(config.stylus.compiled)
        .pipe(plumber())
        .pipe(stylus({
            use: [nib()]
        }))
        .pipe(gulp.dest(config.path.tmpStyles))
        .pipe(autoprefixer(config.autoprefixer));
});