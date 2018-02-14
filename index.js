const chalk = require('chalk')

class Logger {
  constructor() {
    this.logger = global.console.log
    this.disabled = []
  }

  log(sign, message, tag) {
    if (this.disabled.indexOf(tag) === -1) {
      this.logger(sign, message)
    }
  }

  disable(tags) {
    if (tags === undefined) {
      this.logger = () => null
    } else {
      tags.forEach((tag) => {
        if (this.disabled.indexOf(tag) === -1) {
          this.disabled.push(tag)
        }
      })
    }
  }

  enable(tags) {
    if (tags === undefined) {
      this.logger = global.console.log
      this.disabled = []
    } else {
      tags.forEach((tag) => {
        this.disabled = this.disabled.filter(id => id !== tag)
      })
    }
  }

  error(...args) {
    this.log(chalk.red('\u2716'), ...args)
  }

  success(...args) {
    this.log(chalk.green('\u2714'), ...args)
  }

  warn(...args) {
    this.log(chalk.yellow('\u0069'), ...args)
  }

  info(...args) {
    this.log(chalk.blue('\u0069'), ...args)
  }
}

module.exports = Logger
