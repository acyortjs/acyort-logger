# logger

Node Logger

## Install

```bash
$ npm i @acyort/logger -S
```

## Usage

```js
const logger = require('@acyort/logger')('test')  // default name: acyort

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

/* disable logger */
global.DISABLE_LOGGER = 'acyort' // disable `acyort` logger
global.DISABLE_LOGGER = 'test:error' // disable `test` error logger
global.DISABLE_LOGGER = 'test:error,info' // disable `test` error, info logger

/* set env disable logger */
// DISABLE_LOGGER='test:log' node index.js
```
