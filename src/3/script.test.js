import {rangeSum, productOfSeven, arMean} from "./script.js";

describe ("rangeSum", () => {
   it("is a function", () =>{
        expect(rangeSum).toBeInstanceOf(Function);
    });
    it(`returns a sume of numbers from 50 to 100 to be equal to 3725`, () => {
            expect(rangeSum()).toBe(3725);
    });
});

describe ("productOfSeven", () => {
    it("is a function", () =>{
        expect(productOfSeven).toBeInstanceOf(Function);
    });
    it(`Returns array of strings ["7 x 1 = 7", "7 x 2 = 14", "7 x 3 = 21", "7 x 4 = 28", "7 x 5 = 35", "7 x 6 = 42", "7 x 7 = 49", "7 x 8 = 56", "7 x 9 = 63"]`, () => {
        expect(productOfSeven()).toEqual(["7 x 1 = 7", "7 x 2 = 14", "7 x 3 = 21", "7 x 4 = 28", "7 x 5 = 35", "7 x 6 = 42", "7 x 7 = 49", "7 x 8 = 56", "7 x 9 = 63"]);
        })
    });

describe ("arMean", () => {
    it("is a function", () =>{
        expect(arMean).toBeInstanceOf(Function);
    });
    [
        [10, 5],
        [5, 3],
        [100, 50],
        [2, 1]
    ].forEach(([number, result]) => {
        it(`returns arithmetic mean fror all uneven numbers from 1 to ${number} it be equal to ${result}`, () => {
                expect(arMean(number)).toBe(result);
        })
    })
});
