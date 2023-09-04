function permutations(str) {
  // Create an array to store the permutations
  const result = [];

  // If str is an empty string, push an empty string to result and return
  if (str.length === 0) {
    result.push('');
    return result;
  }

  // Loop through each character in str
  for (let i = 0; i < str.length; i++) {
    // Get the first character
    const firstChar = str[i];
    // Get the rest of the string
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    // Get the permutations of the rest of the string
    const subPermutations = permutations(restOfString);

    // Loop through each permutation in subPermutations
    for (let j = 0; j < subPermutations.length; j++) {
      // Push the first character and the permutation to result
      result.push(firstChar + subPermutations[j]);
    }
  }

  // Return result
  return result;
}

module.exports = permutations;
