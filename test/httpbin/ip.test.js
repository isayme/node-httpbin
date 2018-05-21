const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/ip', () => {
  it('default', async function () {
    let res = await request(app).get('/ip')
    assert.equal(res.statusCode, 200)
    assert.notEqual(res.body.origin, undefined)
  })
})
