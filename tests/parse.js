var compare, cson, logger, parse, testStrings;

logger = require("../lib/logger").logger;

cson = require("cson");

require("sugar");


/*
logger.custom "test message",
  type: "test"
  background: "Yellow"
  foreground: "black"
 */

parse = require("../lib/parse").parse;

testStrings = cson.parseCSONFile("tests/parse_strings.cson");

compare = function(a, b) {
  if ((a.length === 0) & (b.length === 0)) {
    return true;
  } else {
    return a.intersect(b).length === a.length;
  }
};

testStrings.each(function(testString) {
  var relativeDates, years;
  logger.info(testString.text);
  relativeDates = parse.relativeDates(testString.text);
  if (compare(testString.relativeDates, relativeDates)) {
    logger.pass("Relative Dates");
  } else {
    logger.fail("Relative Dates");
  }
  console.log("Expected: [" + (testString.relativeDates.join(',')) + "]");
  console.log("Got: [" + (relativeDates.join(',')) + "]");
  years = parse.years(testString.text);
  console.log(years);
  console.log(testString.years);
  if (compare(testString.years, years)) {
    logger.pass("Years");
  } else {
    logger.fail("Years");
  }
  console.log("Expected: [" + (testString.years.join(',')) + "]");
  console.log("Got: [" + (years.join(',')) + "]");
  return console.log(parse.shortDates(testString.text));
});
