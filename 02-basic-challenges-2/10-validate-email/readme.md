# Challenge: Validate Email

## Instructions

Write a function called `validateEmail` that takes in a string and returns whether the string is a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains an `@` symbol and a `.` symbol.

### Function Signature

```js
/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email: string): boolean;
```

### Examples

```js
validateEmail('john@gmail.com'); // true
validateEmail('john@gmail'); // false
```

### Hints

- If you know regular expressions, this is a great place to use them. I am going to give you two solutions. One uses regular expressions and one doesn't.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

Using a regular expression:

```js
function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}
```

### Explanation

The regular expression is a bit complicated, but it is a good example of how powerful regular expressions can be. Let's break it down:

- ^ asserts the start of the string.
- [A-Za-z0-9._%+-]+ matches one or more occurrences of letters (both uppercase and lowercase), digits, dots, underscores, percent signs, plus signs, and hyphens. This represents the local part of the email address before the "@" symbol.
- @ matches the "@" symbol.
- [A-Za-z0-9.-]+ matches one or more occurrences of letters, digits, dots, and dashes. This represents the domain name of the email address.
- \. matches the dot (".") character. It needs to be escaped with a backslash because the dot has a special meaning in regular expressions.
- [A-Za-z]{2,} matches two or more occurrences of letters. This represents the top-level domain (TLD) of the email address.
- $ asserts the end of the string.

</details>

<details>
  <summary>Click For Solution 2</summary>

Not using regular expression:

```js
function validateEmail(email) {
  if (email.indexOf('@') === -1) {
    return false;
  }

  const [localPart, domain] = email.split('@');

  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split('.');
  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  ) {
    return false;
  }

  return true;
}
```

### Explanation

This solution is a bit more complicated, but it doesn't use regular expressions.

- Use the `indexOf` method to check if the email address contains the "@" symbol. If it doesn't, it returns `false`.
- Use the `split` method to split the email address into two parts: the local part and the domain. We use destructuring to assign the two parts to variables.
- Check if the local part is empty or if the domain is less than three characters long. If either of these conditions is true, we return `false`.
  Split the domain into parts using the `split` method. We check if the domain has at least two parts and if the last part is at least two characters long.
- If either of these conditions is false, return `false`.

Finally, if none of the conditions are false, we return `true`.

</details>

### Test Cases

```js
test('Valid Email Addresses', () => {
  expect(validateEmail('john@example.com')).toBe(true);
  expect(validateEmail('jane.doe@domain.org')).toBe(true);
});

test('Invalid Email Addresses', () => {
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('@domain.com')).toBe(false);
  expect(validateEmail('user@domain')).toBe(false);
});
```
