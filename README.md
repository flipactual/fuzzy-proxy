# fuzzy-proxy

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/fuzzy-proxy.svg?style=flat-square)](https://travis-ci.org/flipactual/fuzzy-proxy/)
[![Codecov](https://img.shields.io/codecov/c/github/flipactual/fuzzy-proxy.svg?style=flat-square)](https://codecov.io/gh/flipactual/fuzzy-proxy/)
[![Node](https://img.shields.io/node/v/fuzzy-proxy.svg?style=flat-square)](http://npmjs.com/package/fuzzy-proxy)
[![NPM](https://img.shields.io/npm/v/fuzzy-proxy.svg?style=flat-square)](http://npmjs.com/package/fuzzy-proxy)

Fuzzy match keys on objects

## Scripts

### `test` – run the tests

```sh
npm run test
```

### `coverage` – generate and view code coverage as HTML

```sh
npm run coverage
```

### `lint` – lint the codebase

```sh
npm run lint
```

### `readme` – generate the README

```sh
npm run readme
```

### `compile` – compile the code

```sh
npm run compile
```

<a name="FuzzyProxy"></a>

## FuzzyProxy
**Kind**: global class  
<a name="new_FuzzyProxy_new"></a>

### new FuzzyProxy(objectToProxy)
FuzzyProxy - Creates an object with fuzzy matching capabilities

**Returns**: <code>object</code> - Fuzzy proxied object  

| Param | Type | Description |
| --- | --- | --- |
| objectToProxy | <code>object</code> | Object to apply fuzzy proxying to |

**Example**  
```js
const bestObjectEver = new FuzzyProxy({
  tripleDouble(number) {
    return number * 3 * 2;
  },
  unicorn: '🦄',
});

bestObjectEver.uni
// → '🦄'

bestObjectEver.tripleD(13)
// → 78
```

## License

MIT @ [Flip](https://github.com/flipactual)
