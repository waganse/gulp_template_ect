var gulp = require('gulp'),
    merge = require('merge-stream'),
    sprite = require('gulp.spritesmith'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,

    config = require('../config.js'),
    spriteData, imgStream, styleStream;

gulp.task('sprite', function() {
    console.log('sprite');

    spriteData = gulp.src(config.sprite.watched)
        .pipe(plumber())
        .pipe(sprite({
            imgName: config.sprite.destImg,
            cssName: config.sprite.destCSS,
            imgPath: config.sprite.imgPath,
            cssFormat: config.sprite.cssFormat
        }));
        // .pipe(reload({stream:true}));

    imgStream = spriteData.img
                .pipe(gulp.dest(config.path.img));

    styleStream = spriteData.css
                .pipe(gulp.dest(config.path.styles));

    return merge(imgStream, styleStream);
});