const reverseString = require("./stringReversal");

describe("reverseString", () => {
    it("reverses a string", () => {
      expect(reverseString("hello")).toBe("olleh");
      expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
    });
  });
  