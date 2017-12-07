const chalk = require('chalk')

class Logger {
  constructor() {
    this.log = global.console.log
  }

  error(message) {
    this.log(chalk.red('\u2716'), message)
  }

  success(message) {
    this.log(chalk.green('\u2714'), message)
  }

  info(message) {
    this.log(chalk.blue('\u0069'), message)
  }
}

module.exports = Logger
