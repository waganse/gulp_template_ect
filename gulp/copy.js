var gulp = require('gulp'),
    replace = require('gulp-replace'),
    config = require('../config.js');

gulp.task('copy_preview', function(cb) {
    console.log('copy');

    gulp.src([config.path.tmp + '**'])
        .pipe(gulp.dest(config.path.preview));

    gulp.src([config.path.scripts + '*'])
        .pipe(gulp.dest(config.path.preview + 'js'));

    gulp.src([config.path.img + '*', '!' + config.path.img + '_*'])
        .pipe(gulp.dest(config.path.preview + 'img'));

    cb();
});

gulp.task('copy_dist', function(cb) {
    console.log('copy dist');

    return gulp.src([
        config.path.app + '**',
        '!' + config.path.app + '*.ect',
        '!' + config.path.app + 'js',
        '!' + config.path.app + 'js/**',
        '!' + config.path.app + 'css',
        '!' + config.path.app + 'css/**',
        '!' + config.path.app + '*.ect',
        '!' + config.path.app + '**/_*',
        '!' + config.path.app + '**/_*/**'
        ])
        .pipe(gulp.dest(config.path.dist));
});

gulp.task('copy_assets', function(cb) {
    console.log('copy assets');

    return gulp.src([
        config.path.dist + '**',
        '!' + config.path.dist + '*.html',
        ])
        .pipe(replace('/img/', '../img/'))
        .pipe(gulp.dest(config.path.assets));
});