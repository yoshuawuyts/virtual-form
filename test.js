const test = require('tape')
const virtualForm = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(virtualForm)
})
