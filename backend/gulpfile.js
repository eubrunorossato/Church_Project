var gulp = require('gulp');
var ts = require('gulp-typescript');
const sourcemaps = require("gulp-sourcemaps");
const filter = require("gulp-filter");
const watch = require("gulp-watch");
var tsProject = ts.createProject("./src/tsconfig.json")
 
gulp.task("transpile", () => {
    const tsResult = tsProject
      .src()
      .pipe(sourcemaps.init())
      .pipe(tsProject(ts.reporter.fullReporter()))
      .on("error", () => null);
  
    return tsResult.js.pipe(sourcemaps.write("./")).pipe(gulp.dest("./dist"));

});

    function watchserver2() {
        return watch("./src/**/*.{ts,tsx}",
          gulp.series("transpile")
        );
      };
  
exports.default = gulp.series(watchserver2)