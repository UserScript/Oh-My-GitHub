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
	'./bower_components/underscore/underscore-min.js',
	'./bower_components/underscore-template/src/underscore-template.js',
	'./src/lib/action.js',
	'./src/core.js',
	'./src/util.js',
	'./src/url.js',
	'./src/module.js',
	'./src/i18n.js',
	'./src/config.js',
	'./src/task.js',
	'./src/css.js',
	'./src/ui-entrance.js',
	'./src/ui-setting-pane.js',
	'./src/ui-setting-side-menu.js',
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

gulp.task('watch', ['dev'], function () {
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
		//.pipe(uglify({
		//	preserveComments: 'some'
		//}))
		//.pipe(wrap({src: path.join(myPath.src, '_wrapper/userscript.ejs')}))
		.pipe(gulp.dest(myPath.dest))
})
