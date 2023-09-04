const validAnagrams = require('./valid-anagrams');

test('Checking for Valid Anagrams', () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('hello', 'world')).toBe(false);
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true);
  expect(validAnagrams('apple', 'banana')).toBe(false);
});
