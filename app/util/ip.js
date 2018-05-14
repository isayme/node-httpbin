const requestIP = require('request-ip')
const constants = require('app/constants')

module.exports = {
  get (req) {
    return requestIP.getClientIp(req) || constants.UnKnown
  }
}
