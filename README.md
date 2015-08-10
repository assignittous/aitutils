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

*aitutils.array.isArrayOfObjects(object)*
**returns boolean**




# Logger



Simple console logger used in Assign It To Us's knodeo products.

Color coding using `chalk`

## Important Note

This library has been deprecated in favor of aitutils (https://github.com/assignittous/aitutils)

# Install

Add it to your project:

`npm install knodeo-logger --save`


# Sample Code

```coffeescript

logger = require('./index').Logger

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