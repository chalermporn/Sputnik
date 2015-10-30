var config = require('../config').css,
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber');

// PostCSS & plugins
var postcss = require('gulp-postcss'),
	cssnano = require('cssnano'),
	precss = require('precss'),
	propertyLookup = require('postcss-property-lookup');

gulp.task('css', function () {
	var processors = [
		precss,
		propertyLookup
	];

	return gulp.src(config.src)
		.pipe(plumber())
		.pipe(postcss(processors))
		.pipe(
			postcss([
				cssnano({ discardComments: {removeAll: true} })
			]
		))
		.pipe(gulp.dest(config.dest))
		.pipe(reload({ stream: true }));
});
