var gulp = require('gulp');
var traceur = require('gulp-traceur');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/es6/**/*.es6', ['default']);
});

gulp.task('default', function() {
	return gulp.src('src/es6/**/*.es6')
			.pipe(traceur())
			.pipe(gulp.dest('www/js/'));
});

