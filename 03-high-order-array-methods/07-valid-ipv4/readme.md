# Challenge: Valid IPv4 Addresses

## Instructions

Write a function called `isValidIPv4` that takes a string as input and returns `true` if the input is a valid IPv4 address in dot-decimal format, and `false` otherwise. An IPv4 address should consist of four octets, with values between 0 and 255, inclusive.

### Function Signature

```js
/**
 * Checks if a given string is a valid IPv4 address.
 * @param {string} input - The input string to check.
 * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
 */
function isValidIPv4(input: string): boolean;
```

### Examples

```js
isValidIPv4('1.2.3.4'); // true
isValidIPv4('123.45.67.89'); // true
isValidIPv4('1.2.3'); // false
isValidIPv4('1.2.3.4.5'); // false
isValidIPv4('123.456.78.90'); // false
isValidIPv4('123.045.067.089'); // false
```

### Constraints

- The input will be a single string.

### Hints

- You can use the `split()` method to break the string into parts based on the dot character.
- You can use `every()` to check if all octets are within the valid range of 0 to 255.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function isValidIPv4(input) {
  const octets = input.split('.');
  if (octets.length !== 4) {
    return false;
  }
  return octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
}
```

## Explanation

- Split the input string into an array of strings using the `split()` method.
- Check if the array has exactly four elements. If not, return `false`.
- Use the `every()` method to check if all octets are valid.
  - Convert the octet to a number using `parseInt()`.
  - Check if the number is between 0 and 255, inclusive.
  - Check if the octet is equal to the number converted back to a string. This is to check for leading zeros.

</details>

### Test Cases

```js
test('Checking Valid IPv4 Addresses', () => {
  expect(isValidIPv4('1.2.3.4')).toBe(true);
  expect(isValidIPv4('123.45.67.89')).toBe(true);
  expect(isValidIPv4('1.2.3')).toBe(false);
  expect(isValidIPv4('1.2.3.4.5')).toBe(false);
  expect(isValidIPv4('123.456.78.90')).toBe(false);
  expect(isValidIPv4('123.045.067.089')).toBe(false);
});
```

You can use this template for your challenge to validate IPv4 addresses in dot-decimal format!
