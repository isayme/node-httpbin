module.exports = {
  encode (s) {
    return Buffer.from(s).toString('base64')
  },

  decode (s) {
    return Buffer.from(s, 'base64').toString('ascii')
  }
}
