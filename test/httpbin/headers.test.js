const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/headers', () => {
  it('ok', async function () {
    let res = await request(app)
      .get('/headers')
      .set({ k: 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.headers.k, 'v')
  })
})

describe('/response-headers', () => {
  it('ok', async function () {
    let res = await request(app)
      .get('/response-headers')
      .query({ k: 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.headers.k, 'v')
  })
})
