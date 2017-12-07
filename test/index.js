const Logger = require('../')
const assert = require('power-assert')

const logger = new Logger()

describe('logger', () => {
  it('log', () => {
    logger.error('error')
    logger.success('success')
    logger.info('info')

    assert(typeof logger.error === 'function')
    assert(typeof logger.success === 'function')
    assert(typeof logger.info === 'function')
  })
})
