###

# Compile lib folder

`gulp compile-lib`


---
###

del = require "del"
gulp   = require "gulp"
coffee = require "gulp-coffee"
plumber = require "gulp-plumber"

# paths


sourcePath = ["./src/tests/**/*.coffee"]
targetPath = "./tests/"

module.exports = ()->
  # del.sync libPath
  gulp.src(sourcePath).pipe(plumber()).pipe(coffee({bare:true})).pipe(gulp.dest(targetPath))
  return

module.exports.watch = sourcePath