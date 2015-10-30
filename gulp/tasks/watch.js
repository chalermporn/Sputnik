var config = require('../config').proc,
	gulp = require('gulp');

gulp.task('watch', ['build'], function () {
	gulp.watch('src/images/**/*', ['images']);
	gulp.watch(['src/**/*.jade', 'src/tpl/**/*.json'], ['jade']);
	gulp.watch('src/css/**/*.css', ['css']);
});
