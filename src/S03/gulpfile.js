'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('Browser Sync', function() {
    browserSync.init({
        proxy: "apache",
        open: false,
        files: ".",
        port: 8880
    });
});

gulp.task('default', gulp.series('Browser Sync'));