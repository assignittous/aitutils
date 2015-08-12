logger = require("./lib/logger").logger

###
logger.custom "test message",
  type: "test"
  background: "Yellow"
  foreground: "black"
###

parse = require("./lib/parse").parse

testString = "send me last year's income statement"