const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('form', () => {
  it('get form', async function () {
    let res = await request(app)
      .get('/forms/post')
    assert.equal(res.statusCode, 200)
  })

  it('post form', async function () {
    let res = await request(app)
      .post('/post')
      .type('form')
      .send({ 'k': 'v' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.form.k, 'v')
  })
})
