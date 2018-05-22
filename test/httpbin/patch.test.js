const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/patch', () => {
  it('default', async function () {
    let res = await request(app)
      .patch('/patch')
      .send({ 'k': 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.json.k, 'v')
  })
})
