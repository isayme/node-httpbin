const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/user-agent', () => {
  it('default', async function () {
    let res = await request(app)
      .get('/user-agent')
      .set('user-agent', 'test ua')
    assert.equal(res.statusCode, 200)
    assert.equal(res.body['user-agent'], 'test ua')
  })
})
