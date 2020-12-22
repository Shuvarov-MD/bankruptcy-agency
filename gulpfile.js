// Connecting NPM-packages
const {
  src, dest, watch, series, parallel,
} = require('gulp');
const fileinclide = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const del = require('del');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Concatenation & compression HTML-files
const createHTML = (cb) => {
  src('./src/html/*.html')
    .pipe(plumber())
    .pipe(fileinclide({
      prefix: '@@',
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(dest('./src/'))
    .pipe(browserSync.reload({ stream: true }));
  cb();
};

// Adding prefixes & compressing CSS-files
const createCSS = (cb) => {
  src(['./src/css/*.css', '!./src/css/*.min.css'])
    .pipe(plumber())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
    }))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(dest('./src/css/'))
    .pipe(browserSync.reload({ stream: true }));
  cb();
};

// Concatenation & compression JS-files
const createJS = (cb) => {
  src('./src/js/modules/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./src/js/'))
    .pipe(browserSync.reload({ stream: true }));
  cb();
};

// Starting the server and tracking changes in files
const server = () => {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
    notify: false,
  });

  watch('./src/html/**/*.html', createHTML);
  watch(['./src/css/*.css', '!./src/css/*.min.css'], createCSS);
  watch('./src/js/modules/*.js', createJS);
};

// Deleting a folder
const deleteFolder = () => del('./build/');

// Moving HTML-files
const buildHTML = (cb) => {
  src('./src/*.html')
    .pipe(dest('./build/'));
  cb();
};

// Moving CSS-files
const buildCSS = (cb) => {
  src('./src/css/*.min.css')
    .pipe(dest('./build/css/'));
  cb();
};

// Moving JS-files
const buildJS = (cb) => {
  src('./src/js/*.min.js')
    .pipe(dest('./build/js/'));
  cb();
};

// Moving PHP-files
const buildPHP = (cb) => {
  src('./src/php/**/*.php')
    .pipe(dest('./build/php/'));
  cb();
};

// Moving fonts
const buildFonts = (cb) => {
  src('./src/fonts/**/*')
    .pipe(dest('./build/fonts/'));
  cb();
};

// Moving & compressing images
const buildImages = (cb) => {
  src('./src/images/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false },
        ],
      }),
    ]))
    .pipe(dest('./build/images/'));
  cb();
};

// Export tasks
exports.start = series(parallel(createHTML, createCSS, createJS), server);
exports.build = series(parallel(createHTML, createCSS, createJS), deleteFolder,
  parallel(buildHTML, buildCSS, buildJS, buildPHP, buildFonts, buildImages));
