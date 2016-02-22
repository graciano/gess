'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    del = require('del'),
    browserify = require('gulp-browserify'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass');

var paths = {
    buildPath: './'
};
paths.scripts = {
    buildPath: paths.buildPath+"js",
    srcFiles: ['js/**/*.js', '!js/main.min.js'],
    destFile: "main.min.js"
};
paths.styles = {
    buildPath: paths.buildPath+"sass-preview",
    srcFiles: ['./sass-preview/**/*.scss', 'node_modules/highlight.js/styles/github.css'],
    destFile: "preview.css"
};

function showTime(){//hu3
    return (new Date()).toTimeString().substr(0, 8);
}

gulp.task('scripts', function() {
    return gulp.src(paths.scripts.srcFiles)
        .pipe(concat(paths.scripts.destFile))
        .pipe(browserify())
        .pipe(gulp.dest(paths.scripts.buildPath))
        .pipe(notify({message: 'scripts merged o/\nat '+showTime()}));
});

gulp.task('styles', ['clear-css'], function(){
    return gulp.src(paths.styles.srcFiles)
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat(paths.styles.destFile))
        .pipe(gulp.dest(paths.styles.buildPath))
        .pipe(notify({message: 'sass compiled o/\nat '+showTime()}));
});

gulp.task('watch', function(){
    gulp.watch('./**/*.scss', ['styles']);
    gulp.watch(paths.scripts.srcFiles, ['scripts']);
});

gulp.task('clear-css', function() {
    return del(['./sass-preview/**/*.css']);
});

gulp.task('clear', function(){
    gulp.start('clear-sass');
});

gulp.task('default', function() {
    gulp.start('scripts');
    gulp.start('styles');
});
