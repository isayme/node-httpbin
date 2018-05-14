const constants = require('app/constants')

module.exports = {
  get (req) {
    return req.header('user-agent') || constants.UnKnown
  }
}
