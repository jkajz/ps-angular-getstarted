'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var config = {
	port: '8080',
	devBaseUrl: 'http://localhost',
	paths: {
		html: './www/*.html',
		js: './www/src/app/*.js',
		css: './www/css/*.css'
	}
};


gulp.task('serve', function() {
	connect.server({
		root: ['www'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify('./www/src/app/app.js')
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./www/src'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
	gulp.watch(config.paths.css, ['css']);
});


gulp.task('default', ['serve', 'watch']);