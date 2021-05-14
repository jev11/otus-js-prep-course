import { rightTriangle, circleCA, quadraticEquation } from "./script";

describe("rightTriangle", () => {
  it("is a function", () => {
    expect(rightTriangle).toBeInstanceOf(Function);
  });

  [
    [5, 5, 7, false],
    [10, 23, 11, false],
    [3, 4, 5, true],
  ].forEach(([a, b, c, result]) => {
    it(`determines if triangle with sides ${a}, ${b}, ${c} is a 
    right triangle ${result}`, () => {
      expect(rightTriangle(a, b, c)).toBe(result);
    });
  });
});

describe("circleCA", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });

  it("is a function", () => {
    expect(circleCA).toBeInstanceOf(Function);
  });
  [
    [10, 62.83, 314.16],
    [1, 6.28, 3.14],
    [15, 94.25, 706.86],
  ].forEach(([radius, circ, area]) => {
    it(`calculates circumference ${circ} and area ${area}
     for circle with radius ${radius}`, () => {
      window.prompt = jest.fn().mockImplementation(() => radius);
      circleCA();
      expect(console.log).toHaveBeenCalledWith([circ, area]);
    });
  });
});

describe("quadraticEquation", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });
  it("is a function", () => {
    expect(quadraticEquation).toBeInstanceOf(Function);
  });
  [
    [1, -2, -3, [3, -1]],
    [-1, -2, 15, [-5, 3]],
    [1, 12, 36, [-6, -6]],
    [6, 2, 1, ["No x"]],
  ].forEach(([a, b, c, result]) => {
    it(`solves quadratic equation ${a}x^2+${b}x+${c}=0 with x 
    equal to ${result}`, () => {
      window.prompt = jest.fn().mockImplementation(() => `${a}, ${b}, ${c}`);
      quadraticEquation();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
