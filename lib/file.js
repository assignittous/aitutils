var _, del, fs, fyle, logger, path;

fs = require("fs-extra");

fyle = require("file");

logger = require("../lib/logger").logger;

path = require("path");

del = require("del");

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
  copy: function(source, destination, clobber) {},
  move: function(source, destination, clobber) {},
  rename: function(source, destination) {},
  traverse: function(path, callback) {
    return fyle.walk(path, callback);
  },
  cleanName: function(path) {},
  "delete": function(path) {
    return del.sync(path);
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
