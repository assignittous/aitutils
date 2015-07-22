# file.coffee

fs = require "fs-extra"
logger = require("../lib/logger").logger
path = require "path"
del = require "del"
_ = require "lodash"

exports.file = {

  # Open a text based file synchronously
  open: (path)->
    return fs.readFileSync path, { encoding: 'utf8' }

  # save data to a path
  save: (path, data)->
    fs.writeFileSync path, data

  copy: (source, destination, clobber) ->

  move: (source, destination, clobber) ->

  rename: (source, destination) ->

  cleanName: (path)->
    #normalize
    #convert backslashes to forward slashes

  delete: (path)->


  # validate that the file extension ends with the desired extension, if not, append
  checkExtension: (path, ext)->
    if _.endsWith(path, ext)
      return path
    else
      return "#{path}#{ext}"

  # this is because fs.existsSync is getting deprecated
  exists: (path)->
    try
      # Query the entry
      stats = fs.lstatSync(path)
      # Is it a directory?
      if stats.isDirectory()
        # Yes it is
        return false
      else
        return true
    catch e
      return false


  setupFolderTree: (subfolders) ->
    subfolders.each (path)->
      fs.mkdirsSync path, (err)->
        if err
          logger.error "#{path} could not be created."
        else
          logger.info "#{path} created."

}