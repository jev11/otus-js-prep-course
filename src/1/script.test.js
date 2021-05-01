import { sum, prod, digitSum } from './script.js';

describe('sum', () => {
  it('is a function', () => {
    expect(sum).toBeInstanceOf(Function);
  });
  [
    [1, 2, 3],
    [0, 0, 0],
    [-5, 5, 0],
  ].forEach(([a, b, result]) => {
    it(`returns sum of ${a} and ${b} to be equal ${result}`, () => {
      expect(sum(a, b)).toBe(result);
    });
  });
});

describe('prod', () => {
  it('is a function', () => {
    expect(prod).toBeInstanceOf(Function);
  });
  [
    [1, 2, 2],
    [0, 0, 0],
    [-5, 5, -25],
    [3, 5, 15],
  ].forEach(([a, b, result]) => {
    it(`returns product of ${a} and ${b} to be equal ${result}`, () => {
      expect(prod(a, b)).toBe(result);
    });
  });
});

describe('digitSum', () => {
  it('is a function', () => {
    expect(digitSum).toBeInstanceOf(Function);
  });
  [
    [123, 6],
    [456, 15],
    [100, 1],
    [110, 2],
  ].forEach(([number, result]) => {
    it(`returns sum of a natural three digit number ${number} to be equal ${result}`, () => {
      expect(digitSum(number)).toBe(result);
    });
  });
});
