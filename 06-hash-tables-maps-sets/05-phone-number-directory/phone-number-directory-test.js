const phoneNumberDirectory = require('./phone-number-directory');

test('Building a phone number directory from an array of phone numbers', () => {
  const phoneNumbers = [
    'John:123-456-7890',
    'Jane:987-654-3210',
    'Joe:555-555-5555',
  ];

  const result = phoneNumberDirectory(phoneNumbers);

  expect(result.get('John')).toBe('123-456-7890');
  expect(result.get('Jane')).toBe('987-654-3210');
  expect(result.get('Joe')).toBe('555-555-5555');
});
