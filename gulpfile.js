'use strict'

var path = require('path')
var gulp = require('gulp')
var del = require('del')
var concat = require('gulp-concat')
var wrap = require('gulp-wrap')
var replace = require('gulp-replace')
var uglify = require('gulp-uglify')

var myPath = {
	src: './src/',
	dest: './dist/',
	debug: './_debug/',
}
var fileList = [
	'./src/meta.js',
	'./src/core.js',
	'./src/language.js',
	'./src/url.js',
	'./src/module/*.js',
	'./src/init.js',
]
var fileName = 'oh-my-github.user.js'


gulp.task('default', ['clean'], function () {
	gulp.start('js')
})

gulp.task('clean', function () {
	del(path.join(myPath.dest, '*.*'))
})

gulp.task('watch', function () {
	gulp.watch([path.join(myPath.src, '**/*.*')], ['dev'])
})

gulp.task('dev', function () {
	gulp.src(fileList)
		.pipe(concat(fileName))
		.pipe(gulp.dest(myPath.debug))
})

gulp.task('js', function() {
	gulp.src(fileList)
		.pipe(concat(fileName))
		.pipe(replace(/\/\*\* DEBUG_INFO_START \*\*\//g, '/*'))
		.pipe(replace(/\/\*\* DEBUG_INFO_END \*\*\//g, '*/'))
		.pipe(uglify({
			preserveComments: 'some'
		}))
		.pipe(wrap({src: path.join(myPath.src, '_wrapper/userscript.ejs')}))
		.pipe(gulp.dest(myPath.dest))
})
