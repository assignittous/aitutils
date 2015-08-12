logger = require("./lib/logger").logger
_ = require("lodash")
###
logger.custom "test message",
  type: "test"
  background: "Yellow"
  foreground: "black"
###

parse = require("./lib/parse").parse

testStrings = [
  "send me this year's income statement"
  "give me last quarter's income statement"
  "tell me the income statement for last year"
  "show me the income statement for last month"  
  "send me last week's status report"
  "what were sales for the month of july"
  "what were sales for 07/2015"
  "how many cars were sold in july"
  "how many tires were sold in july, 2014"
  "how many tires were sold last july"
  "last month's income statement"
  "tires sold in july 2014"
  "Send me yesterday's sales report"
  "What were last quarter's sales for widgets"
  "I need today's dashboard"  
]  


_.forEach testStrings, (testString)->
  logger.info testString
  console.log parse.relativeDate(testString)