const requestIP = require('request-ip')

const express = require('express')
const router = express.Router()

router.get('/ip', function (req, res) {
  res.json({
    ip: requestIP.getClientIp(req) || 'unknown'
  })
})

router.get('/headers', function (req, res) {
  res.json({
    headers: req.headers
  })
})

module.exports = router
