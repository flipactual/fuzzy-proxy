const test = require('ava');
const FuzzyProxy = require('../');

test.beforeEach(t => {
  t.context.testObject = new FuzzyProxy({
    tripleDouble(number) {
      return number * 3 * 2;
    },
    unicorn: '🦄',
  });
});

test.afterEach.always(t => {
  delete t.context.testObject;
});

test('Matches properties', t => {
  t.plan(1);
  t.is(t.context.testObject.unicorn, '🦄');
});

test('Fuzzy matches properties', t => {
  t.plan(1);
  t.is(t.context.testObject.uni, '🦄');
});

test('Fuzzy matches methods', t => {
  t.plan(1);
  t.is(t.context.testObject.tripleD(13), 78);
});

test('Returns undefined when there are no matches', t => {
  t.plan(1);
  t.is(t.context.testObject.totesGarb, undefined);
});
