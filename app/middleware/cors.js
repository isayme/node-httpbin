const cors = require('cors')
const config = require('config')

// https://github.com/expressjs/cors/blob/master/README.md#configuration-options
const corsOptionsDelegate = function (req, callback) {
  callback(null, {
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: [
      'Authorization',
      'Content-Type',
      'If-Match',
      'If-Modified-Since',
      'If-None-Match',
      'If-Unmodified-Since',
      'X-Requested-With'
    ],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    origin: (origin, cb) => {
      if (!origin || origin === config.host) {
        return cb(null, false)
      }

      for (let pattern of config.cors) {
        try {
          let regex = new RegExp(pattern, 'i')
          if (regex.test(origin)) {
            return cb(null, true)
          }
        } catch (err) {
          return cb(err)
        }
      }

      return cb(null, false)
    }
  })
}

module.exports = cors(corsOptionsDelegate)
