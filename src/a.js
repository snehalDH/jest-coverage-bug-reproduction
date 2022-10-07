
const c = require('./c.js');

function sum(a, b) {
    return a + b;
}

function rest(a, b) {
    c.multiply(a,b);
    return a - b;
}

module.exports.sum = sum;
module.exports.rest = rest;