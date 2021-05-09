import { stringParser } from "./script";

describe("stringParser", () => {
  it("is a function", () => {
    expect(stringParser).toBeInstanceOf(Function);
  });

  [
    ["10.02.2001", "date"],
    ["10/2/2001", "date"],
    ["1-2-2001", "date"],
    ["12.12.2021", "date"],
    ["23.22.2021", "unidentified"],
    ["01.01.20213", "unidentified"],
    ["01.13.2021", "unidentified"],
    ["99.1.2021", "unidentified"],
    ["john.doe@gmail.com", "email"],
    ["john_doe@gmail.com", "email"],
    ["johndoe@yahoo.com", "email"],
    ["john-doe@mail.ru", "email"],
    ["_john-_doe@mail.ru", "email"],
    ["john@doe@mail.ru", "unidentified"],
    ["+79502342234", "phone number"],
    ["+70000000000", "phone number"],
    ["+700000000001", "unidentified"],
    ["+39610001234", "unidentified"],
    ["+7961000123a", "unidentified"],
    ["+7961000_234", "unidentified"],
    ["+6", "unidentified"],
    ["+6", "unidentified"],
  ].forEach(([str, result]) => {
    it(`determines that ${str} is a(n) ${result}`, () => {
      expect(stringParser(str)).toBe(result);
    });
  });
});
