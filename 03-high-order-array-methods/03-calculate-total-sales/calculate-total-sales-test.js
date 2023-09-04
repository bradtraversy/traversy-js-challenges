const calculateTotalSalesWithTax = require('./calculate-total-sales.js');

test('Calculating total sales amount with tax', () => {
  expect(
    calculateTotalSalesWithTax(
      [
        { name: 'Apple', price: 0.5, quantity: 10 },
        { name: 'Banana', price: 0.3, quantity: 20 },
        { name: 'Orange', price: 0.6, quantity: 15 },
      ],
      8
    )
  ).toBe(21.6);

  expect(
    calculateTotalSalesWithTax(
      [
        { name: 'Chocolate', price: 2.5, quantity: 5 },
        { name: 'Chips', price: 1.2, quantity: 10 },
        { name: 'Soda', price: 1.0, quantity: 8 },
        { name: 'Candy', price: 0.5, quantity: 15 },
      ],
      5
    )
  ).toBe(42);
});
