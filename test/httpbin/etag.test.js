const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const constants = require('app/constants')

describe('etag', () => {
  it('default', function * () {
    let res = yield request(app).get('/etag/etag')
    assert.equal(res.statusCode, 200)
    assert.equal(res.headers.etag, 'etag')
  })

  describe('If-Match', () => {
    it('normal', function * () {
      let res = yield request(app)
        .set(constants.HTTPHeaderIfMatch, 'etag')
        .get('/etag/etag')
      assert.equal(res.statusCode, 200)
    })

    it('with *', function * () {
      let res = yield request(app)
        .set(constants.HTTPHeaderIfMatch, '*')
        .get('/etag/etag')
      assert.equal(res.statusCode, 200)
    })

    it('not match', function * () {
      let res = yield request(app)
        .set(constants.HTTPHeaderIfMatch, 'something')
        .get('/etag/etag')
      assert.equal(res.statusCode, 412)
    })
  })

  describe('If-None-Match', () => {
    it('normal', function * () {
      let res = yield request(app)
        .set(constants.HTTPHeaderIfNoneMatch, 'etag')
        .get('/etag/etag')
      assert.equal(res.statusCode, 304)
    })

    it('with *', function * () {
      let res = yield request(app)
        .set(constants.HTTPHeaderIfNoneMatch, '*')
        .get('/etag/etag')
      assert.equal(res.statusCode, 304)
    })

    it('not match', function * () {
      let res = yield request(app)
        .set(constants.HTTPHeaderIfNoneMatch, 'something')
        .get('/etag/etag')
      assert.equal(res.statusCode, 200)
    })
  })
})
