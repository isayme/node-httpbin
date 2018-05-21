const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/post', () => {
  it('default', async function () {
    let res = await request(app)
      .post('/post')
      .send({ 'k': 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.json.k, 'v')
  })
})
