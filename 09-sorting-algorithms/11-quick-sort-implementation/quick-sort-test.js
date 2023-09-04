const quickSort = require('./quick-sort');

test('Sort an array in ascending order', () => {
  const unsortedArray = [5, 2, 8, 1, 3];
  const sortedArray = [1, 2, 3, 5, 8];
  expect(quickSort(unsortedArray)).toEqual(sortedArray);
});

test('Sort an array with repeated values', () => {
  const unsortedArray = [4, 1, 3, 4, 2, 2];
  const sortedArray = [1, 2, 2, 3, 4, 4];
  expect(quickSort(unsortedArray)).toEqual(sortedArray);
});

test('Sort an already sorted array', () => {
  const sortedArray = [1, 2, 3, 4, 5];
  expect(quickSort(sortedArray)).toEqual(sortedArray);
});

test('Sort an array with one element', () => {
  const singleElementArray = [42];
  expect(quickSort(singleElementArray)).toEqual(singleElementArray);
});

test('Sort an empty array', () => {
  const emptyArray = [];
  expect(quickSort(emptyArray)).toEqual(emptyArray);
});
