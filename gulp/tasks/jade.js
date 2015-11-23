var config = require('../config').jade,
	gulp = require('gulp'),
	fs = require('fs'),
	plumber = require('gulp-plumber'),
	path = require('path'),
	jade = require('gulp-jade'),
	data = require('gulp-data'),
	inline = require('gulp-inline-css'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

// PostHTML & plugins
var posthtml = require('gulp-posthtml'),
	doctype = require('posthtml-doctype'),
	attr = require('posthtml-extend-attrs')

gulp.task('jade', function () {
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
		.pipe(data(function(file) {
			return JSON.parse(fs.readFileSync(config.data + path.basename(file.path, '.jade') + '.json'));
		}))
		.pipe(jade({ pretty: true }))
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
