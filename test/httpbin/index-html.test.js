const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')

describe('/', () => {
  it('default', async function () {
    let res = await request(app).get('/')
    assert.equal(res.statusCode, 200)
    assert.equal(res.text.includes('httpbin: HTTP Request/Response Service'), true)
  })
})
