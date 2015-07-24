# xml

_ = require "lodash"
array = require("../lib/array").array
jade = require "jade"
fs = require "fs-extra"

exports.xml = {

  tidy: (xml)->
    console.log "tidy"
    fileContents = fs.readFileSync path, { encoding: 'utf8' }
    regex = new RegExp("<(.*?) (.*)/>", "g")
    cleansed = fileContents.replace(regex, "<$1 $2></$1>")    
    fs.writeFileSync(jadePath, cleansed)
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

  # compile from jade
  fromJadeFile: (jadepath, locals)->
    if !locals?
      locals = {}
    fn = jade.compileFile(jadepath, {pretty: true})
    return fn(locals)

  fromJade: (jadeMarkup)->
    fs.writeFileSync(outputPath, compiled(locals))     
    logger.info "Compiled #{sourcePath} to #{outputPath}"    

  toJadeFile: (jadepath)->
    logger.info "xmltojade"
    fileContents = fs.readFileSync path, { encoding: 'utf8' }
    
    fileContents = fileContents.replace('<?xml version="1.0" encoding="UTF-8" standalone="no"?>',"")

    # remove close tags

    #regexes = []
    regexes = []


    regexes.push
      name: "Strip close tags"
      regex: new RegExp("</(.*?)>","g")
      replacement: ""

    regexes.push
      name: "Close empty elements"
      regex: new RegExp("/>","g")
      replacement: ">"

    regexes.push
      name: "Convert to jade"
      regex: new RegExp("<(.*?) (.*)>","g")
      replacement: "$1($2)"

    regexes.push
      name: "Comma separate attributes"
      regex: new RegExp('" (.*?=)',"g")
      replacement: '", $1'
    regexes.push
      name: "Set tabs to 2 spaces"
      regex: new RegExp('    ',"g")
      replacement: '  '
    regexes.each (o)->
      #onsole.log "asdfasdfasdf"
      logger.info o.name
      #logger.info o # fileContents
      fileContents = fileContents.replace o.regex, o.replacement

    fileContents = '<?xml version="1.0" encoding="UTF-8"?>\n' + fileContents
    #regex = new RegExp("<(.*?) (.*)/>", "g")
    #cleansed = fileContents.replace(regex, "<$1 $2></$1>")  

    lines = fileContents.split('\n')

    fileContents = ''
    lines.each (line)->
      if !line.isBlank()
        fileContents += line + '\n'
    logger.info "Strip blank lines"
    fs.writeFileSync(jadePath, fileContents)
    logger.info "Wrote to #{jadePath}"
  toJade: (xml)->
    logger.info "xmltojade"
    fileContents = fs.readFileSync path, { encoding: 'utf8' }
    
    fileContents = fileContents.replace('<?xml version="1.0" encoding="UTF-8" standalone="no"?>',"")

    # remove close tags

    #regexes = []
    regexes = []


    regexes.push
      name: "Strip close tags"
      regex: new RegExp("</(.*?)>","g")
      replacement: ""

    regexes.push
      name: "Close empty elements"
      regex: new RegExp("/>","g")
      replacement: ">"

    regexes.push
      name: "Convert to jade"
      regex: new RegExp("<(.*?) (.*)>","g")
      replacement: "$1($2)"

    regexes.push
      name: "Comma separate attributes"
      regex: new RegExp('" (.*?=)',"g")
      replacement: '", $1'
    regexes.push
      name: "Set tabs to 2 spaces"
      regex: new RegExp('    ',"g")
      replacement: '  '
    regexes.each (o)->
      #onsole.log "asdfasdfasdf"
      logger.info o.name
      #logger.info o # fileContents
      fileContents = fileContents.replace o.regex, o.replacement

    fileContents = '<?xml version="1.0" encoding="UTF-8"?>\n' + fileContents
    #regex = new RegExp("<(.*?) (.*)/>", "g")
    #cleansed = fileContents.replace(regex, "<$1 $2></$1>")  

    lines = fileContents.split('\n')

    fileContents = ''
    lines.each (line)->
      if !line.isBlank()
        fileContents += line + '\n'
    logger.info "Strip blank lines"
    fs.writeFileSync(jadePath, fileContents)
    logger.info "Wrote to #{jadePath}"    

}


