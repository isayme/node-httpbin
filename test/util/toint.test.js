const assert = require('power-assert')
const toInt = require('app/util/toint')

describe('toInt', () => {
  it('default to 0', () => {
    assert.equal(toInt(), 0)
  })

  it('<=max', () => {
    assert.equal(toInt(100, { max: 10 }), 10)
  })

  it('>=min', () => {
    assert.equal(toInt(-100, { min: 10 }), 10)
  })
})
