const anagramGrouping = require('./anagram-grouping');

test('Grouping anagrams', () => {
  const result1 = anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
  const result2 = anagramGrouping([
    'listen',
    'silent',
    'enlist',
    'hello',
    'world',
  ]);

  expect(result1).toEqual([
    ['cat', 'act', 'tac'],
    ['dog', 'god'],
  ]);
  expect(result2).toEqual([
    ['listen', 'silent', 'enlist'],
    ['hello'],
    ['world'],
  ]);
});
