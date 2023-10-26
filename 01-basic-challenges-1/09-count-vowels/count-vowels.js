function countVowels(str) {
    //here what i have done is used regular expression like if string has a match of /[aeiou]/gi which means if any of the characters between bracket is found with conditions using modifiers like global search 'g' and case insensitive search 'i'. store that array in result variable.
    let result = str.match(/[aeiou]/gi);

    //if result is there then return result.length else return 0
    if (result) {
        return result.length;
    } else {
        return 0;
    }
}

module.exports = countVowels;
