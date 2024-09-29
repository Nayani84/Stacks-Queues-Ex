const calculator = require('./calculator');

describe('calculator', () => {
    test('evaluates expression: "+ 1 * 2 3"', () => {
        expect(calculator("+ 1 * 2 3")).toBe(7);
    });

    test('evaluates an expression with addition and multiplication: "* + 2 3 4"', () => {
        expect(calculator("* + 2 3 4")).toBe(20);
    });

    test('evaluates an expression with division: "/ 10 - 5 2"', () => {
        expect(calculator("/ 10 - 5 2")).toBeCloseTo(3.333, 3);
    });
}); 