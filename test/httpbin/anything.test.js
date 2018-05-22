const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const constants = require('app/constants')
const mime = require('mime-types')

describe('/anything', () => {
  it('get', async function () {
    let res = await request(app)
      .get('/anything')
      .query({ 'k': 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.args.k, 'v')
  })

  it('post', async function () {
    let res = await request(app)
      .post('/anything')
      .send({ 'k': 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.json.k, 'v')
  })
})

describe('/anything/:anything', () => {
  it('ok', async function () {
    let res = await request(app)
      .get('/anything/abc')
    assert.equal(res.statusCode, 200)
  })

  it('text', async function () {
    let res = await request(app)
      .get('/anything/abc')
      .set({
        [constants.HTTPHeaderContentType]: mime.types.txt
      })
      .send('hi')
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.data, 'hi')
  })
})
