const Context = require('app/context')

module.exports = (req, res, next) => {
  req.ctx = new Context(req, res)
  next()
}
