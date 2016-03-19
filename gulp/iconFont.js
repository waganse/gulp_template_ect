var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    rename = require('gulp-rename'),
    config = require('../config.js'),
    fs = require('fs');

gulp.task('iconFont', function() {
    console.log('iconFont');

    var fontName = 'icon';

    return gulp.src(config.path.svgs + '**/*.svg')
        .pipe(iconfont({ fontName: fontName, normalize: true }))
            .on('glyphs', function(glyphs) {
                var options = {
                    className: fontName,
                    fontName: fontName,
                    fontPath: '/fonts/',
                    glyphs: glyphs
                };

                gulp.src(config.path.svgs + 'config/_iconTemplate.styl')
                    .pipe(consolidate('lodash', options))
                    .pipe(rename({ basename: '_' + fontName }))
                    .pipe(gulp.dest(config.path.styles));


                // gulp.src(config.path.svgs + 'config/_iconTemplate.html')
                //     .pipe(consolidate('lodash', options))
                //     .pipe(rename({ basename: fontName }))
                //     .pipe(gulp.dest(config.path.svgs + 'config'));

                // fs.createReadStream(config.path.styles + '_' + fontName + '.styl').pipe(fs.createWriteStream(config.path.svgs + 'config/' + fontName + '.css'));
                // fs.createReadStream(config.path.fonts + '*').pipe(fs.createWriteStream(config.path.svgs + 'config'));
            })
        .pipe(gulp.dest(config.path.fonts));
});