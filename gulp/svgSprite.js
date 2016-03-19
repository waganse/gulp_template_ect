

var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprites'),
    svgo = require('gulp-imagemin'),
    replace = require('gulp-replace'),
    config = require('../config.js'),
    stylusPath = config.path.styles + '_svg_sprite.styl',
    htmlPath = config.path.svgSprite + '_svg_sprites.html',
    option = {
        mode: 'symbols',
        svgId: 'svg-%f',
        svg: {
           symbols: "../svg-symbols.svg"
        }
    };

gulp.task('svgSprite', function(tasks) {
    console.log('svg-sprite');

    return gulp.src(config.path.svgs + '*.svg')
        .pipe(svgo())
        .pipe(svgSprite(option))
        .pipe(gulp.dest(config.path.svgSprite));
});