import { analyze } from '../src';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const object = analyze(array);

test('it returns an object', () => {
  expect(typeof object).toBe('object');
});

test('it has an average property', () => {
  const result = object.average;
  expect(typeof result).toBe('number');
  expect(result).toBe(5.5);
});

test('it has a min property', () => {
  const result = object.min;
  expect(typeof result).toBe('number');
  expect(result).toBe(1);
});

test('it has a max property', () => {
  const result = object.max;
  expect(typeof result).toBe('number');
  expect(result).toBe(10);
});

test('it has a length property', () => {
  const result = object.length;
  expect(typeof result).toBe('number');
  expect(result).toBe(10);
});
