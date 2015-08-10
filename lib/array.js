var _;

_ = require("lodash");

exports.array = {
  isArrayOfObjects: function(obj) {
    var isArray;
    isArray = obj instanceof Array;
    if (isArray) {
      return obj[0] instanceof Object;
    } else {
      return false;
    }
  }
};
