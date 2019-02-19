const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('babelJs', function() {
  return gulp.src('./src/watermark.js')
    .pipe(gulpBabel())
    .pipe(uglify())
    .on('error', function(error) {
      console.error(error.toString());
      this.emit('end');
    })
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['babelJs']);
gulp.task('watch', function () {
  gulp.watch('./src/watermark.js', ['babelJs']);
});