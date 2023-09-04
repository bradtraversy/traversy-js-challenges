# Challenge: Phone Number Directory

## Instructions

You are building a phone number directory application. Implement a function called `phoneNumberDirectory` that takes an array of phone numbers as input and returns a Map with names as keys and corresponding phone numbers as values.

### Function Signature

```js
/**
 * Builds a phone number directory from an array of phone numbers.
 *
 * @param {string[]} phoneNumbers - An array of phone numbers in the format "Name:PhoneNumber".
 * @returns {Map<string, string>} - A Map with names as keys and corresponding phone numbers as values.
 */
function phoneNumberDirectory(phoneNumbers: string[]): Map<string, string>
```

### Examples

```js
const phoneNumbers = [
  'John:123-456-7890',
  'Jane:987-654-3210',
  'Joe:555-555-5555',
];

console.log(phoneNumberDirectory(phoneNumbers));
// Output: Map { 'John' => '123-456-7890', 'Jane' => '987-654-3210', 'Joe' => '555-555-5555' }
```

### Constraints

- The input array elements should be formatted as `NAME:PHONENUMBER`

### Hints

- Loop through the input array and use the `split()` method to separate the name and phone number in each element of the `phoneNumbers` array before adding to the map

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function phoneNumberDirectory(phoneNumbers) {
  const directory = new Map();

  for (const entry of phoneNumbers) {
    const [name, phoneNumber] = entry.split(':');
    directory.set(name, phoneNumber);
  }

  return directory;
}
```

### Explanation

- Create a new Map called `directory`
- Iterate through the `phoneNumbers` array using a `for...of` loop
- Use the `split()` method to separate the name and phone number from each entry using the colon `:` as the separator
- Set each name as the key and its corresponding phone number as the value in the Map
- Return the `directory`, which now contains the phone number directory

</details>

### Test Cases

```js
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
```
