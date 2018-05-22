const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const mime = require('mime-types')
const constants = require('app/constants')

describe('compress', () => {
  it('/gzip', async function () {
    let res = await request(app).get('/gzip')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], mime.types.json)
    assert.equal(res.header[constants.HTTPHeaderContentEncoding.toLowerCase()], 'gzip')
    assert.equal(res.header[constants.HTTPHeaderContentLength], undefined)
    assert.equal(res.body.gzipped, true)
  })

  it.skip('/brotli', async function () {
    let res = await request(app).get('/brotli')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], mime.types.json)
    assert.equal(res.header[constants.HTTPHeaderContentEncoding.toLowerCase()], 'br')
    assert.equal(res.header[constants.HTTPHeaderContentLength], undefined)
  })

  it('/deflate', async function () {
    let res = await request(app).get('/deflate')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], mime.types.json)
    assert.equal(res.header[constants.HTTPHeaderContentEncoding.toLowerCase()], 'deflate')
    assert.equal(res.header[constants.HTTPHeaderContentLength], undefined)
    assert.equal(res.body.deflated, true)
  })
})
