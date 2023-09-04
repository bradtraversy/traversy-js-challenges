// Solution 1
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert the string to lowercase
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Reverse the string
  const reversedStr = formattedStr.split('').reverse().join('');
  // Return whether the formatted string is equal to the reversed string
  return formattedStr === reversedStr;
}

// Solution 2
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert the string to lowercase
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());

  // Reverse the string
  const reversedStr = reverseString(formattedStr);

  // Return whether the formatted string is equal to the reversed string
  return formattedStr === reversedStr;
}

// Helper functions
function removeNonAlphanumeric(str) {
  // Declare a variable to store the formatted string
  let formattedStr = '';
  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // If the current character is alphanumeric, add it to the formatted string
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  // Get the character code
  const code = char.charCodeAt(0);
  // Return whether the character is alphanumeric
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
}

function reverseString(str) {
  // Declare a variable to store the reversed string
  let reversed = '';
  // Loop through the string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the reversed string
    reversed += str[i];
  }
  // Return the reversed string
  return reversed;
}

module.exports = isPalindrome;
