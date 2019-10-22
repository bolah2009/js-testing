import { calculator } from '../src';

describe('calculator', () => {
  test('it is an object', () => {
    expect(typeof calculator).toBe('object');
  });

  describe('performs basic operation', () => {
    const calculate = calculator;
    test('add two arguments', () => {
      expect(calculate.add(3, 7)).toBe(10);
    });

    test('subtract two arguments', () => {
      expect(calculate.subtract(8, 3)).toBe(5);
    });

    test('divide two arguments', () => {
      expect(calculate.divide(20, 4)).toBe(5);
    });

    test('add two arguments', () => {
      expect(calculate.multiply(3, 7)).toBe(21);
    });
  });
});
