const toHtml = require('vdom-to-html')
const h = require('virtual-dom/h')
const noop = require('noop2')
const test = require('tape')

const vform = require('./')

test('should assert input types', function (t) {
  t.plan(4)
  t.throws(vform.bind(null), /function/)
  t.throws(vform.bind(null, noop), /is array/)
  t.throws(vform.bind(null, noop, 123, []), /object/)
  t.throws(vform.bind(null, noop, {}, 123), /is array/)
})

test('should create an array of simple inputs', function (t) {
  t.plan(1)
  const form = toHtml(h('form', vform(h, [
    'name',
    'address'
  ])))
  const comp = [
    '<form>',
    '<input type="text" name="name" value="" placeholder="name">',
    '<input type="text" name="address" value="" placeholder="address">',
    '</form>'
  ].join('')
  t.equal(form, comp)
})

test('should create an array of custom inputs', function (t) {
  t.plan(1)
  const form = toHtml(h('form', vform(h, [
    'name',
    { type: 'password', name: 'passphrase' },
    { type: 'submit', value: 'Submit' }
  ])))
  const comp = [
    '<form>',
    '<input type="text" name="name" value="" placeholder="name">',
    '<input type="password" name="passphrase" value="" placeholder="passphrase">',
    '<input type="submit" value="Submit">',
    '</form>'
  ].join('')
  t.equal(form, comp)
})

test('should create an array of labeled inputs', function (t) {
  t.plan(1)
  const form = toHtml(h('form', vform(h, { label: true }, [
    'name',
    'address'
  ])))
  const comp = [
    '<form>',
    '<fieldset>',
    '<label>name</label>',
    '<input type="text" name="name" value="">',
    '</fieldset>',
    '<fieldset>',
    '<label>address</label>',
    '<input type="text" name="address" value="">',
    '</fieldset>',
    '</form>'
  ].join('')
  t.equal(form, comp)
})
