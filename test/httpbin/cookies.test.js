const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/cookies', () => {
  it('ok', async function () {
    let res = await request(app)
      .get('/cookies')
      .set({ Cookie: 'k=v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.cookies.k, 'v')
  })
})
