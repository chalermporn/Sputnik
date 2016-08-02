var config = require('../config').css,
    browserSync = require('browser-sync'),
    gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload;

// PostCSS & plugins
var cssnano = require('cssnano'),
    precss = require('precss'),
    propertyLookup = require('postcss-property-lookup'),
    size = require('postcss-size'),
    postcss = require('gulp-postcss');

gulp.task('css', function () {
    var plugins = [
        precss,
        propertyLookup,
        size
    ];

    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(postcss(plugins))
        .pipe(
            postcss([
                cssnano({ discardComments: {removeAll: true} })
            ]
        ))
        .pipe(gulp.dest(config.dest))
        .pipe(reload({ stream: true }));
});
