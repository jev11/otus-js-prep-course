import { addAge, makeAdmin, destructure } from "./script";

describe("addAge", () => {
  it("is a function", () => {
    expect(addAge).toBeInstanceOf(Function);
  });
  const user = { name: "John" };
  it("it adds age property to an object", () => {
    expect(addAge(user, 20)).toMatchObject({ name: "John", age: 20 });
  });
});

describe("makeAdmin", () => {
  it("is a function", () => {
    expect(makeAdmin).toBeInstanceOf(Function);
  });
  const user = { name: "John", age: 20 };
  it("Makes copy of an object and adds a new property 'admin'", () => {
    expect(makeAdmin(user)).toMatchObject({
      name: "John",
      age: 20,
      role: "admin",
    });
    expect(user).toBe(makeAdmin(user));
  });
});

describe("destructure", () => {
  it("is a function", () => {
    expect(destructure).toBeInstanceOf(Function);
  });
  [
    [{ name: "John" }, ["John", undefined, undefined]],
    [{ name: "John", age: 20 }, ["John", 20, undefined]],
    [{ name: "John", age: 20, role: "admin" }, ["John", 20, "admin"]],
  ].forEach(([obj, result]) => {
    it(`it destructures object ${obj} and returns result ${result}`, () => {
      expect(destructure(obj)).toStrictEqual(result);
    });
  });
});
