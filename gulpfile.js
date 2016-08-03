/////////DEPENDENCIES/////////
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var watcher = gulp.watch(['./public/styles/*.less'], ['default']);

///WATCH CHANGES TO LESS FILES//////
watcher.on('change', function( event ) {
	console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('less', function() {
	gulp.src('./public/styles/*.less')
		.pipe(less())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./public/styles/'))
});

gulp.task('default', ['less']);
