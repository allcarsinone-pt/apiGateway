class LogMockAdapter {
    async execute (message, queueName = 'log') {
      console.log(message)
    }
}

module.exports = LogMockAdapter