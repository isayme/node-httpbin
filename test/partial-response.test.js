const request = require('supertest')
const assert = require('power-assert')
const app = require('../app/app')

describe('partial-response', () => {
  it('should ok', function * () {
    let res = yield request(app).get('/version?fields=name,version')
    assert.equal(res.statusCode, 200)
    assert.deepEqual(Object.keys(res.body), ['name', 'version'])
  })
})
