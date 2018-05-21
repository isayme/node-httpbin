const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const constants = require('app/constants')

describe('/basic-auth', () => {
  it('ok', async function () {
    let res = await request(app)
      .get('/basic-auth/user/pass')
      .set(constants.HTTPHeaderAuthorization, 'Basic dXNlcjpwYXNz')
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.user, 'user')
    assert.equal(res.body.authenticated, true)
  })

  it('fail', async function () {
    let res = await request(app)
      .get('/basic-auth/user/pass')
      .set(constants.HTTPHeaderAuthorization, 'Basic aXNlcjpwYXNz')
    assert.equal(res.statusCode, 401)
    assert.equal(res.headers['www-authenticate'], 'Basic realm="Fake Realm"')
  })
})

describe('/hidden-basic-auth', () => {
  it('ok', async function () {
    let res = await request(app)
      .get('/hidden-basic-auth/user/pass')
      .set(constants.HTTPHeaderAuthorization, 'Basic dXNlcjpwYXNz')
    assert.equal(res.statusCode, 200)
    assert.equal(res.body.user, 'user')
    assert.equal(res.body.authenticated, true)
  })

  it('fail', async function () {
    let res = await request(app)
      .get('/hidden-basic-auth/user/pass')
      .set(constants.HTTPHeaderAuthorization, 'Basic aXNlcjpwYXNz')
    assert.equal(res.statusCode, 404)
  })
})
