const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
  it('should return the correct Fibonacci number', () => {
    expect(fibonacci(0)).toBe(0); // The 0th Fibonacci number is 0
    expect(fibonacci(1)).toBe(1); // The 1st Fibonacci number is 1
    expect(fibonacci(2)).toBe(1); // The 2nd Fibonacci number is 1 (0 + 1)
    expect(fibonacci(3)).toBe(2); // The 3rd Fibonacci number is 2 (1 + 1)
    expect(fibonacci(4)).toBe(3); // The 4th Fibonacci number is 3 (1 + 2)
    expect(fibonacci(5)).toBe(5); // The 5th Fibonacci number is 5 (2 + 3)
    expect(fibonacci(6)).toBe(8); // The 6th Fibonacci number is 8 (3 + 5)
    expect(fibonacci(7)).toBe(13); // The 7th Fibonacci number is 13 (5 + 8)
  });
});
