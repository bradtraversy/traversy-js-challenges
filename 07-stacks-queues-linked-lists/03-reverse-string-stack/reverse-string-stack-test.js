const reverseStringStack = require('./reverse-string-stack');

test('Reversing a string', () => {
  expect(reverseStringStack('Hello')).toBe('olleH');
  expect(reverseStringStack('JavaScript')).toBe('tpircSavaJ');
  expect(reverseStringStack('12345')).toBe('54321');
});
