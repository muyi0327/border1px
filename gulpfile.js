var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');

var dest = gulp.dest('./example/css');

gulp.task('sass', function () {
    return gulp.src('./example/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded', sourceComments: false }))
        .pipe(dest);
});

gulp.task('less', function () {
    return gulp.src('./example/less/**/*.less')
        .pipe(less())
        .pipe(dest);
});