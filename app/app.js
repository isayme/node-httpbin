const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const winston = require('winston')
const morgan = require('morgan')
const partialResponse = require('express-partial-response')

const app = express()

app.use(morgan('dev'))
app.use(partialResponse())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./middleware/cors'))

app.use('/version', require('./router/version'))

app.use(require('./middleware/error-handler'))

const server = app.listen(config.port, () => {
  winston.info('listen ok, address:', server.address())
})

module.exports = app
