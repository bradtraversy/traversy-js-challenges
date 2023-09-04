const wordInstanceCounter = require('./word-instance-counter');

const result = wordInstanceCounter(
  'The quick brown fox jumps over the lazy dog.',
  'brown'
);

console.log(result);
