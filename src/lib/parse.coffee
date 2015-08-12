# parse.coffee

exports.parse = {

  relativeDates: (text) ->
    return text.match(/((?:next|last|this) (?:week|month|quarter|year|jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)|tom(?:orrow)?|tod(?:ay)?|now|day after tom(?:orrow)?|yesterday|day before yesterday)/gi) || []
     
  years: (text) ->
    # anything between 1900 and 2199
    values = text.match(/[^-\/](19\d\d|2[01]\d\d)/gi) || []
    values = values.map (v)->
      return v.trim()
    return values

  shortDates: (text)->
    return text.match(/\b(0?[1-9]|1[0-2])[\/-]([1-2]\d|3[0-1]|0?[1-9])[\/-]?(\d{2,4})?\b/gi) || []

}