function countOccurrences(str, char) {
    const modifiedStr = str.split(''); // split strings to array individual elements
    let count = 0; // this variable is used to store num of occurance
    
    // This for loop, loops over the array str and then if loop satisfies if conditions it updates count variable
    for (let i = 0; i < modifiedStr.length; i++) {
        if (modifiedStr[i] === char) {
            count++;
        }
    }
    
    return count;
}

module.exports = countOccurrences;
