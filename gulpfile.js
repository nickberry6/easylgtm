var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback')

gulp.task('build', ['scripts', 'html', 'img']);
gulp.task('serve', ['browser-sync']);
gulp.task('vendor', ['vendorJS', 'vendorCSS', 'vendorFonts']);

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 6543,
        server: {
            baseDir: "./public",

            middleware: [
              function (req, res, next) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              next();
            },
            historyApiFallback()
          ]
        }
    });
    gulp.watch("src/**/**/*.js", ['js-watch']);
    gulp.watch("src/**/**/*.html", ['html-watch']);
});

gulp.task('html-watch', ['html'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('scripts', function() {
  return gulp.src('src/index.js')
    .pipe(browserify())
    .pipe(gulp.dest('public'));
});

gulp.task('vendorJS', function() {
  return gulp.src('src/vendor.js')
    .pipe(browserify())
    .pipe(gulp.dest('public'));
});

gulp.task('vendorCSS', function() {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('vendorFonts', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('img', function() {
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('public/images'));
});

gulp.task('html', function() {
  return gulp.src('src/**/**/*.html')
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
  return gulp.src('public')
    .pipe(clean());
});
