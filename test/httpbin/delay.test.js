const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/delay', () => {
  it('default', async function () {
    let start = Date.now()
    let res = await request(app).get('/delay/1')
    let end = Date.now()
    assert.equal(res.statusCode, 200)
    assert.equal((end - start) > 1000, true)
  })
})
