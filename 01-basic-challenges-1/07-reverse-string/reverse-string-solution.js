// Solution 1
function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join the array into a string
  return str.split('').reverse().join('');
}

// Solution 2
function reverseString(str) {
  // Declare a variable to store the reversed string
  let reversed = '';

  // Loop through the string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the reversed string
    reversed += str[i];
  }

  // Return the reversed string
  return reversed;
}
//////////////////////////////////////solution 3
const reverseString = function(string){
  let reverse = []; 
  const words = string.split('');
    for(let x = words.length-1;x>=0;x--){
        reverse.push(words[x]);
    }
    return reverse.join('') ; 
}
///////////////////////////////////////
module.exports = reverseString;
