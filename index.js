var HttpError = require('http-errors')

module.exports = function nonEmptyJSON (req, res, next) {
  return req.is('json')
    ? next()
    : next(new HttpError(415, 'Body is not valid JSON, or empty'))
}
