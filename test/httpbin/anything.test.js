const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

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
})
