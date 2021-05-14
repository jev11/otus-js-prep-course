import { arraySum, doubleValue, findSmallestAndLargest } from "./script";

describe("arraySum", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });

  it("is a function", () => {
    expect(arraySum).toBeInstanceOf(Function);
  });
  [
    [[1, 2, 3, 4, 5], 15],
    [[0, 0, 0, 0, 0], 0],
    [[-1, -2, -3, -4], -10],
    [[1], 1],
  ].forEach(([arr, result]) => {
    it("it returns summary of array", () => {
      arraySum(arr);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("doubleValue", () => {
  it("is a function", () => {
    expect(doubleValue).toBeInstanceOf(Function);
  });
  [
    [
      [1, 2, 3, 4, 5],
      [2, 4, 6, 8, 10],
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    [[100], [200]],
  ].forEach(([arr, result]) => {
    it("it doubles the value of each array element", () => {
      expect(doubleValue(arr)).toStrictEqual(result);
    });
  });
});

describe("findSmallestAndLargest", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });
  it("is a function", () => {
    expect(findSmallestAndLargest).toBeInstanceOf(Function);
  });
  [
    [
      [1, 2, 3, 4, 5],
      [1, 5],
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0],
    ],
    [[100], [100]],
    [[], []],
  ].forEach(([arr, result]) => {
    it("it finds the smallest and largest element in the array", () => {
      findSmallestAndLargest(arr);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
