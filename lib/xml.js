var _, array;

_ = require("lodash");

array = require("./array").array;

exports.xml = {
  tidy: function(xml) {
    return console.log("tidy");
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
  }
};
