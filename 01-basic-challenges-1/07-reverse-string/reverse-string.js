function reverseString(str) {
    let result = []; // declared a variable result which is an empty array that is used to store result

    // first part of the loop i = str.length has the loop starts at maximum length of the string and second part of the loop till where the loop must continue in this case i <= 0 after that loop must stop and thrid part is the value should be counting backwards i--
    for (let i = str.length; i >= 0; i--) {
        result.push(str[i]); // pushing the results to result array
    }
    return result.join(''); // using join method to join the array to string
}

module.exports = reverseString;
