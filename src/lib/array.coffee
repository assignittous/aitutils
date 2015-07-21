_ = require "lodash"

exports.array = {
  isArrayOfObjects: (obj)->
    isArray = obj instanceof Array
    if isArray
      return obj[0] instanceof Object
    else
      return false

  toCsv: (arr, attributes)->
    that = @
    targetRecords = @csvHeader(attributes || _.first(arr))  + '\n'
    _.each arr, (o)->
      if attributes?
        targetRecords += {}
      else
        targetRecords += that.csvRowSanitize(o, attributes) + "\n"
    return targetRecords


}