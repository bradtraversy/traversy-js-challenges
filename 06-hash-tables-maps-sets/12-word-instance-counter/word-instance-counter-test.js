const wordInstanceCounter = require('./word-instance-counter')

test('Counting instances of a word in a string', () => {
  expect(
    wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
  ).toBe(2);
  expect(
    wordInstanceCounter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'ipsum'
    )
  ).toBe(1);
  expect(wordInstanceCounter('Hello, world!', 'hello')).toBe(1);
  expect(wordInstanceCounter('Hello, Hello, Hello!', 'hello')).toBe(3);
});
