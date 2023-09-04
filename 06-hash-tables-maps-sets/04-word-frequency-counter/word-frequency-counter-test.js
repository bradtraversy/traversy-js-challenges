const wordFrequencyCounter = require('./word-frequency-counter');

describe('wordFrequencyCounter', () => {
  it('should count word frequencies correctly', () => {
    const input = "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.";
    const expectedOutput = new Map([
      ['the', 4],
      ['quick', 1],
      ['brown', 1],
      ['fox', 2],
      ['jumps', 1],
      ['over', 1],
      ['lazy', 1],
      ['dog', 2],
      ['barks', 1],
      ['and', 1],
      ['runs', 1],
      ['away', 1],
    ]);

    const result = wordFrequencyCounter(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty input', () => {
    const input = '';
    const expectedOutput = new Map();

    const result = wordFrequencyCounter(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle input with single word', () => {
    const input = 'hello';
    const expectedOutput = new Map([
      ['hello', 1],
    ]);

    const result = wordFrequencyCounter(input);
    expect(result).toEqual(expectedOutput);
  });

  // Add more test cases as needed
});
