function anagramGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    // Sort the characters of the word alphabetically.
    const sortedChars = word.split('').sort().join('');

    // If the sorted characters are already in the map, add the word to the array.
    if (anagramGroups.has(sortedChars)) {
      // The array is already in the map, so we can push to it.
      anagramGroups.get(sortedChars).push(word);
    } else {
      // The array is not in the map, so we need to create it.
      anagramGroups.set(sortedChars, [word]);
    }
  }

  // Return the values of the map as an array.
  return Array.from(anagramGroups.values());
}

module.exports = anagramGrouping;
