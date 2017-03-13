const gulp = require('gulp');
// 
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext =require('cssnext');
const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');//压缩

// 
const uglify = require('gulp-uglify');//混淆js
const imagemin = require('gulp-imagemin');//图片压缩

const processors = [
	autoprefixer(
		{
		browsers: ['last 5 version'],
		cascade: true,
		remove: true
	})
	// cssnext()
];

gulp.task('Css',()=>{
	gulp.src(['./css/*.css'])
		.pipe(sass().on('error',sass.logError))
		.pipe(postcss(processors))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('getCss',()=>{
	return gulp.watch('./css/*.css',['Css']);
})

gulp.task('Js',()=>{
	gulp.src(['./script/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('getJs',()=>{
	return gulp.watch('./script/*.js',['Js']);
})