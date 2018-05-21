const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const constants = require('app/constants')

describe('/cache', () => {
  it('default', async function () {
    let res = await request(app).get('/cache')
    assert.equal(res.statusCode, 200)
    assert.notEqual(res.headers['last-modified'], undefined)
    assert.notEqual(res.headers['etag'], undefined)
  })

  it('with if-modified-since', async function () {
    let res = await request(app)
      .get('/cache')
      .set(constants.HTTPHeaderIfModifiedSince, 'Mon, 21 May 2018 12:18:021 GMT')
    assert.equal(res.statusCode, 304)
  })

  it('with if-none-match', async function () {
    let res = await request(app)
      .get('/cache')
      .set(constants.HTTPHeaderIfNoneMatch, 'random')
    assert.equal(res.statusCode, 304)
  })
})

describe('/cache/:value', () => {
  it('normal', async function () {
    let res = await request(app)
      .get('/cache/5')
    assert.equal(res.statusCode, 200)
    assert.equal(res.headers['cache-control'], 'public, max-age=5')
  })
})
