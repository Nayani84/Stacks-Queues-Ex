const isBalanced = require("./balancedBrackets");

describe("isBalanced", () => {
    it("should returns true if brackets are balanced", () => {
      expect(isBalanced("(sdfs)")).toBe(true);
      expect(isBalanced("(sdf[sdf])")).toBe(true);
      expect(isBalanced("([]sdsd)")).toBe(true);
      expect(isBalanced("([]{[]})")).toBe(true);
    });
    it("should returns false if brackets are not balanced", () => {
      expect(isBalanced("(")).toBe(false);
      expect(isBalanced(")sdf")).toBe(false);
      expect(isBalanced("}{")).toBe(false);
      expect(isBalanced("([sdf)]")).toBe(false);
      expect(isBalanced("({[sdf])}")).toBe(false);
    });
  });
  