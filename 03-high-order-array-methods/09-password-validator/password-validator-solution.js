function validatePassword(password) {
  // Check if password is at least 8 characters long
  const isLengthValid = password.length >= 8;

  // Check if password contains at least one uppercase letter
  // The `some` method returns true if at least one element in the array satisfies the condition
  const hasUppercase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  // Check if password contains at least one lowercase letter
  const hasLowercase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  // Check if password contains at least one digit
  const hasDigit = password
    .split('')
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}

module.exports = validatePassword;
