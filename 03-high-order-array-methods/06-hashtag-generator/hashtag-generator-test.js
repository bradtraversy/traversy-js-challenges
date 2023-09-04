const generateHashtag = require('./hashtag-generator');

test('Generating Hashtags', () => {
  expect(generateHashtag(' Hello there thanks for trying my Kata')).toBe(
    '#HelloThereThanksForTryingMyKata'
  );
  expect(generateHashtag('    Hello     World   ')).toBe('#HelloWorld');
  expect(generateHashtag('')).toBe(false);
  expect(
    generateHashtag(
      'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140'
    )
  ).toBe(false);
});
