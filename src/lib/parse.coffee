# parse.coffee

exports.parse = {



  relativeDate: (text) ->
    return text.match(/((?:next|last|this) (?:week|month|quarter|year)|tom(?:orrow)?|tod(?:ay)?|now|day after tom(?:orrow)?|yesterday|day before yesterday)/gi)
     
  year: (text) ->
    return text.match(/\\b(20\\d{2}|\\d{2}[6-9]\\d)\\b/gi)

}