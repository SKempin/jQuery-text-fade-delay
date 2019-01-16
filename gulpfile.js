// Load plugins
var gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  size = require("gulp-size"),
  cleanCSS = require("gulp-clean-css"),
  sourcemaps = require("gulp-sourcemaps"),
  sass = require("gulp-sass"),
  fs = require("fs"),
  source = require("vinyl-source-stream"),
  buffer = require("vinyl-buffer"),
  browserify = require("browserify"),
  del = require("del");

// Output Stats
require("gulp-stats")(gulp);

// Paths
var paths = {
  scss: "src/scss/*.scss",
  css: "dist/css/",
  js: "src/js/fader.js",
  compiledjs: "dist/js/",
  html: "src/*.html"
};

// SASS task
gulp.task("sass", function() {
  return gulp
    .src(paths.scss)
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass({}).on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(
      cleanCSS({
        compatibility: "ie8"
      })
    )
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.css))
    .pipe(
      size({
        title: "MINIFIED CSS -",
        pretty: true,
        showFiles: true
      })
    );
});

// Browserify task
gulp.task("browserify", function() {
  return browserify(paths.js)
    .bundle()
    .pipe(source("fader.js"))
    .pipe(gulp.dest(paths.compiledjs))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest(paths.compiledjs));
});

// Clean files task
gulp.task("clean", function() {
  return del([paths.css, paths.compiledjs, "docs"]);
});

// Copy index.html task
gulp.task("copy-html", function() {
  return gulp.src(paths.html).pipe(gulp.dest("dist/"));
});

// Copy docs (Github pages) task
gulp.task("copy-docs", function() {
  return gulp
    .src("dist/**/*")
    .pipe(gulp.dest("docs/"))
    .pipe(
      size({
        pretty: true,
        showFiles: true
      })
    );
});

// Watch task
gulp.task("watch", function() {
  gulp.watch(paths.scss, ["sass"]);
  gulp.watch(paths.js, ["browserify"]);
  gulp.watch(paths.html, ["copy-html"]);
});

// Default 'gulp' task (browser sync, compile SASS, etc)
gulp.task(
  "default",
  ["clean", "sass", "browserify", "copy-html", "watch"],
  function() {}
);
