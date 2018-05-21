const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/uuid', () => {
  it('default', async function () {
    let res = await request(app).get('/uuid')
    assert.equal(res.statusCode, 200)
    assert.notEqual(res.body.uuid, undefined)
  })
})
