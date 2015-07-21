# xml

_ = require "lodash"
array = require("./array").array

exports.xml = {

  tidy: (xml)->
    console.log "tidy"

  # reduce an xmlLite Object into something usable
  reduce: (obj)->
    that = @
    output = {}

    if (obj instanceof Object)

      if obj.name?
        # check the children
        if obj.childs?
          children = {}
          _.forEach obj.childs, (attribute)->
            children[attribute.name] = that.reduce(attribute.childs)
          output[obj.name] = children

      else
        if obj instanceof Array
          if obj.length == 1
            # might be a value
            #console.log "might be a value"
            if !array.isArrayOfObjects(obj)
              output = obj[0]
            else
              output = that.reduce(obj[0])
          else
            output = []
            _.forEach obj, (item)->
              output.push that.reduce(item)
        else
          # todo: fix this? output already returns {} by default
          console.log "got a non-array"
          console.log obj

    else
      # todo: fix this? output already returns {} by default
      console.log "passed object is not an object"
      console.log obj

    return output
}


