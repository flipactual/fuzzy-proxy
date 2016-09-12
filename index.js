const { filter } = require('fuzzy');

/**
 * FuzzyProxy - Creates an object with fuzzy matching capabilities
 *
 * @constructor
 * @param  {object} objectToProxy - Object to apply fuzzy proxying to
 * @return {object} Fuzzy proxied object
 *
 * @example
 * const bestObjectEver = new FuzzyProxy({
 *   tripleDouble(number) {
 *     return number * 3 * 2;
 *   },
 *   unicorn: '🦄',
 * });
 *
 * bestObjectEver.uni
 * // → '🦄'
 *
 * bestObjectEver.tripleD(13)
 * // → 78
 *
 */
function FuzzyProxy(objectToProxy) {
  return new Proxy(objectToProxy, {
    get: (t, n) => t[
      Object.getOwnPropertyNames(t).includes(n)
        ? n
        : filter(n, Object.getOwnPropertyNames(t))[0].string
    ],
  });
}

module.exports = FuzzyProxy;
