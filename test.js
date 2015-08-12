var logger;

logger = require("./lib/logger").logger;

logger.custom("test message", {
  type: "test",
  background: "Yellow",
  foreground: "black"
});
