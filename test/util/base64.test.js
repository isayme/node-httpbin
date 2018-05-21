const assert = require('power-assert')
const base64 = require('app/util/base64')

describe('base64', () => {
  it('encode', () => {
    assert.equal(base64.encode('hello world\r\n'), 'aGVsbG8gd29ybGQNCg==')
  })

  it('decode', () => {
    assert.equal(base64.decode('aGVsbG8gd29ybGQNCg=='), 'hello world\r\n')
  })
})
