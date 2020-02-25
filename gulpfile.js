var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var imageMIN = require('gulp-imagemin');

gulp.task('scripts', function () {
  return gulp.src([
      'library/semantic/dist/semantic.min.js',
      'library/slick-carousel/slick/slick.min.js',
      'library/scrollreveal/dist/scrollreveal.min.js',
      'library/enquire.js/dist/enquire.min.js',
      'library/DPlayer/DPlayer.min.js',
      'library/fullPage.js/dist/fullpage.min.js',
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
  gulp.src([
      'library/fullPage.js/dist/fullpage.min.css',
      'library/slick-carousel/slick/slick.css',
      'library/slick-carousel/slick/slick-theme.css',
      'library/DPlayer/DPlayer.min.css',
      'library/flowplayer/dist/skin/skin.css'
    ])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(minifyCSS())
    .pipe(rename('vendor.min.css'))
    .pipe(gulp.dest('dist/styles'));

  return gulp.src('styles/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(minifyCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('images', function () {
  return gulp.src('images/demo/*')
    .pipe(imageMIN())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('hello', function () {
  console.log('您好');
});

gulp.task('watch', function () {
  gulp.watch('styles/*.css', ['styles']);
});

gulp.task('default', gulp.series('hello'));
