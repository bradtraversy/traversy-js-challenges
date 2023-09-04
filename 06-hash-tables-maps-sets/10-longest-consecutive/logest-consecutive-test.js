const longestConsecutiveSequence = require('./longest-consecutive');

test('Longest Consecutive Sequence', () => {
  expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1])).toBe(10);
});
