const a = require('./a.js');
const c = require('./c.js');
console.log('calling function from c', c.multiply(1,2));

test('a sum function works', () => {
  expect(a.sum(1, 2)).toBe(3);
});

test('a rest function works', () => {
  expect(a.rest(2, 1)).toBe(1);
});
