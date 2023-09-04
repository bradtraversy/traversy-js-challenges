// Solution 1
function calculator(num1, num2, operator) {
  // Declare a variable to store the result
  let result;

  // Use a switch statement to determine which operation to perform
  switch (operator) {
    case '+':
      result = num1 + num2;
      break; // Break out of the switch statement
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      // If the operator is not one of the above, throw an error
      throw new Error('Invalid operator');
  }

  return result;
}

// Solution 2
function calculator(num1, num2, operator) {
  // Declare a variable to store the result
  let result;

  // Use if/else if/else statements to determine which operation to perform
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    // If the operator is not one of the above, throw an error
    throw new Error('Invalid operator');
  }

  return result;
}

module.exports = calculator;
