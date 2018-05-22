const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const constants = require('app/constants')

describe('/encoding/utf8', () => {
  it('default', async function () {
    let res = await request(app).get('/encoding/utf8')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], 'text/html; charset=UTF-8')
  })
})
