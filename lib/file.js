var _, fs, fyle, logger, path;

fs = require("fs-extra");

fyle = require("file");

logger = require("../lib/logger").logger;

path = require("path");

_ = require("lodash");

exports.file = {
  cleanPath: function(filePath) {
    return path.normalize(filePath);
  },
  ensureExtension: function(filePath, ext) {
    if (_.endsWith(filePath, ext)) {
      return filePath;
    } else {
      return "" + filePath + ext;
    }
  },
  open: function(file) {
    return fs.readFileSync(file, {
      encoding: 'utf8'
    });
  },
  save: function(file, data) {
    return fs.writeFileSync(file, data);
  },
  append: function(file, data) {
    return fs.appendFileSync(file, data);
  },
  del: function(filePath) {
    return fs.removeSync(filePath);
  },
  exists: function(filePath) {
    var e, stats;
    try {
      stats = fs.lstatSync(filePath);
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
  copy: function(source, destination, clobber) {
    var options;
    options = {
      clobber: false
    };
    if (clobber != null) {
      if (clobber) {
        options = {
          clobber: true
        };
      }
    }
    return fs.copy(source, destination, options);
  },
  move: function(source, destination, clobber) {
    var options;
    options = {
      clobber: false
    };
    if (clobber != null) {
      if (clobber) {
        options = {
          clobber: true
        };
      }
    }
    fs.copySync(source, destination, options);
    return fs.removeSync(source);
  },
  rename: function(source, destination) {
    return fs.renameSync(source, destination);
  },
  isFolder: function(filePath) {
    var stats;
    if (this.exists(filePath)) {
      stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  newFolder: function(folderName) {
    return fs.mkdirsSync(folderName);
  },
  traverse: function(directoryPath, callback) {
    return fyle.walkSync(directoryPath, callback);
  },
  setupFolderTree: function(subfolders) {
    return subfolders.each(function(subfolderPath) {
      return fs.mkdirsSync(subfolderPath, function(err) {
        if (err) {
          return logger.error(subfolderPath + " could not be created.");
        } else {
          return logger.info(subfolderPath + " created.");
        }
      });
    });
  }
};
