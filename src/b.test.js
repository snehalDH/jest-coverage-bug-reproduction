const b = require('./b.js');

test('b doublesum function works', () => {
  expect(b.doublesum(1, 2)).toBe(6);
});