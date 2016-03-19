var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch'),
    config = require('../config.js');

gulp.task('watch', function() {
    console.log('watch');

    watch('bower.json', function() {
        runSequence(
            'wiredep',
            'browser-reload'
        );
    });

    watch(config.path.app + '**/*.ect', function() {
        runSequence(
            'ect',
            'htmlhint',
            'inject'
        );
    });

    watch(config.path.styles + '**/*.styl', function() {
        runSequence(
            'stylus',
            'csslint',
            'autoprefixer',
            'browser-reload'
        );
    });

    watch(config.path.scripts + '**/*.js', function() {
        runSequence(
            'jshint',
            'browser-reload'
        );
    });

    watch(config.path.sprite + '**/*.png', function() {
        runSequence(
            'imagemin',
            'sprite'
        );
    });

    watch(config.path.svgs + '**/*.svg', function() {
        runSequence(
            'iconFont'
        );
    });

    watch(config.path.svgSprite + '**/*.svg', function() {
        runSequence(
            'svgSprite'
        );
    });

});