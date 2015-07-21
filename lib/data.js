var convert, fs, logger, nodePath, pd;

fs = require('fs-extra');

logger = require('knodeo-logger').Logger;

convert = require('../lib/convert').Convert;

nodePath = require('path');

pd = require('pretty-data').pd;

exports.data = {
  toCsv: function(path, data, attributes, transformFunction) {
    return fs.outputFileSync(path, convert.arrayToCsv(data, attributes));
  },
  toXlsx: function(path, data, attributes, transformFunction) {},
  toXml: function(path, data, attributes, transformFunction) {},
  toRaw: function(path, data) {
    var extension, object;
    extension = nodePath.extname(path);
    switch (extension) {
      case ".xml":
        data = pd.xml(data);
        break;
      case ".json":
        data = pd.json(data);
    }
    fs.outputFileSync(path, data);
    ({
      csvRowSanitize: function(object, attributes) {}
    });
    if (typeof attributes !== "undefined" && attributes !== null) {
      object = Object.select(object, attributes);
    }
    return Object.values(object).map(function(x) {
      var out;
      if (isNaN(x)) {
        out = "\"" + (x.replace(/\"/g, '\"\"')) + "\"";
        return out;
      } else {
        return x;
      }
    });
  }
};
