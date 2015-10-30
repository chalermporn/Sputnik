var config = require('../config').inline,
	gulp = require('gulp'),
	inline = require('gulp-inline-css');

gulp.task('inline', function () {
	return gulp.src(config.src)
		.pipe(inline({
			applyStyleTags: false,
			removeStyleTags: false,
			applyWidthAttributes: true
		}))
		.pipe(gulp.dest(config.dest));
});
