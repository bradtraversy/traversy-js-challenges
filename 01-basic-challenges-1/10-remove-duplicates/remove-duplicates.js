function removeDuplicates(arr=[]) {
    let cleanedArr = []; //this variable stores cleaned array

    // Im looping through this array and in if statement im checking if arr[i] does not include in cleanedArr push that arr[i] to cleaned array. so basically it removed duplicate elements and store it in cleanedArr
    for (let i = 0; i < arr.length; i++) {

        if (!cleanedArr.includes(arr[i])) {
            cleanedArr.push(arr[i])
        }

    }
    return cleanedArr;
}

module.exports = removeDuplicates;
