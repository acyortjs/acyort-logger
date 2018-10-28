const chalk = require('chalk')

class Logger {
  constructor() {
    this.logger = global.console.log
    this.disabled = false
  }

  disable() {
    this.disabled = true
  }

  enable() {
    this.disabled = false
  }

  log(...args) {
    this.call(...args)
  }

  error(...args) {
    this.call(chalk.red('ERROR'), ...args)
  }

  success(...args) {
    this.call(chalk.green('SUCCESS'), ...args)
  }

  warn(...args) {
    this.call(chalk.yellow('WARN'), ...args)
  }

  info(...args) {
    this.call(chalk.blue('INFO'), ...args)
  }

  call(...args) {
    if (!this.disabled) {
      this.logger(...args)
    }
  }
}

module.exports = Logger
