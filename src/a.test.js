const a = require('./a.js');

test('a sum function works', () => {
  expect(a.sum(1, 2)).toBe(3);
});

test('a rest function works', () => {
  expect(a.rest(2, 1)).toBe(1);
});