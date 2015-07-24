var _, array, fs, jade;

_ = require("lodash");

array = require("../lib/array").array;

jade = require("jade");

fs = require("fs-extra");

exports.xml = {
  tidy: function(xml) {
    var cleansed, fileContents, regex;
    console.log("tidy");
    fileContents = fs.readFileSync(path, {
      encoding: 'utf8'
    });
    regex = new RegExp("<(.*?) (.*)/>", "g");
    cleansed = fileContents.replace(regex, "<$1 $2></$1>");
    return fs.writeFileSync(jadePath, cleansed);
  },
  reduce: function(obj) {
    var children, output, that;
    that = this;
    output = {};
    if (obj instanceof Object) {
      if (obj.name != null) {
        if (obj.childs != null) {
          children = {};
          _.forEach(obj.childs, function(attribute) {
            return children[attribute.name] = that.reduce(attribute.childs);
          });
          output[obj.name] = children;
        }
      } else {
        if (obj instanceof Array) {
          if (obj.length === 1) {
            if (!array.isArrayOfObjects(obj)) {
              output = obj[0];
            } else {
              output = that.reduce(obj[0]);
            }
          } else {
            output = [];
            _.forEach(obj, function(item) {
              return output.push(that.reduce(item));
            });
          }
        } else {
          console.log("got a non-array");
          console.log(obj);
        }
      }
    } else {
      console.log("passed object is not an object");
      console.log(obj);
    }
    return output;
  },
  fromJadeFile: function(jadepath) {
    return jade.renderFile(jadepath, {
      pretty: true
    });
  },
  fromJade: function(jadeMarkup) {
    fs.writeFileSync(outputPath, compiled(locals));
    return logger.info("Compiled " + sourcePath + " to " + outputPath);
  },
  toJadeFile: function(jadepath) {
    var fileContents, lines, regexes;
    logger.info("xmltojade");
    fileContents = fs.readFileSync(path, {
      encoding: 'utf8'
    });
    fileContents = fileContents.replace('<?xml version="1.0" encoding="UTF-8" standalone="no"?>', "");
    regexes = [];
    regexes.push({
      name: "Strip close tags",
      regex: new RegExp("</(.*?)>", "g"),
      replacement: ""
    });
    regexes.push({
      name: "Close empty elements",
      regex: new RegExp("/>", "g"),
      replacement: ">"
    });
    regexes.push({
      name: "Convert to jade",
      regex: new RegExp("<(.*?) (.*)>", "g"),
      replacement: "$1($2)"
    });
    regexes.push({
      name: "Comma separate attributes",
      regex: new RegExp('" (.*?=)', "g"),
      replacement: '", $1'
    });
    regexes.push({
      name: "Set tabs to 2 spaces",
      regex: new RegExp('    ', "g"),
      replacement: '  '
    });
    regexes.each(function(o) {
      logger.info(o.name);
      return fileContents = fileContents.replace(o.regex, o.replacement);
    });
    fileContents = '<?xml version="1.0" encoding="UTF-8"?>\n' + fileContents;
    lines = fileContents.split('\n');
    fileContents = '';
    lines.each(function(line) {
      if (!line.isBlank()) {
        return fileContents += line + '\n';
      }
    });
    logger.info("Strip blank lines");
    fs.writeFileSync(jadePath, fileContents);
    return logger.info("Wrote to " + jadePath);
  },
  toJade: function(xml) {
    var fileContents, lines, regexes;
    logger.info("xmltojade");
    fileContents = fs.readFileSync(path, {
      encoding: 'utf8'
    });
    fileContents = fileContents.replace('<?xml version="1.0" encoding="UTF-8" standalone="no"?>', "");
    regexes = [];
    regexes.push({
      name: "Strip close tags",
      regex: new RegExp("</(.*?)>", "g"),
      replacement: ""
    });
    regexes.push({
      name: "Close empty elements",
      regex: new RegExp("/>", "g"),
      replacement: ">"
    });
    regexes.push({
      name: "Convert to jade",
      regex: new RegExp("<(.*?) (.*)>", "g"),
      replacement: "$1($2)"
    });
    regexes.push({
      name: "Comma separate attributes",
      regex: new RegExp('" (.*?=)', "g"),
      replacement: '", $1'
    });
    regexes.push({
      name: "Set tabs to 2 spaces",
      regex: new RegExp('    ', "g"),
      replacement: '  '
    });
    regexes.each(function(o) {
      logger.info(o.name);
      return fileContents = fileContents.replace(o.regex, o.replacement);
    });
    fileContents = '<?xml version="1.0" encoding="UTF-8"?>\n' + fileContents;
    lines = fileContents.split('\n');
    fileContents = '';
    lines.each(function(line) {
      if (!line.isBlank()) {
        return fileContents += line + '\n';
      }
    });
    logger.info("Strip blank lines");
    fs.writeFileSync(jadePath, fileContents);
    return logger.info("Wrote to " + jadePath);
  }
};
