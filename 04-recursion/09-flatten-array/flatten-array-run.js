const flattenArray = require('./flatten-array');

const result = flattenArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10]);

console.log(result);
