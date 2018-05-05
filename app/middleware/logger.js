const _ = require('lodash')
const logger = require('app/logger')

const startTime = Symbol('startTime')
module.exports = function (req, res, next) {
  res[startTime] = Date.now()
  res.on('finish', onResFinished)
  res.on('error', onResFinished)
  next()
}

// `this` will be res
function onResFinished (err) {
  this.removeListener('error', onResFinished)
  this.removeListener('finish', onResFinished)

  const res = this
  const req = res.req
  const responseTime = Date.now() - res[startTime]

  const info = {
    method: req.method,
    url: req.url,
    route: _.get(req, 'route.path'),
    status: res.statusCode,
    responseTime: `${responseTime}ms`
  }

  let useLevel = 'info'

  if (err) {
    useLevel = 'error'

    info.err = {
      message: err.message,
      stack: err.stack
    }
  }

  logger[useLevel](JSON.stringify(info))
}
