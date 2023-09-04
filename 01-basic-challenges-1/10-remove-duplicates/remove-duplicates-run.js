const removeDuplicates = require('./remove-duplicates');

const result = removeDuplicates([
  1,
  2,
  3,
  4,
  5,
  5,
  5,
  6,
  7,
  8,
  'hello',
  'hello',
  true,
  true,
]);

console.log(result);
