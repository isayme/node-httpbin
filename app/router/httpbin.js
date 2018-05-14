const requestIP = require('request-ip')
const uuidv4 = require('uuid/v4')

const express = require('express')
const router = express.Router()

const constants = require('app/constants')

router.get('/ip', function (req, res) {
  res.json({
    origin: requestIP.getClientIp(req) || constants.UnKnown
  })
})

router.get('/uuid', function (req, res) {
  res.json({
    uuid: uuidv4()
  })
})

router.get('/user-agent', function (req, res) {
  res.json({
    'user-agent': req.header('user-agent') || constants.UnKnown
  })
})

router.get('/headers', function (req, res) {
  res.json({
    headers: req.headers
  })
})

module.exports = router
