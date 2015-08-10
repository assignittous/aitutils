_ = require "lodash"

exports.array = {
  isArrayOfObjects: (obj)->
    isArray = obj instanceof Array
    if isArray
      return obj[0] instanceof Object
    else
      return false
}