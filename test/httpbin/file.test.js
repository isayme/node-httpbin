const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/files', () => {
  it('ok', async function () {
    let res = await request(app)
      .post('/post')
      .attach('file_test.js', __filename)
    assert.equal(res.statusCode, 200)
    assert.notEqual(res.body.files['file_test.js'], undefined)
  })
})
