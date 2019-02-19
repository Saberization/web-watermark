const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('babelJs', function() {
  return gulp.src('./src/watermark.js')
    .pipe(gulpBabel())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }));
});