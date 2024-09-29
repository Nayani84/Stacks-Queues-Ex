const survivor = require("./josephusSurvivor");

describe("survivor", () => {
    it("returns the survivor", () => {
      expect(survivor(5, 2)).toBe(3);
      expect(survivor(10, 3)).toBe(4);
    });
  });
