function countDown(num) {
  // Base case - if num is less than or equal to 0, log 'All done!' and return
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  // Recursive case - log num, decrement num, and call countDown again
  console.log(num);
  num--;
  countDown(num);
}

module.exports = countDown;
