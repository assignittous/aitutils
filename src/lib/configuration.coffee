CSON = require('cson')
cwd = process.env.PWD || process.cwd()

exports.Configuration = 
  current: {}

  # Load config file

  cwd: ()->
    process.env.PWD || process.cwd()

  load: (path)->
    @current = CSON.parseCSONFile(path)

  upgrade: (fn)->
    console.log "noop"
    if fn?
      fn()