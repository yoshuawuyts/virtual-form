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

    assert.equal(typeof val, 'object')

    if (opts.label) {
      return h('fieldset', [
        h('label', [ val.name ]),
        h('input', val)
      ])
    }

    if (val.type !== 'submit' && !val.placeholder) {
      val.placeholder = val.name
    }

    return h('input', val)
  })
}
