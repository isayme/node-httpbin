const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/status/:code', () => {
  it('200', async function () {
    let res = await request(app)
      .get('/status/200')
    assert.equal(res.statusCode, 200)
  })

  it('400', async function () {
    let res = await request(app)
      .get('/status/400')
    assert.equal(res.statusCode, 400)
  })
})
