const highestScoringWord = require('./highest-scoring-word');

test('Finding the highest scoring word', () => {
  expect(highestScoringWord('hello my name is xavier')).toBe('xavier');
  expect(highestScoringWord('what time are we climbing up the volcano')).toBe(
    'volcano'
  );
  expect(highestScoringWord('take me to semynak')).toBe('semynak');
});
