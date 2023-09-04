// Solution 1 - `map` and `find`
function findMissingLetter(arr) {
  // `start` is the character code of the first character in the array
  let start = arr[0].charCodeAt(0);
  // `missingCharCode` is the character code of the missing character
  const missingCharCode = arr
    .map((char) => char.charCodeAt(0)) // convert each character to its character code
    // find the first character code that is not one more than the previous character code
    .find((current) => {
      //  if the current character code is more than one greater than the previous character code then return true
      if (current - start > 1) {
        return true;
      }
      // otherwise set `start` to the current character code and return false
      start = current;
      return false;
    });
  // if `missingCharCode` is truthy then return the character that is one less than the character code
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : '';
}

// Solution 2 - `filter`
function findMissingLetter(arr) {
  // `missingCharCode` is the character code of the missing character
  const missingCharCode = arr.filter((char, index) => {
    // if the index is 0 then return false
    if (index === 0) return false;
    // `prevCharCode` is the character code of the previous character
    const prevCharCode = arr[index - 1].charCodeAt(0);
    // `currentCharCode` is the character code of the current character
    const currentCharCode = char.charCodeAt(0);
    // if the current character code is more than one greater than the previous character code then return true
    return currentCharCode - prevCharCode > 1;
  })[0];

  // if `missingCharCode` is truthy then return the character that is one less than the character code
  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : '';
}

// Solution 3 - `reduce`
function findMissingLetter(arr) {
  // `start` is the character code of the first character in the array
  let start = arr[0].charCodeAt(0);
  // `missingCharCode` is the character code of the missing character
  const missingCharCode = arr.reduce((missing, char) => {
    // `current` is the character code of the current character
    const current = char.charCodeAt(0);
    // if the current character code is more than one greater than the previous character code and `missing` is null then set `missing` to the character code of the missing character
    if (current - start > 1 && missing === null) {
      missing = start + 1;
    }
    // set `start` to the current character code
    start = current;
    // return `missing`
    return missing;
  }, null);
  // if `missingCharCode` is truthy then return the character that is one less than the character code
  return missingCharCode ? String.fromCharCode(missingCharCode) : '';
}

module.exports = findMissingLetter;
