const path = require('path')
require('app-module-path').addPath(path.resolve(__dirname, '..'))

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('config')
const logger = require('app/logger')
const partialResponse = require('express-partial-response')

const app = express()

app.use(express.static('public'))
app.use(require('app/middleware/logger'))
app.use(require('app/middleware/context'))
app.use(partialResponse())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(cookieParser())

app.use(require('./middleware/cors'))
app.use(require('./middleware/multer'))

app.use('/version', require('./router/version'))
app.use(require('./router/httpbin'))

app.use(require('./middleware/error-handler'))

const server = app.listen(config.port, () => {
  const address = server.address()
  logger.info(`listen ${address.address}:${address.port}`)
})

module.exports = app
