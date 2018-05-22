const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/base64/:encoded', () => {
  it('ok', async function () {
    let res = await request(app)
      .get('/base64/aGVsbG8gd29ybGQNCg==')
    assert.equal(res.statusCode, 200)
    assert.equal(res.text, 'hello world\r\n')
  })
})
