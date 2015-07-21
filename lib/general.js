var moment;

moment = require("moment");

exports.general = {
  dateSid: function(format) {
    if (format != null) {
      return "" + (moment().format(format));
    } else {
      return "" + (moment().format("YYYYMMDDhhmmss"));
    }
  }
};
