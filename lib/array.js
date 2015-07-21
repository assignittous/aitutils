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
  },
  toCsv: function(arr, attributes) {
    var targetRecords, that;
    that = this;
    targetRecords = this.csvHeader(attributes || _.first(arr)) + '\n';
    _.each(arr, function(o) {
      if (attributes != null) {
        return targetRecords += {};
      } else {
        return targetRecords += that.csvRowSanitize(o, attributes) + "\n";
      }
    });
    return targetRecords;
  }
};
