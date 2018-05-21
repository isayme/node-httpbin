const assert = require('power-assert')
const uuid = require('app/util/uuid')

describe('uuid', () => {
  it('ok', () => {
    const id = uuid()
    assert.equal(typeof id, 'string')
  })
})
