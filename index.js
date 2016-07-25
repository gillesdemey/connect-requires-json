var isEmpty = require('lodash.isempty')
var HttpError = require('http-errors')

module.exports = function nonEmptyJSON (req, res, next) {
  if (isEmpty(req.body)) {
    return next(new HttpError(400, 'Empty body not allowed'))
  } else if (!req.is('json')) {
    return next(new HttpError(415, 'Body is not valid JSON'))
  } else {
    next()
  }
}
