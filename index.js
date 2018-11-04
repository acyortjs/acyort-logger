const chalk = require('chalk')

function logger(current, ...args) {
  const { DISABLE_LOGGER: envDisable } = process.env
  const { DISABLE_LOGGER: varDisable } = global
  const disable = envDisable || varDisable

  if (!disable) {
    global.console.log(...args)
    return
  }

  const [name, type] = disable.split(':')
  const [cname, ctype] = current.split(':')

  if (name !== cname) {
    global.console.log(...args)
    return
  }

  if (!type || type.split(',').map(s => s.trim()).indexOf(ctype) > -1) {
    return
  }

  global.console.log(...args)
}

module.exports = (name = 'acyort') => ({
  log(...args) {
    logger(`${name}:log`, ...args)
  },

  error(...args) {
    logger(`${name}:error`, chalk.red('ERROR'), ...args)
  },

  success(...args) {
    logger(`${name}:success`, chalk.green('SUCCESS'), ...args)
  },

  warn(...args) {
    logger(`${name}:warn`, chalk.yellow('WARN'), ...args)
  },

  info(...args) {
    logger(`${name}:info`, chalk.blue('INFO'), ...args)
  },
})
