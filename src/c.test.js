const c = require('./c.js');

test('c sum function works', () => {
  expect(c.multiply(1, 2)).toBe(2);
});

test('c extraFunc function works', () => {
  expect(c.extraFunc()).toBe(1);
});
