var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    ssi = require('browsersync-ssi'),
    // ssi = require('connect-ssi'),
    config = require('../config.js');

gulp.task('browser-sync', function() {
    console.log('brower-sync');

    return browserSync({
        // notify: false,
        // logLevel: 'silence',
        port: 9000,
        ui: {
            port: 9010
        },
        server: {
            baseDir: [config.path.tmp, config.path.app],
            routes: {'/bower_components': 'bower_components'},
            middleware: [
                ssi({
                    baseDir: __dirname + '/../app/ssi',
                    ext: '.html'
                })
            ]
        }
        // open: 'external'
    });
});

gulp.task('browser-reload', function() {
    console.log('brower-reload');

    return browserSync.reload();
});