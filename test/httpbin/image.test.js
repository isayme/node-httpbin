const request = require('supertest')
const assert = require('power-assert')
const app = require('app/app')
const constants = require('app/constants')
const mime = require('mime-types')

describe('/image', () => {
  it('/', async function () {
    let res = await request(app)
      .get('/image')
    assert.equal(res.statusCode, 200)
  })

  it('/png', async function () {
    let res = await request(app)
      .get('/image/png')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], mime.types.png)
  })

  it('/jpeg', async function () {
    let res = await request(app)
      .get('/image/jpeg')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], mime.types.jpg)
  })

  it('/webp', async function () {
    let res = await request(app)
      .get('/image/webp')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], mime.types.webp)
  })

  it('/svg', async function () {
    let res = await request(app)
      .get('/image/svg')
    assert.equal(res.statusCode, 200)
    assert.equal(res.header[constants.HTTPHeaderContentType.toLowerCase()], mime.types.svg)
  })
})
