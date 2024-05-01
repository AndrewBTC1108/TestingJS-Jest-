const sum = require("./sum");

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
});

test("add 10 + 10 to equal 20", () => {
  const result = sum(10, 10);
  expect(result).toBe(20);
});

test("deberia retornar un error", () => {
  const result = sum();
  expect(result).toBe("hubo error con los argumentos");
});