/*
* @Author: Vayne
* @Date:   2016-07-06 15:55:05
* @Last Modified by:   Vayne
* @Last Modified time: 2016-07-11 18:06:42
*/


// 导入需要的模块
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    rename = require('gulp-rename');

var paths = {
    scripts:['js/index.js','js/main.js']
};
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});
gulp.task('default',function(){
    gulp.src('css/*.css')
        .pipe(minify())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('build'));
});


// 默认任务
gulp.task('default', ['watch']);

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});


// 监听&刷新
gulp.task('watch', function() {

    // 建立浏览器自动刷新服务器
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });


    // 监听相关文件，并在保存后在浏览器中自动刷新
    gulp.watch('./*.html',function() {
        browserSync.reload();
    });
    gulp.watch('./css/*.css',function() {
        browserSync.reload();
    });
    gulp.watch('./js/*.js',function() {
        browserSync.reload();
    });

});

