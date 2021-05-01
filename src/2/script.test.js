import { getMonth, compareNumbers, circleFitsInSquare } from "./script";

describe("compareNumbers", () => {
  it("is a function", () => {
    expect(compareNumbers).toBeInstanceOf(Function);
  });
  [
    [1, 2, 2],
    [0, 1, 1],
    [-5, 5, 5],
  ].forEach(([a, b, output]) => {
    it(`compares numbers ${a} and ${b} and returns the largest 
      number ${output}`, () => {
      expect(compareNumbers(a, b)).toBe(output);
    });
  });
});

describe("getMonth", () => {
  it("is a function", () => {
    expect(getMonth).toBeInstanceOf(Function);
  });
  [
    [1, "Январь"],
    [2, "Февраль"],
    [3, "Март"],
    [4, "Апрель"],
    [5, "Май"],
    [6, "Июнь"],
    [7, "Июль"],
    [8, "Август"],
    [9, "Сентябрь"],
    [10, "Октябрь"],
    [11, "Ноябрь"],
    [12, "Декабрь"],
    [13, "Такого месяца не существует"],
  ].forEach(([number, month]) => {
    it(`Returns month ${month} for number ${number}`, () => {
      expect(getMonth(number)).toBe(month);
    });
  });
});

describe("circleFitsInSquare", () => {
  it("is a function", () => {
    expect(circleFitsInSquare).toBeInstanceOf(Function);
  });
  [
    [7, 9, true],
    [5, 20, true],
    [20, 15, false],
    [2, 1, false],
  ].forEach(([circleS, squareS, result]) => {
    it(`returns ${result} if cirsle with area 
      ${circleS} fits into sqaure with area ${squareS}`, () => {
      expect(circleFitsInSquare(circleS, squareS)).toBe(result);
    });
  });
});
