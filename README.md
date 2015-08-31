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
  return h('form.myForm', virtualForm(h, [
    'name',
    'address',
    { type: 'password', name: 'passphrase' },
    { type: 'submit', value: 'Submit' }
  ])
})
```
__output__
```html
<form class="myForm">
  <input type="text" name="name" placeholder="name">
  <input type="text" name="address" placeholder="address">
  <input type="password" name="passphrase" placeholder="passphrase">
  <input type="submit" value="Submit">
</form>
```

## API
### formContent = virtualForm(h, [opts,] elements)
Create new form content. There are several types of elements that can be
created:

#### simple
```js
h('form', virtualForm(h, [
  'address'
]))
```
```html
<form>
  <input type="text" name="address" placeholder="address">
</form>
```

#### custom
```js
h('form', virtualForm(h, [
  { type: 'password', name: 'passphrase' }
]))
```
```html
<form>
  <input type="password" name="passphrase" placeholder="passphrase">
</form>
```

#### label
```js
h('form', virtualForm(h, { label: true }, [
  'address'
]))
```
```html
<form>
  <input type="text" name="address" placeholder="address">
  <fieldset>
    <label>address</label>
    <input type="text" name="address">
  </fieldset>
</form>
```

## FAQ
### Why isn't the `form` element created too?
Creating a flat array of `input`s has a significantly simpler interface than
when a `form` element is also created. For instance, users might want to attach
listeners to `ev-submit` or set classes.

### Why does `h` need to be passed in?
Though `virtual-dom` is lightweight, if every package pulls in their own
version, file size quickly grows. Instead it's better to pull in `virtual-dom`
once and pass references down throughout the application.

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
