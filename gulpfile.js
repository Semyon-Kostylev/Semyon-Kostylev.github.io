const { src, dest, series, watch } = require('gulp')
const argv = require('yargs').argv
const gulpif = require('gulp-if')
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const isDev = () => {
  return !argv.prod
}

const isProd = () => {
  return !!argv.prod
}

const clean = () => {
  return del([
    'dist'
  ])
}

const defStyles = () => {
  return src('./src/css/**/*.css')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(gulpif(isProd(), cleanCSS({
      level: 2
    })))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
  }

const styles = () => {
  return src('./src/scss/**/*.scss')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulpif(isProd(), cleanCSS({
      level: 2
    })))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

// Минификация HTML
const htmlMinify = () => {
  return src('./src/**/*.html')
    .pipe(gulpif(isProd(), htmlMin({
      collapseWhitespace: true
    })))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

// Scripts
const scripts = () => {
  return src('./src/js/**/*.js')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(gulpif(isProd(), babel({
      presets: ['@babel/env']
    })))
    .pipe(concat('main.js'))
    .pipe(gulpif(isProd(), uglify({
      toplevel: true
    }).on('error', notify.onError())))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

// browser-sync
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('./src/**/*.html', htmlMinify)
watch('./src/css/**/*.css', defStyles)
watch('./src/scss/**/*.scss', styles)
watch('./src/js/**/*.js', scripts)

exports.clean = clean
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.default = series(clean, htmlMinify, defStyles, styles, scripts, watchFiles)
