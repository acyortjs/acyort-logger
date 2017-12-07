# acyort-logger

[![Build Status](https://travis-ci.org/acyortjs/acyort-logger.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-logger)
[![codecov](https://codecov.io/gh/acyortjs/acyort-logger/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-logger)

Logger for [AcyOrt](https://github.com/acyortjs/acyort)

## Install

```bash
$ npm i acyort-logger -S
```

## Usage

```js
const Logger = require('acyort-logger')

const logger = new Logger()

logger.error('error')
logger.success('success')
logger.info('info')

/*
✖ error
✔ success
i info
*/
```
