const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function ComprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function ComprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts/'))
}

function CompilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

//funções com callback são publicas
function FuncaoPadrao(callback){
    setTimeout(function(){
        console.log('Executando via Gulp');
        callback();
    }, 2000);
}

function DizOi(callback){
    console.log('Olá Gulp');
    DizTchau();
    callback();
}

//enquanto sem callback são privadas
function DizTchau(){
    console.log('tchau gulp');
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false} , gulp.series(CompilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false} , gulp.series(ComprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false} , gulp.series(ComprimeImagens));
}