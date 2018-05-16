const express = require('express')
const router = express.Router()

const uuid = require('app/util/uuid')
const base64 = require('app/util/base64')

router.get('/ip', function (req, res) {
  res.json({
    origin: req.ctx.ip
  })
})

router.get('/uuid', function (req, res) {
  res.json({
    uuid: uuid()
  })
})

router.get('/user-agent', function (req, res) {
  res.json({
    'user-agent': req.ctx.ua
  })
})

router.get('/headers', function (req, res) {
  res.json({
    headers: req.ctx.headers
  })
})

router.get('/get', function (req, res) {
  res.json({
    args: req.ctx.query,
    headers: req.ctx.headers,
    origin: req.ctx.ip,
    url: req.ctx.url
  })
})

router.post('/post', function (req, res) {
  res.json({
    args: req.ctx.query,
    data: req.ctx.text,
    files: req.ctx.files,
    form: req.ctx.form,
    headers: req.ctx.headers,
    json: req.ctx.body,
    origin: req.ctx.ip,
    url: req.ctx.url
  })
})

router.patch('/patch', function (req, res) {
  res.json({
    args: req.ctx.query,
    data: req.ctx.text,
    files: req.ctx.files,
    form: req.ctx.form,
    headers: req.ctx.headers,
    json: req.ctx.body,
    origin: req.ctx.ip,
    url: req.ctx.url
  })
})

router.put('/put', function (req, res) {
  res.json({
    args: req.ctx.query,
    data: req.ctx.text,
    files: req.ctx.files,
    form: req.ctx.form,
    headers: req.ctx.headers,
    json: req.ctx.body,
    origin: req.ctx.ip,
    url: req.ctx.url
  })
})

router.delete('/delete', function (req, res) {
  res.json({
    args: req.ctx.query,
    data: req.ctx.text,
    files: req.ctx.files,
    form: req.ctx.form,
    headers: req.ctx.headers,
    json: req.ctx.body,
    origin: req.ctx.ip,
    url: req.ctx.url
  })
})

router.all('/anything/:anything?', function (req, res) {
  res.json({
    args: req.ctx.query,
    data: req.ctx.text,
    files: req.ctx.files,
    form: req.ctx.form,
    headers: req.ctx.headers,
    json: req.ctx.body,
    method: req.ctx.method,
    origin: req.ctx.ip,
    url: req.ctx.url
  })
})

router.get('/base64/:encoded', (req, res) => {
  const encoded = req.param('encoded')
  res.send(base64.decode(encoded))
})

module.exports = router
