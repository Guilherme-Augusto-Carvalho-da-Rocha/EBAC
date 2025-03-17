const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const terser = require('gulp-terser')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ level: 2 })) 
        .pipe(rename({ suffix: '.min' })) 
        .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function replaceHTML(){
    return src('./src/*.html')
        .pipe(replace('../dist', '.'))
        .pipe(dest('./dist'));
}

function compressJS(){
    return src('./src/scripts/*.js')
        .pipe(terser())
        .pipe(dest('./dist/scripts'));
}

exports.default = gulp.parallel(styles, images, replaceHTML, compressJS);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles));
}