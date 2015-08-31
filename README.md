# virtual-form
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Create a virtual-dom form.

## Installation
```sh
$ npm install virtual-form
```

## Usage
```js
const virtualForm = require('virtual-form')
const vel = require('vel')

vel(function (h) {
  return h('form.myForm', virtualForm(h, { label: true }, [
    'name',
    'address',
    { type: 'password', name: 'passphrase' },
    { type: 'input', value: 'Submit' }
  ])
})
```

## API
### formContent = virtualForm([opts,] elements)
Create new form content. There are several types of elements that can be
created:

#### default
```js
virtualForm([ 'address' ])
```
```html
<input type="text" name="address" placeholder="address"></input>
```

#### custom
```js
virtualForm([
  { type: 'password', name: 'passphrase' }
])
```
```html
<input type="password" name="passphrase" placeholder="passphrase"></input>
```

#### opts.label=true
```js
virtualForm({ label: true }, [ 'address' ])
```
```html
<fieldset>
  <label>address</label>
  <input type="text" name="address"></input>
</fieldset>
```

## FAQ
### Why isn't the `form` element created?
Creating a flat array of `input`s is less complex than creating hierarchical
form components.

## See Also
- [validate-json-schema-form](https://github.com/yoshuawuyts/validate-json-schema-form)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/virtual-form.svg?style=flat-square
[npm-url]: https://npmjs.org/package/virtual-form
[travis-image]: https://img.shields.io/travis/yoshuawuyts/virtual-form/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/virtual-form
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-form/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/virtual-form
[downloads-image]: http://img.shields.io/npm/dm/virtual-form.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/virtual-form
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
