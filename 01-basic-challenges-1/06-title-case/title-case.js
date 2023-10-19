function titleCase(str) {
    const strToArr = str.split(' '); // converted string to array
    let result = []; // declared a variable result i.e an empty array to store the final result

    //now using for loop im loop over the array strToArr
    for (let i = 0; i < strToArr.length; i++) {
    // using slice method i have the the first letter from the array and capitialized it and stored it in firstLetter variable    
       let firstLetter = strToArr[i].slice(0, 1).toUpperCase();

    // using the slice method i have selected the remaining letters of the word from array and stored it in remianing letter variable
       let remainingLetters = strToArr[i].slice(1);

    // now using conact method i have joined the firstLetter and RemainingLetters and stored it in joinedWord variable 
       let joinedWord = firstLetter.concat(remainingLetters);

    //   console.log(firstLetter);
    //   console.log(remainingLetter);
    //   console.log(joinedWord);

    // now i have pushed joinedWord to result varaiable
       result.push(joinedWord);
    }
    return result.join(' ');
}

module.exports = titleCase;
