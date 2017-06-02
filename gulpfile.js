var gulp = require('gulp');
var util=require('gulp-util');
var cssmin=require('gulp-minify-css');
var htmlmin=require('gulp-minify-html');
//css
gulp.task('myminifycss', function () {
gulp.src('mycss/*.css')
.pipe(cssmin())
.pipe(gulp.dest('ya'));
});
//html
gulp.task('myminifyhtml', function () {
gulp.src('*.html')
.pipe(htmlmin())
.pipe(gulp.dest('ya'));
});
gulp.task('default',['myminifycss','myminifyhtml']);