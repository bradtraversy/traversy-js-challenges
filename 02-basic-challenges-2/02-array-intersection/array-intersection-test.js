const arrayIntersection = require('./array-intersection');

test('Finding array intersection', () => {
  expect(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
    3, 4, 5,
  ]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
});
