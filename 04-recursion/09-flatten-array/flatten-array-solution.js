function flattenArray(arr) {
  // Create an empty array to store the result
  let result = [];

  // Loop through each item in arr
  for (const item of arr) {
    // If item is an array, call flattenArray again and concat the result to result
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      // If item is not an array, push it to result
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArray;
