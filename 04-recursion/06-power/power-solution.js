// No recursion
function power(base, exponent) {
  // Initialize result to 1
  let result = 1;

  // Multiply base by itself exponent times
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function power(base, exponent) {
  // Base case - if exponent is 0, return 1
  if (exponent === 0) {
    return 1;
  } else {
    // Recursive case - return base multiplied by itself exponent - 1 times
    return base * power(base, exponent - 1);
  }
}

module.exports = power;
