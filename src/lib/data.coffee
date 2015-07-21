# data.coffee


fs = require('fs-extra')
logger = require('knodeo-logger').Logger
convert = require('../lib/convert').Convert
nodePath = require 'path'
pd = require('pretty-data').pd

exports.data =

  toCsv: (path, data, attributes, transformFunction)->
    fs.outputFileSync(path, convert.arrayToCsv(data, attributes)) 
  
  toXlsx: (path, data, attributes, transformFunction)->

  toXml: (path, data, attributes, transformFunction)->
    

  toRaw: (path, data)->

    extension = nodePath.extname(path)

    switch extension
      when ".xml"
        data = pd.xml(data)
      when ".json"
        data = pd.json(data)




    fs.outputFileSync(path, data)


    csvRowSanitize: (object, attributes)->

    if attributes?
      #console.log "select only"
      #console.log attributes
      object = Object.select(object, attributes)
      #console.log object

    return Object.values(object).map (x)->
      

      if isNaN(x) 
        out = "\"#{x.replace(/\"/g,'\"\"')}\""
        return out
      else
        return x