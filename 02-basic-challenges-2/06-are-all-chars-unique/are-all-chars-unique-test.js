const areAllCharactersUnique = require('./are-all-chars-unique');

test('Unique Characters in a String', () => {
  expect(areAllCharactersUnique('abcdefg')).toBe(true);
  expect(areAllCharactersUnique('abcdefgA')).toBe(true);
  expect(areAllCharactersUnique('programming')).toBe(false);
  expect(areAllCharactersUnique('')).toBe(true);
  expect(areAllCharactersUnique('a')).toBe(true);
});
