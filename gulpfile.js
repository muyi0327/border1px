var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');

var origin = gulp.src('./example/**/*.scss');
var dest = gulp.dest('./example/');

gulp.task('sass', function(){
    return origin.pipe(sass({outputStyle:'expanded', sourceComments: false})).pipe(dest);
});

gulp.task('less', function(){
    return origin.pipe(less()).pipe(dest);
});