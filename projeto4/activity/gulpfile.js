const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');
const replace = require('gulp-replace');

function compressJS(){
    return gulp.src('./src/scripts/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist/scripts'));
}

function replaceHTML(){
    return gulp.src('./src/*html')
        .pipe(replace('../dist', '.'))
        .pipe(gulp.dest('./dist'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ level: 2 })) 
        .pipe(rename({ suffix: '.min' })) 
        .pipe(gulp.dest('./dist/styles'));
}

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, compressJS, replaceHTML);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles));
}