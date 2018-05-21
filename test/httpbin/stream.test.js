const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/stream/3', () => {
  it('default', async function () {
    let res = await request(app).get('/stream/3')
    assert.equal(res.statusCode, 200)
  })
})
