const validateEmail = require('./validate-email');

test('Valid Email Addresses', () => {
  expect(validateEmail('john@example.com')).toBe(true);
  expect(validateEmail('jane.doe@domain.org')).toBe(true);
});

test('Invalid Email Addresses', () => {
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('@domain.com')).toBe(false);
  expect(validateEmail('user@domain')).toBe(false);
});
