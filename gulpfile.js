/*!
 * gulp
 * mistong 前端编译套件
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
 
// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('less-plugin-autoprefix'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    minifycss = new LessPluginCleanCSS({ advanced: true }),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    path = require("path"),
    del = require('del');

   require("console-stamp")(console, "HH:MM:ss.l", '[' + process.pid + ']');


gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
      // paths: [path.join(__dirname, 'less', 'includes')],
      // plugins:[minifycss]
    }))
    .pipe(gulp.dest('./dist/css'));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
 
// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});
 
// Clean
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/images'], cb)
});
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('less', 'scripts', 'images');
});
 
// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/less/**/*.less', ['less']);
  // Watch .js files
  // gulp.watch('src/scripts/**/*.js', ['scripts']);
  // // Watch image files
  // gulp.watch('src/images/**/*', ['images']);
  // // Create LiveReload server
  // livereload.listen();
  // // Watch any files in dist/, reload on change
  // gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task("build",function () {
  gulp.start('less');
  // body...
});