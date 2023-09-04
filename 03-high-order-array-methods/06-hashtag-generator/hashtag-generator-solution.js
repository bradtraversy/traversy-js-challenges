function generateHashtag(str) {
  // If the string is empty or contains only whitespace characters, return false.
  if (str.trim() === '') {
    return false;
  }

  //  Split the string into an array of words.
  const words = str.trim().split(/\s+/);
  // Return a new array with the first letter of each word capitalized.
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words together into a string, prefixed with a hash.
  const hashtag = '#' + capitalizedWords.join('');

  // If the hashtag is longer than 140 characters, return false, otherwise return the hashtag.
  return hashtag.length > 140 ? false : hashtag;
}

// Solution 2
function generateHashtag(str) {
  // Split the string into an array of words. Use reduce to build the hashtag by passing in `#` as the initial value and then concatenating the first letter of each word capitalized and the rest of the word.
  const hashtag = str.split(' ').reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  // If the hashtag is only one character long or longer than 140 characters, return false, otherwise return the hashtag.
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
