const assert = require('assert')

module.exports = virtualForm

// Create a virtual-dom form
// null -> null
function virtualForm (h, opts, arr) {
  if (!arr) {
    arr = opts
    opts = {}
  }
  assert.equal(typeof h, 'function')
  assert.equal(typeof opts, 'object')
  assert.ok(Array.isArray(arr), 'is array')

  return arr.map(function createInput (val) {
    if (typeof val === 'string') {
      val = { type: 'text', name: val }
    }

    if (val.type === 'submit') {
      return h('input', val)
    }

    return h('fieldset', [
      h('label', [ val.name ]),
      h('input', val)
    ])
  })
}
