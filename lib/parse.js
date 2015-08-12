exports.parse = {
  relativeDates: function(text) {
    return text.match(/((?:next|last|this) (?:week|month|quarter|year|jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)|tom(?:orrow)?|tod(?:ay)?|now|day after tom(?:orrow)?|yesterday|day before yesterday)/gi) || [];
  },
  years: function(text) {
    var values;
    values = text.match(/[^-\/](19\d\d|2[01]\d\d)/gi) || [];
    values = values.map(function(v) {
      return v.trim();
    });
    return values;
  },
  shortDates: function(text) {
    return text.match(/\b(0?[1-9]|1[0-2])[\/-]([1-2]\d|3[0-1]|0?[1-9])[\/-]?(\d{2,4})?\b/gi) || [];
  }
};
