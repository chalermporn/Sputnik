var config = require('../config').proc,
    gulp = require('gulp');

gulp.task('watch', ['build'], function () {
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch(['src/css/**/*.css', 'src/**/*.pug'], ['pug']);
});
