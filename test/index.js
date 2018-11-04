const logger = require('../')()

logger.log('log')
logger.success('success')
logger.warn('warn')
logger.info('info')
logger.error('error')

global.DISABLE_LOGGER = 'acyort'

global.console.log('disableAll')

logger.log('log')
logger.success('success')
logger.warn('warn')
logger.info('info')
logger.error('error')

global.console.log('disableAllEnd')

global.DISABLE_LOGGER = 'acyort:log'
logger.log('log')

global.DISABLE_LOGGER = 'acyort:success,log '
logger.success('success')
logger.log('log')

global.DISABLE_LOGGER = 'acyort:warn, log'
logger.warn('warn')
logger.log('log')

global.DISABLE_LOGGER = 'acyort:info,log'
logger.info('info')
logger.log('log')

global.DISABLE_LOGGER = 'acyort:error'
logger.error('error')
logger.log('log')
