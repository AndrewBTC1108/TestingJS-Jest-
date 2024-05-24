const capital = require("./capital_letter");

describe("All capital_letter test", () => {
    test("hello world should be Hello World", () => {
        expect(capital("hello world")).toBe("Hello World");
    });

    test("Check that an empty string returns an empty string", () => {
        expect(capital("")).toBe("");
    });
    
    test("Ensure that a chain already on title does not change", () => {
        expect(capital("Hello World")).toBe("Hello World");
    });
});