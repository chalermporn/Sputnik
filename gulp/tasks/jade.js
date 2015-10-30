var config = require('../config').jade,
	gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	jade = require('gulp-jade'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

gulp.task('jade', function () {
	gulp.src(config.src)
		.pipe(plumber())
		.pipe(jade({ pretty: true }))
		.pipe(gulp.dest(config.dest))
		.pipe(reload({ stream: true }));
});
