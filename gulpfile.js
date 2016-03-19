var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir'),
    dir = requireDir('./gulp'),
    config = require('./config.js');

gulp.task('serve', function() {
    runSequence(
        ['svgSprite', 'iconFont', 'sprite'],
        ['clean_serve', 'wiredep'],
        ['ect', 'imagemin', 'jshint'],
        'stylus',
        'csslint',
        'autoprefixer',
        ['inject', 'watch'],
        'browser-sync'
    );
});

gulp.task('preview', function() {
    runSequence(
        ['clean_preview', 'wiredep'],
        ['ect', 'imagemin', 'jshint'],
        'stylus',
        'csslint',
        'autoprefixer',
        'inject',
        ['copy_preview']
    );
});

gulp.task('build', function() {
    runSequence(
        ['clean_dist', 'clean_assets', 'wiredep'],
        ['ect', 'imagemin', 'jshint'],
        'stylus',
        'csslint',
        'autoprefixer',
        'inject',
        'copy_dist',
        'useref',
        'copy_assets'
    );
});
