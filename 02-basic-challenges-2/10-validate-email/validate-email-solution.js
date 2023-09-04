// Solution 1
function validateEmail(email) {
  // Create a regular expression to match the email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  // Return whether the email matches the regular expression
  return emailRegex.test(email);
}

// Solution 2
function validateEmail(email) {
  // Check if the email contains the "@" symbol
  if (email.indexOf('@') === -1) {
    return false;
  }

  // Split the email into the local part and domain
  const [localPart, domain] = email.split('@');

  // Check if the local part and domain meet the minimum length requirements
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  // Check if the domain extension consists of at least two characters
  const domainExtension = domain.split('.');
  if (
    domainExtension.length < 2 ||
    domainExtension[1].length < 2
  ) {
    return false;
  }

  // If all checks pass, return true
  return true;
}

module.exports = validateEmail;
