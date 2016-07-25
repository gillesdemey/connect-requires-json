var tap = require('tap')
var nonEmptyBody = require('./index')

tap.test('should throw 400 on empty body', function (t) {
  t.plan(1)

  nonEmptyBody({ body: {} }, null, function next (err) {
    t.equal(err.status, 400)
  })
})

tap.test('should throw 415 on not-JSON', function (t) {
  t.plan(1)

  nonEmptyBody({
    body: JSON.stringify({
      'foo': 'bar'
    }),
    headers: {
      'content-type': 'application/xml'
    },
    is: function () { return false }
  }, null, function next (err) {
    t.equal(err.status, 415)
  })
})

tap.test('should allow valid request', function (t) {
  t.plan(1)

  nonEmptyBody({
    body: JSON.stringify({
      'foo': 'bar'
    }),
    'headers': {
      'content-type': 'application/json'
    },
    is: function () { return true }
  }, null, t.error)
})
