const a = require('./a.js');

function doublesum(num1, num2) {
    return 2 * (a.sum(num1, num2));
}

module.exports.doublesum = doublesum;
