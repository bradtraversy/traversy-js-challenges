function phoneNumberDirectory(phoneNumbers) {
  // Create a new Map object
  const directory = new Map();

  // Loop through each entry in the phoneNumbers array
  for (const entry of phoneNumbers) {
    // Split the entry into a name and phone number
    const [name, phoneNumber] = entry.split(':');
    //  Add the name and phone number to the directory
    directory.set(name, phoneNumber);
  }

  // Return the directory
  return directory;
}

module.exports = phoneNumberDirectory;
