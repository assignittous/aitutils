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
aitutils = require('aitutils').aitutils

aitutils.logger.debug "This is a debug message"

aitutils.logger.info "This is an info message"

aitutils.logger.error "This is an error message"

aitutils.logger.warn "This is a warn message"

aitutils.logger.bot "This is a bot message"

aitutils.logger.shell "This is a shell message"

aitutils.logger.exec "This is an exec message"

aitutils.logger.stub "This is a stub message"

aitutils.logger.todo "This is a todo message"

aitutils.logger.sql "This is an sql message"

```

## Parse

This library is a work in progress.

## XML

**aitutils.xml.tidy(xml)**

*returns string*

Tidies up XML.

**aitutils.xml.reduce(obj)**

*returns object*

Reduces an xmlLite object into something usable.

**aitutils.xml.fromJadeFile(jadepath,locals)**

*returns string*

Compiles a jade file into xml.

**aitutils.xml.fromJade(jadeMarkup,locals)**

*returns string*

Compiles a jade string into xml.

**aitutils.xml.toJadeFile(xml, path)**

*returns nothing*

Converts XML markup into a Jade file.


**aitutils.xml.toJade(xml)**

*returns string*

Converts XML markup into Jade markup.