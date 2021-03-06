'use strict';
var chalk, moment;

chalk = require('chalk');

moment = require('moment');

exports.logger = {
  log: [],
  init: function() {
    this.log = [];
    return this;
  },
  completed: function() {
    return this.log.join("\n");
  },
  append: function(type, msg) {
    var entry;
    entry = "[" + (moment().format('HH:mm:ss.SSS')) + "] " + type + " " + msg;
    this.log.push(chalk.stripColor(entry));
    return console.log(entry);
  },
  pass: function(msg) {
    return this.append(chalk.bgGreen.black(" PASS "), msg);
  },
  fail: function(msg) {
    return this.append(chalk.bgRed.black(" FAIL "), msg);
  },
  debug: function(msg) {
    return this.append(chalk.bgWhite.black(" DEBUG "), msg);
  },
  info: function(msg) {
    return this.append(chalk.bgWhite.black(" INFO "), msg);
  },
  error: function(msg) {
    return this.append(chalk.bgRed.black(" ERROR "), msg);
  },
  warn: function(msg) {
    return this.append(chalk.bgYellow.black(" WARN "), msg);
  },
  bot: function(msg) {
    return this.append(chalk.bgGreen.white(" BOT "), msg);
  },
  shell: function(msg) {
    this.append(chalk.bgBlue.white(" SHELL: "), "");
    return console.log(msg);
  },
  exec: function(msg) {
    return this.append(chalk.bgBlue.white(" EXEC "), msg);
  },
  stub: function(msg) {
    return this.append(chalk.bgWhite.black(" STUB "), msg);
  },
  todo: function(msg) {
    return this.append(chalk.bgYellow.black(" TODO "), msg);
  },
  sql: function(msg) {
    this.append(chalk.bgMagenta.black(" SQL "), "");
    return console.log(msg);
  },
  custom: function(msg, options) {
    var background, foreground, type;
    type = options.type.toUpperCase() || "LOG";
    background = options.background;
    foreground = options.foreground || "black";
    return this.append(chalk["bg" + background][foreground.toLowerCase()](" " + type + " "), msg);
  }
}.init();
