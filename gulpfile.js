/**
 *
 * Install Locals Dev
 * npm install gulp gulp-jshint jshint-stylish --save-dev
 *
 */
/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module */
(function () {

    'use strict';

    var // requires
        gulp = require('gulp'),
        path = require('path'),
        bump = require('gulp-bump'),
        jshint = require('gulp-jshint');

    gulp.task('bump', function () {
        gulp.src('./package.json')
            .pipe(bump({
                type: 'minor'
            }))
            .pipe(gulp.dest('./'));
    });

    gulp.task('default', function () {
        gulp.src(['./index.js'])
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('jshint-stylish'));
    });

}());
