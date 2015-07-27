# README

Readme info goes here



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