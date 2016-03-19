var gulp = require('gulp'),
    assetpaths = require('gulp-assetpaths'),
    config = require('../config.js');

gulp.task('assetpaths', function(cb) {
    console.log('assetpaths');

    gulp.src([config.path.preview + '*'])
        .pipe(assetpaths({
            oldDomain: '/',
            newDomain: '.',
            docRoot : config.path.preview,
            filetypes : ['jpg','png','ico','gif','js','css'],
            templates: true
         }))
        .pipe(gulp.dest(config.path.preview));

    console.log('assetpaths2');

    gulp.src([config.path.preview + 'css/*'])
        .pipe(assetpaths({
            oldDomain: '/',
            newDomain: '..',
            docRoot : config.path.preview,
            filetypes : ['css', 'png', 'eot'],
            templates: true
         }))
        .pipe(gulp.dest(config.path.preview));

    return;
});