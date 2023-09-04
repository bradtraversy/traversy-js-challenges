const symmetricDifference = require('./symmetric-difference');

test('Symmetric Difference of Two Arrays', () => {
  expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  expect(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5])).toEqual([1, 5]);
  expect(symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual([]);
  expect(symmetricDifference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});
