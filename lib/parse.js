exports.parse = {
  relativeDate: function(text) {
    return text.match(/((?:next|last|this) (?:week|month|quarter|year)|tom(?:orrow)?|tod(?:ay)?|now|day after tom(?:orrow)?|yesterday|day before yesterday)/gi);
  },
  year: function(text) {
    return text.match(/\\b(20\\d{2}|\\d{2}[6-9]\\d)\\b/gi);
  }
};
