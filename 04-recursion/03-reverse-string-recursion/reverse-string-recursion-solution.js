function reverseString(str) {
  // Base case - if str is empty, return empty string
  if (str === '') {
    return '';
  } else {
    // Recursive case - return the last character of str and call reverseString again
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// Shorter version
const reverseString = (str) =>
  str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);

reverseString('Hello');

module.exports = reverseString;
