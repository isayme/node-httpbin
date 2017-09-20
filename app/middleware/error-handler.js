module.exports = (err, req, res, next) => {
  res.status(500).json({
    name: err.name,
    message: err.message,
    stack: err.stack
  })
}
