# Assign It To Us Utilities (aitutils)

This library contains common utilities used in Assign It To Us projects and products.


# Library

The library covers 8 general areas

1. Array
2. Configuration
3. Data
4. File
5. General
6. Logging
7. Parsing
8. XML


# To Install

To add this library to your project:

`npm install aitutils --save`

## To use it

aitutils = require("aitutils").aitutils

# API

## Array

**aitutils.array.isArrayOfObjects(object)**

*returns boolean*

Check if an array is an array of objects.

## Configuration

Loads a CSON configuration file and returns it as an object.

```coffeescript

aitutils = require("aitutils").aitutils

config = aitutils.configuration.load("path/to/config.cson")

# you can also access the config again using the current property
current = aitutils.configuration.current

```


**aitutils.configuration.load(path)**

*returns object*

## Data

Handles a variety of data formats.

This is currently Work-In-Progress.

## General

Other miscellaneous functions.

**aitutils.general.dateSid(*format*)**

*returns string*

Returns a numeric formatted date *YYYYMMDDhhmmss*. 

You can override the default format by passing a string as the format parameter. The format should use Moment.js's conventions.

## Logger

Simple console logger.

Types:

* debug
* info
* error
* warn
* bot
* shell
* exec
* stub
* todo
* sql

**aitutils.logger.*type*("message")**

*returns nothing*

Examples:

```coffeescript
logger = require('aitutils').aitutils.logger

logger.debug "This is a debug message"

logger.info "This is an info message"

logger.error "This is an error message"

logger.warn "This is a warn message"

logger.bot "This is a bot message"

logger.shell "This is a shell message"

logger.exec "This is an exec message"

logger.stub "This is a stub message"

logger.todo "This is a todo message"

logger.sql "This is an sql message"

```

