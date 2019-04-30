'use strict'

var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();

var paths = {
    dist: 'dist',
};

gulp.task('Clean Dist', function () {
    return del(paths.dist);
});

gulp.task('Browser Sync', function() {
    browserSync.init({
        proxy: "apache",
        open: false,
        files: ".",
        port: 10080
    });
});

gulp.task('default', ['Browser Sync']);
