const express = require('express')
const router = express.Router()

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
