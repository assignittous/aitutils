var _, fs, logger;

fs = require("fs-extra");

logger = require("./lib/logger").logger;

_ = require("lodash");

exports.file = {
  open: function(path) {
    return fs.readFileSync(path, {
      encoding: 'utf8'
    });
  },
  save: function(path, data) {
    return fs.writeFileSync(path, data);
  },
  checkExtension: function(path, ext) {
    if (_.endsWith(path, ext)) {
      return path;
    } else {
      return "" + path + ext;
    }
  },
  exists: function(path) {
    var e, stats;
    try {
      stats = fs.lstatSync(path);
      if (stats.isDirectory()) {
        return false;
      } else {
        return true;
      }
    } catch (_error) {
      e = _error;
      return false;
    }
  },
  setupFolderTree: function(subfolders) {
    return subfolders.each(function(path) {
      return fs.mkdirsSync(path, function(err) {
        if (err) {
          return logger.error(path + " could not be created.");
        } else {
          return logger.info(path + " created.");
        }
      });
    });
  }
};
