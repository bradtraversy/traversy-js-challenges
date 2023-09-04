const analyzeCarMileage = require('./analyze-car-milage');

test('Analyzing Car Mileage Data', () => {
  const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
  ];

  const analysis = analyzeCarMileage(cars);

  expect(analysis.averageMileage).toBeCloseTo(23333.33);
  expect(analysis.highestMileageCar).toEqual({
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    mileage: 30000,
  });
  expect(analysis.lowestMileageCar).toEqual({
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    mileage: 15000,
  });
  expect(analysis.totalMileage).toBe(70000);
});
