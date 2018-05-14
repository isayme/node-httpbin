module.exports = {
  get (req) {
    // https://stackoverflow.com/a/7507507/1918831
    return `${req.protocol}://${req.headers.host}${req.url}`
  }
}
