exports.parse = {
  relativeDates: function(text) {
    return text.match(/((?:next|last|this|upcoming|previous|first|second|third|fourth|1st|2nd|3rd|4th) (?:week|month|quarter|year|jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)|tom(?:orrow)?|tod(?:ay)?|now|day after tom(?:orrow)?|yesterday|day before yesterday)/gi) || [];
  },
  relativeDatesB: function(text) {
    return text.match(/(\d{1,4}|a) (day|week|month|quarter|year)s? ?(ago|old)?/gi) || [];
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
  },
  days: function(text) {
    return text.match(/\b(?:(?:(?:on )?the )(?=\d\d?(?:st|nd|rd|th)))?([1-2]\d|3[0-1]|0?[1-9])(?:st|nd|rd|th)?(?:,|\b)/gi) || [];
  },
  months: function(text) {
    return text.match(/\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/gi) || [];
  },
  weekdays: function(text) {
    return text.match(/(?:(next|previous|upcoming|last) (?:week (?:on )?)?)?\b(sun|mon|tue(?:s)?|wed(?:nes)?|thu(?:r)|thu(?:rs)?|fri|sat(?:ur)?)(?:day)?\b/gi) || [];
  },
  quarterAbbreviation: function(text) {
    return text.match(/(q[1-4])/gi) || [];
  },
  date: function(text) {
    return text.match(/\b(?:(?:(?:on )?the )(?=\d\d?(?:st|nd|rd|th)))?([1-2]\d|3[0-1]|0?[1-9])(?:st|nd|rd|th)?(?:,|\b)/gi) || [];
  },
  stub: function(text) {
    return text.match(/a/gi) || [];
  }
};
