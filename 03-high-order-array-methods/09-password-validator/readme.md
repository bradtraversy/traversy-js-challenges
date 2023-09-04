# Challenge: Password Validation

## Instructions

Write a function called `validatePassword` that takes in a string and validates it based on the following criteria:

1. The password must be at least 8 characters long.
2. The password must contain at least one uppercase letter.
3. The password must contain at least one lowercase letter.
4. The password must contain at least one digit.

The function should return `true` if the password is valid according to the criteria, and `false` otherwise.

### Function Signature

```js
/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password: string): boolean;
```

### Examples

```js
validatePassword('Abc12345'); // should return true
validatePassword('password123'); // should return false (no uppercase letter)
validatePassword('Pass'); // should return false (length less than 8 characters)
validatePassword('HelloWorld'); // should return false (no digit)
```

### Constraints

- The input password can contain any combination of letters and digits.
- The input password can contain both uppercase and lowercase letters.

### Hints

- You can use the `split` function to convert the string into an array of characters and then use the `some` function to check if at least one character meets a certain condition.

## Solution

<details>
  <summary>Click For Solution</summary>

```js
function validatePassword(password) {
  const isLengthValid = password.length >= 8;

  const hasUppercase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split('')
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}
```

### Explanation

- Create a variable called `isLengthValid` and assign it the value of `true` if the password is at least 8 characters long, and `false` otherwise.
- Create a variable called `hasUppercase` and assign it the value of `true` if the password contains at least one uppercase letter, and `false` otherwise.
- Create a variable called `hasLowercase` and assign it the value of `true` if the password contains at least one lowercase letter, and `false` otherwise.
- Create a variable called `hasDigit` and assign it the value of `true` if the password contains at least one digit, and `false` otherwise.
- Return the result of the expression `isLengthValid && hasUppercase && hasLowercase && hasDigit`.

The `some` function is used to check if at least one character in the password meets a certain condition. The `some` function takes in a callback function as an argument. The callback function is called for each character in the password. If the callback function returns `true` for at least one character, then the `some` function returns `true`. Otherwise, the `some` function returns `false`.

</details>

### Test Cases

```js
test('Password Validation', () => {
  expect(validatePassword('Abc12345')).toBe(true);
  expect(validatePassword('password123')).toBe(false);
  expect(validatePassword('Pass')).toBe(false);
  expect(validatePassword('HelloWorld')).toBe(false);
});
```
