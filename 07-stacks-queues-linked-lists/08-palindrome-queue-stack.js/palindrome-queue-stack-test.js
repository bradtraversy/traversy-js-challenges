const isPalindromeQueueStack = require('./palindrome-queue-stack');

test('Checking for palindrome strings', () => {
  expect(isPalindromeQueueStack('racecar')).toBe(true);
  expect(isPalindromeQueueStack('Hello')).toBe(false);
  expect(isPalindromeQueueStack('A man, a plan, a canal, Panama')).toBe(true);
  expect(isPalindromeQueueStack('12321')).toBe(true);
});
