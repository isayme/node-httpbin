var express = require('express')
var router = express.Router()

const pkg = require('../../package')

router.get('/', function (req, res) {
  res.json({
    name: pkg.name,
    version: pkg.version,
    author: pkg.author,
    license: pkg.license
  })
})

module.exports = router
