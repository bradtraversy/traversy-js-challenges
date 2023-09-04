// Solution 1
function areAllCharactersUnique(str) {
  // Create a new set
  const charSet = new Set();

  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];
    // If the set already has the current character, return false
    if (charSet.has(char)) {
      return false;
    }
    // Add the current character to the set
    charSet.add(char);
  }

  // If no characters are repeated, return true
  return true;
}

// Solution 2
function areAllCharactersUnique(str) {
  // Create an object to keep track of the characters in the string
  const charCount = {};

  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];
    // If the character is already in the object, return false
    if (charCount[char]) {
      return false;
    }
    // Add the current character to the object
    charCount[char] = true;
  }

  // If no characters are repeated, return true
  return true;
}

module.exports = areAllCharactersUnique;
