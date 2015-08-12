'use strict'

chalk = require('chalk')
moment = require('moment')

exports.logger = {
  log: []
  init: ()->
    @log = []
    return this
  completed: ()->
    return @log.join("\n")
  append: (type, msg)->
    entry = "[#{moment().format('HH:mm:ss.SSS')}] #{type} #{msg}"
    @log.push chalk.stripColor(entry)
    console.log entry
  pass: (msg)->
    @append chalk.bgGreen.black(" PASS "), msg
  fail: (msg)->
    @append chalk.bgRed.black(" ERROR "), msg
  debug: (msg)->
    @append chalk.bgWhite.black(" DEBUG "), msg    
  info: (msg)->
    @append chalk.bgWhite.black(" INFO "), msg
  error: (msg)->
    @append chalk.bgRed.black(" ERROR "), msg
  warn: (msg)->
    @append chalk.bgYellow.black(" WARN "), msg
  bot: (msg)->
    @append chalk.bgGreen.white(" BOT "), msg
  shell: (msg)->
    @append chalk.bgBlue.white(" SHELL: "), ""
    console.log msg
  exec: (msg)->
    @append chalk.bgBlue.white(" EXEC "), msg
  stub: (msg)->
    @append chalk.bgWhite.black(" STUB "), msg
  todo: (msg)->
    @append chalk.bgYellow.black(" TODO "), msg  
  sql: (msg)->
    @append chalk.bgMagenta.black(" SQL "), ""  
    console.log msg
  custom: (msg, options)->
    type = options.type.toUpperCase() || "LOG"
    background = options.background
    foreground = options.foreground || "black"
    # todo: add value checks for background and foreground
    # todo: force capitalization of 1st letter of background
    @append chalk["bg#{background}"][foreground.toLowerCase()](" #{type} "), msg


}.init()