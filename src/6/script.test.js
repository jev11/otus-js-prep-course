import { diff, isWord, pow } from "./script";

describe("diff", () => {
  it("is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });
  [
    [[1, 2], 1],
    [[0, 0], 0],
    [[-10, 10], 20],
    [[10, -10], 20],
    [[0, -100], 100],
  ].forEach(([pair, result]) => {
    it(`returns difference between ${pair[0]} and ${pair[1]}`, () => {
      expect(diff(pair[0], pair[1])).toBe(result);
    });
  });
});

describe("isWord", () => {
  it("is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });
  [
    ["one", true],
    ["two words", false],
    ["This is false", false],
    ["", false],
  ].forEach(([str, result]) => {
    it(`returns ${result} for "${str}"`, () => {
      expect(isWord(str)).toBe(result);
    });
  });
});

describe("pow", () => {
  it("is a function", () => {
    expect(pow).toBeInstanceOf(Function);
  });
  [
    [[1, 2], 1],
    [[0, 0], 1],
    [[10, -1], 0.1],
    [[2, 3], 8],
    [[3, 5], 243],
  ].forEach(([pair, result]) => {
    it(`returns ${pair[0]} power ${pair[1]} to be equal ${result}`, () => {
      expect(pow(pair[0], pair[1])).toBe(result);
    });
  });
});
