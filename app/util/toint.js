const _ = require('lodash')

module.exports = (n, { min = 0, max = 1024 * 1024 } = {}) => {
  n = _.toInteger(n)
  n = _.min([n, max])
  n = _.max([n, min])

  return n
}
