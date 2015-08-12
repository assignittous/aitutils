logger = require("../lib/logger").logger
cson = require("cson")

require "sugar"
###
logger.custom "test message",
  type: "test"
  background: "Yellow"
  foreground: "black"
###

parse = require("../lib/parse").parse

testStrings = cson.parseCSONFile("tests/parse_strings.cson")

compare = (a,b)->
  if (a.length == 0) & (b.length == 0)
    return true
  else
    return (a.intersect(b).length == a.length)

testStrings.each (testString)->
  
  logger.info testString.text

  relativeDates = parse.relativeDate(testString.text)

  if compare(testString.relativeDates, relativeDates)
    logger.pass "Relative Dates"
  else
    logger.fail "Relative Dates"
  console.log "Expected: [#{testString.relativeDates.join(',')}]"
  console.log "Got: [#{relativeDates.join(',')}]"


  #console.log testString
  