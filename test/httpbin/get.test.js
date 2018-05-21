const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/get', () => {
  it('default', async function () {
    let res = await request(app).get('/get')
    assert.equal(res.statusCode, 200)
  })
})
