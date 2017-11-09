const config = require('config')
const request = require('supertest')
const assert = require('power-assert')
const app = require('../app/app')

describe('cors', () => {
  it('should ok if from trusted domains', function * () {
    let originHost = 'http://a.com'
    let res = yield request(app)
      .get('/version')
      .set('origin', originHost)

    assert(res.headers['access-control-allow-origin'] === originHost)
  })

  it('should fail if from trusted domains', function * () {
    let originHost = 'http://b.com'
    let res = yield request(app)
      .get('/version')
      .set('origin', originHost)

    assert(res.headers['access-control-allow-origin'] === undefined)
  })

  it('should fail if invalid config', function * () {
    let configCORS = config.cors
    config.cors = ['[(']
    let originHost = 'http://b.com'
    let res = yield request(app)
      .get('/version')
      .set('origin', originHost)
    assert(res.statusCode === 500)
    config.cors = configCORS
  })
})
