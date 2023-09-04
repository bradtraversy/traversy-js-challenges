const findMissingNumber = require('./find-missing-number');

test('Finding the missing number', () => {
  expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
  expect(findMissingNumber([1, 3, 4, 5, 6])).toBe(2);
});
