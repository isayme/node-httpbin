const requestIP = require('request-ip')
const uuidv4 = require('uuid/v4')

const express = require('express')
const router = express.Router()

router.get('/ip', function (req, res) {
  res.json({
    origin: requestIP.getClientIp(req) || 'unknown'
  })
})

router.get('/uuid', function (req, res) {
  res.json({
    uuid: uuidv4()
  })
})

router.get('/headers', function (req, res) {
  res.json({
    headers: req.headers
  })
})

module.exports = router
