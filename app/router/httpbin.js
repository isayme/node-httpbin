const express = require('express')
const router = express.Router()

const ip = require('app/util/ip')
const ua = require('app/util/ua')
const uuid = require('app/util/uuid')
const url = require('app/util/url')

router.get('/ip', function (req, res) {
  res.json({
    origin: ip.get(req)
  })
})

router.get('/uuid', function (req, res) {
  res.json({
    uuid: uuid.v4()
  })
})

router.get('/user-agent', function (req, res) {
  res.json({
    'user-agent': ua.get(req)
  })
})

router.get('/headers', function (req, res) {
  res.json({
    headers: req.headers
  })
})

router.get('/get', function (req, res) {
  res.json({
    args: req.query,
    headers: req.headers,
    origin: ip.get(req),
    url: url.get(req)
  })
})

module.exports = router
