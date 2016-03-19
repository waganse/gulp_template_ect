var gulp = require('gulp'),
	rimraf = require('rimraf'),
	config = require('../config.js');

gulp.task('clean_serve', function(cb) {
    console.log('clean');

    return rimraf(config.path.tmp, cb);
});

gulp.task('clean_preview', function(cb) {
    console.log('clean');

    return rimraf(config.path.preview, cb);
});

gulp.task('clean_dist', function(cb) {
    console.log('clean_dist');

    return rimraf(config.path.dist, cb);
});

gulp.task('clean_assets', function(cb) {
    console.log('clean_assets');

    return rimraf(config.path.assets + '*', cb);
});