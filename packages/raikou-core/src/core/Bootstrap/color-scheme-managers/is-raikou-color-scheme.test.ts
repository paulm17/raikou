import { isRaikouColorScheme } from "./is-raikou-color-scheme";

describe("@raikou/core/RaikouProvider/is-raikou-color-scheme", () => {
  it("returns true for valid color schemes", () => {
    expect(isRaikouColorScheme("auto")).toBe(true);
    expect(isRaikouColorScheme("dark")).toBe(true);
    expect(isRaikouColorScheme("light")).toBe(true);
  });

  it("returns false for invalid color schemes", () => {
    expect(isRaikouColorScheme("")).toBe(false);
    expect(isRaikouColorScheme("invalid")).toBe(false);
  });
});
