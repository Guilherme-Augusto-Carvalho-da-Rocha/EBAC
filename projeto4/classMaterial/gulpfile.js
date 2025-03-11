const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ level: 2 })) 
        .pipe(rename({ suffix: '.min' })) 
        .pipe(gulp.dest('./dist/css'));
}


exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles));
}