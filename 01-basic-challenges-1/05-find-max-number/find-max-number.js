function findMaxNumber(arr) {
    let largestNum = 0; //initial largest number

    // This loop, iterates over the array arr and if arr value is greater than our largest number our variable largest number updates with the arr value that satifies the if condition and this process continues till the loop finishes.
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] > largestNum ) {
            largestNum = arr[i];
        }
    }

    return largestNum;
}

module.exports = findMaxNumber;
