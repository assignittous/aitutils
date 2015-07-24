var CSON, cwd;

CSON = require('cson');

cwd = process.env.PWD || process.cwd();

exports.configuration = {
  current: {},
  cwd: function() {
    return process.env.PWD || process.cwd();
  },
  load: function(path) {
    return this.current = CSON.parseCSONFile(path);
  },
  reset: function() {
    return this.current = {};
  },
  upgrade: function(fn) {
    console.log("noop");
    if (fn != null) {
      return fn();
    }
  }
};
