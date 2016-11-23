var gulp = require('gulp'),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    config = require('../config.js');

gulp.task('inject', function() {
    console.log('inject');

    return gulp.src(config.path.tmp + '**/*.html')
        .pipe(
            inject(gulp.src([config.path.app + '**/*.js', config.path.tmp + '**/*.css'], { read: false, addRootSlash: true }),
                {
                    transform: function (filepath) {
                        var filename;
                        if (filepath.match(/^\/app\/js\/*/)) {
                            filename = filepath.slice(4);
                            return '<script src="' + filename + '"></script>';
                        } else if (filepath.match(/^\/.tmp\/dist\/static\/css\/corp\/*/)) {
                            filename = filepath.slice(10);
                            return '<link rel="stylesheet" href="' + filename + '">';
                        }
                    }
                }
            )
        )
        .pipe(reload({stream:true}))
        .pipe(gulp.dest(config.path.tmp));
});