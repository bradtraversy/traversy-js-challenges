function isPalindrome(str) {
    //At first i have formatted string to lowercase and using regular expression i have created a pattern /[^a-z0-9]/g which means search anything that is not in a-z and 0-9 if it found anything replace it with empty string
    let formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    //Now i have coverted the formattedString to array using split('') i.e eg: ['m', 'a', 'd', 'a', 'm']. Then i have revesed the array using reverse method and i have joined everything to single string eg: 'madam'....note: join(' ') means join sentence in to a single string with words have ' ' this space or gap between them.
    let reversedString = formattedString.split('').reverse().join('');

    if (formattedString === reversedString) {
        return true
    } else {
        return false
    }
}

module.exports = isPalindrome;
