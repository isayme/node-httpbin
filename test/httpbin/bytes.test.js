const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/bytes/3', () => {
  it('default', async function () {
    let res = await request(app).get('/bytes/3')
    assert.equal(res.statusCode, 200)
  })
})

describe('/stream-bytes/3', () => {
  it('default', async function () {
    let res = await request(app).get('/stream-bytes/3')
    assert.equal(res.statusCode, 200)
  })
})
