# general.coffee
moment = require "moment"

exports.general = {

  dateSid: (format)->
    if format?
      return "#{moment().format(format)}"
    else
      return "#{moment().format("YYYYMMDDhhmmss")}"


}