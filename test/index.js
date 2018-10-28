const Logger = require('../')

const logger = new Logger()

logger.log('log')
logger.success('success')
logger.warn('warn')
logger.info('info')
logger.error('error')

logger.disable()
logger.log('disable log')

logger.enable()
logger.log('enable log')
