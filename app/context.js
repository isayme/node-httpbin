const requestIP = require('request-ip')
const constants = require('app/constants')

class Context {
  constructor (req, res) {
    this.req = req
    this.res = res
  }

  get method () {
    return this.req.method
  }

  get url () {
    // https://stackoverflow.com/a/7507507/1918831
    return `${this.req.protocol}://${this.req.headers.host}${this.req.url}`
  }

  get ip () {
    return requestIP.getClientIp(this.req) || constants.UnKnown
  }

  get headers () {
    return this.req.headers
  }

  get ua () {
    return this.headers['user-agent'] || constants.UnKnown
  }

  get query () {
    return this.req.query
  }

  get text () {
    if (this.req.is('text/*')) {
      return this.req.body
    }
  }

  get body () {
    if (this.req.is('json')) {
      return this.req.body
    }
    return {}
  }

  get form () {
    if (this.req.is('application/x-www-form-urlencoded')) {
      return this.req.body
    }
    return {}
  }

  get files () {
    if (!this.req.files) {
      return {}
    }

    return this.req.files.reduce((files, file) => {
      files[file.fieldname] = file.buffer.toString()
      return files
    }, {})
  }

  get cookies () {
    return this.req.cookies
  }
}

module.exports = Context
