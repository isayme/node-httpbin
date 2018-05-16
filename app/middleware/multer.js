const multer = require('multer')

module.exports = multer({
  limits: {
    fileSize: 1024 * 1024 // max size: 1M
  }
}).any()
