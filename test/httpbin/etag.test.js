const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const constants = require('app/constants')

describe('/etag', () => {
  it('default', async function () {
    let res = await request(app).get('/etag/etag')
    assert.equal(res.statusCode, 200)
    assert.equal(res.headers.etag, 'etag')
  })

  describe('If-Match', () => {
    it('normal', async function () {
      let res = await request(app)
        .get('/etag/etag')
        .set(constants.HTTPHeaderIfMatch, 'etag')
      assert.equal(res.statusCode, 200)
    })

    it('with *', async function () {
      let res = await request(app)
        .get('/etag/etag')
        .set(constants.HTTPHeaderIfMatch, '*')
      assert.equal(res.statusCode, 200)
    })

    it('not match', async function () {
      let res = await request(app)
        .get('/etag/etag')
        .set(constants.HTTPHeaderIfMatch, 'something')
      assert.equal(res.statusCode, 412)
    })
  })

  describe('If-None-Match', () => {
    it('normal', async function () {
      let res = await request(app)
        .get('/etag/etag')
        .set(constants.HTTPHeaderIfNoneMatch, 'etag')
      assert.equal(res.statusCode, 304)
      assert.equal(res.headers.etag, 'etag')
    })

    it('with *', async function () {
      let res = await request(app)
        .get('/etag/etag')
        .set(constants.HTTPHeaderIfNoneMatch, '*')
      assert.equal(res.statusCode, 304)
      assert.equal(res.headers.etag, 'etag')
    })

    it('not match', async function () {
      let res = await request(app)
        .get('/etag/etag')
        .set(constants.HTTPHeaderIfNoneMatch, 'something')
      assert.equal(res.statusCode, 200)
    })
  })
})
