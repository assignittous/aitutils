# file.coffee

# Synchronous file ops and miscellaneous path tools

fs = require "fs-extra"
fyle = require "file" # needed for file walking

logger = require("../lib/logger").logger
path = require "path"

_ = require "lodash"

exports.file = {


  # ## File Path Ops

  cleanPath: (filePath)->
    return path.normalize(filePath)

  # validate that the file extension ends with the desired extension, if not, append
  ensureExtension: (filePath, ext)->
    if _.endsWith(filePath, ext)
      return filePath
    else
      return "#{filePath}#{ext}"

  # ## Text File Ops

  # Open a text based file synchronously
  open: (file)->
    return fs.readFileSync file, { encoding: 'utf8' }

  # save data to a path
  save: (file, data)->
    fs.writeFileSync file, data

  append: (file, data)->
    fs.appendFileSync file, data


  # Core ops  
  del: (filePath)->
    fs.removeSync filePath

  exists: (filePath)->
    # this is because fs.existsSync is getting deprecated
    try
      # Query the entry
      stats = fs.lstatSync(filePath)
      # Is it a directory?
      if stats.isDirectory()
        # Yes it is
        return false
      else
        return true
    catch e
      return false

  copy: (source, destination, clobber) ->
    options = { clobber: false }
    if clobber?
      if clobber
        options = { clobber: true }
    fs.copy source, destination, options

  move: (source, destination, clobber) ->
    # note that fs-extra does not have an async move
    options = { clobber: false }
    if clobber?
      if clobber
        options = { clobber: true }
    fs.copySync source, destination, options
    fs.removeSync source

  rename: (source, destination) ->
    fs.renameSync source, destination


  # Folder ops

  isFolder: (filePath)->
    if @exists(filePath)
      stats = fs.statSync(filePath)
      if stats.isDirectory()
        return true
      else
        return false
    else
      return false

  newFolder: (folderName)->
    fs.mkdirsSync(folderName)


  traverse: (directoryPath, callback)->
    fyle.walkSync directoryPath, callback


  setupFolderTree: (subfolders) ->
    subfolders.each (subfolderPath)->
      fs.mkdirsSync subfolderPath, (err)->
        if err
          logger.error "#{subfolderPath} could not be created."
        else
          logger.info "#{subfolderPath} created."    

  

}