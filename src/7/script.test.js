import { createList } from "./script";

describe("createList", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
    createList(el);
  });

  it("is a function", () => {
    expect(createList).toBeInstanceOf(Function);
  });

  it("creates basic markup", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector(".history")).toBeTruthy();
    expect(el.querySelector("button").hidden).toBeTruthy();
  });

  it("clears input on form after click", () => {
    el.querySelector("input").value = "abcd";
    el.querySelector("button").click();
    expect(el.querySelector("input").value).toBe("");
  });

  it("renders paragraph in history", () => {
    el.querySelector("input").value = "efgh";
    el.querySelector("button").click();
    expect(el.querySelector(".history").innerHTML).toBe("<p>efgh</p>");
  });
});
