import { sum, prod, digitSum } from "./script";

let log;
beforeEach(() => {
  log = console.log;
  console.log = jest.fn();
});
afterEach(() => {
  console.log = log;
});

describe("sum", () => {
  it("is a function", () => {
    expect(sum).toBeInstanceOf(Function);
  });
  [
    [1, 2, 3],
    [0, 0, 0],
    [-5, 5, 0],
  ].forEach(([a, b, result]) => {
    it(`returns sum of ${a} and ${b} to be equal ${result}`, () => {
      sum(a, b);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("prod", () => {
  it("is a function", () => {
    expect(prod).toBeInstanceOf(Function);
  });
  [
    [1, 2, 2],
    [0, 0, 0],
    [-5, 5, -25],
    [3, 5, 15],
  ].forEach(([a, b, result]) => {
    it(`returns product of ${a} and ${b} to be equal ${result}`, () => {
      prod(a, b);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("digitSum", () => {
  it("is a function", () => {
    expect(digitSum).toBeInstanceOf(Function);
  });
  [
    [123, 6],
    [456, 15],
    [100, 1],
    [110, 2],
  ].forEach(([number, result]) => {
    it(`returns sum of digits in number ${number} equal to ${result}`, () => {
      window.prompt = jest.fn().mockImplementation(() => number);
      digitSum();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
