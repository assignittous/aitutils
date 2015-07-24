CSON = require('cson')
cwd = process.env.PWD || process.cwd()

exports.configuration = 
  current: {}

  # Load config file

  cwd: ()->
    process.env.PWD || process.cwd()

  load: (path)->
    @current = CSON.parseCSONFile(path)

  reset: ()->
    @current = {}

  upgrade: (fn)->
    console.log "noop"
    if fn?
      fn()