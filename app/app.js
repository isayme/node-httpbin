const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const pkg = require('../package')

const app = express()

app.use(bodyParser.json())

app.get('/version', function (req, res) {
  res.json({
    name: pkg.name,
    version: pkg.version,
    author: pkg.author,
    license: pkg.license
  })
})

app.use(require('./middleware/error-handler'))

const server = app.listen(config.port, () => {
  console.info('listen ok, address:', server.address())
})

module.exports = app
