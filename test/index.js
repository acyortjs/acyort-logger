const Logger = require('../')
const assert = require('power-assert')
const sinon = require('sinon')

describe('logger', () => {
  it('logger', () => {
    const logger = new Logger()
    const spy = sinon.spy(logger, 'log')

    logger.error('error')
    logger.success('success')
    logger.info('info')
    logger.warn('warn')

    assert(spy.callCount === 4)
    assert(spy.args[0][1] === 'error')
    assert(spy.args[1][1] === 'success')
    assert(spy.args[2][1] === 'info')
    assert(spy.args[3][1] === 'warn')
  })

  it('enable disable', () => {
    const logger = new Logger()
    const tag = 'log'
    const spy = sinon.spy(logger, 'logger')

    logger.error('error', tag)
    assert(spy.args.length === 1)

    logger.disable(['log'])
    logger.error('error', tag)
    assert(spy.args.length === 1)

    logger.disable(['log'])
    logger.error('error', tag)
    assert(spy.args.length === 1)

    logger.enable(['log'])
    logger.error('error', tag)
    assert(spy.args.length === 2)

    logger.disable(['other'])
    logger.error('error', tag)
    assert(spy.args.length === 3)

    logger.disable()
    logger.error('error', tag)
    assert(logger.logger() === null)

    logger.enable()
    const newSpy = sinon.spy(logger, 'logger')
    logger.error('error', tag)
    assert(newSpy.callCount === 1)
  })
})
