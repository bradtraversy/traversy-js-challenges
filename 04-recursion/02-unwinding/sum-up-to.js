function sumUpTo(n) {
  if (n === 0) return 0;

  if (n === 1) {
    return 1;
  }

  return n + sumUpTo(n - 1);
}

module.exports = sumUpTo;
