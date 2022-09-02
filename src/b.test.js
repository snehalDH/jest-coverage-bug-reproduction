const b = require('./b.js');

const a = require('./a.js');
console.log('a:', a.sum(1,2));

test('b doublesum function works', () => {
  expect(b.doublesum(1, 2)).toBe(6);
});
