const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const pkg = require('../package')

const app = express()

app.use(bodyParser.json())

app.use('/version', require('./router/version'))

app.use(require('./middleware/error-handler'))

const server = app.listen(config.port, () => {
  console.info('listen ok, address:', server.address())
})

module.exports = app
