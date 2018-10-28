# logger

Node Logger

## Install

```bash
$ npm i @acyort/logger -S
```

## Usage

```js
const Logger = require('@acyort/logger')

const logger = new Logger()

logger.log('log')
logger.success('success')
logger.warn('warn')
logger.info('info')
logger.error('error')

/*
log
SUCCESS success
WARN warn
INFO info
ERROR error
*/

logger.disable()    // disable
logger.enable()     // enable
```
