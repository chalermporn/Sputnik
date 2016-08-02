var config = require('../config').pug,
    browserSync = require('browser-sync'),
    fs = require('fs'),
    gulp = require('gulp'),
    inline = require('gulp-inline-css'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    reload = browserSync.reload;

// PostHTML & plugins
var attr = require('posthtml-extend-attrs'),
    doctype = require('posthtml-doctype'),
    posthtml = require('gulp-posthtml');

gulp.task('pug', ['css'], function () {
    var plugins = [
        doctype({ doctype : 'HTML 4.01 Transitional' }),
        attr({
            attrsTree: {
                'table': {
                    cellpadding: '0',
                    cellspacing: '0'
                }
            }
        })
    ];
    
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(posthtml(plugins, {
            closingSingleTag: 'slash'
        }))
        .pipe(inline({
            applyStyleTags: false,
            removeStyleTags: false,
            applyWidthAttributes: true
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(reload({ stream: true }));
});
