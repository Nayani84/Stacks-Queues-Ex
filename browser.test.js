const Browser = require("./browser");

let browser;

beforeEach(function() {
  browser = new Browser();
});

describe("Browser Back/Forward System", function() {
  it("should handle multiple visits correctly", function() {
    browser.visitPage("Google");
    browser.visitPage("Yahoo");
    browser.visitPage("EBay");
    browser.back();
    expect(browser.getCurrentPage()).toBe("Yahoo");
    browser.back();
    expect(browser.getCurrentPage()).toBe("Google");
    browser.forward();
    expect(browser.getCurrentPage()).toBe("Yahoo");
    browser.visitPage("Apple");
    expect(browser.getCurrentPage()).toBe("Apple");
  });
});