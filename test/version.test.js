const request = require('supertest')
const assert = require('power-assert')
const app = require('../app/app')

describe('version', () => {
  it('should ok', async function () {
    let res = await request(app).get('/version')
    assert.equal(res.statusCode, 200)
    assert.deepEqual(Object.keys(res.body), [
      'name',
      'version',
      'author',
      'license'
    ])
  })
})
