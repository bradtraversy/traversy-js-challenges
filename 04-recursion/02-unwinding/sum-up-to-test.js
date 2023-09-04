test('Summing up positive integers', () => {
  expect(sumUpTo(5)).toBe(15);
  expect(sumUpTo(10)).toBe(55);
  expect(sumUpTo(1)).toBe(1);
  expect(sumUpTo(0)).toBe(0);
});
