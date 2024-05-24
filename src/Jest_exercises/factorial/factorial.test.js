const factorial = require("./factorial");

describe("All Factorial tests", () => {
    test('correctly calculates the factorial of a positive number', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(6)).toBe(720);
        expect(factorial(7)).toBe(5040);
    });

    test('the factorial of 0 is 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('the factorial of a negative number returns NaN', () => {
        expect(factorial(-1)).toBeNaN();
        expect(factorial(-5)).toBeNaN();
        expect(factorial(-10)).toBeNaN();
    });
});