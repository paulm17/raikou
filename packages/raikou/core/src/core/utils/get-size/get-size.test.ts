import {
  getSize,
  getSpacing,
  getShadow,
  getRadius,
  getFontSize,
  getLineHeight,
} from "./get-size";

describe("@raikou/core/get-size", () => {
  it("returns correct size for numbers and number like values", () => {
    expect(getSize(10)).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getSize("10")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getSize("10px")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getSize("10rem")).toBe("calc(10rem * var(--raikou-scale))");
    expect(getSize("10%")).toBe("10%");
  });

  it("returns correct size with custom prefix", () => {
    expect(getSize("xs", "test")).toBe("var(--test-xs)");
    expect(getSize("md", "test")).toBe("var(--test-md)");
    expect(getSize(10, "test")).toBe("calc(0.625rem * var(--raikou-scale))");
  });

  it("returns correct size for default prefix", () => {
    expect(getSize("xs")).toBe("var(--size-xs)");
    expect(getSize("md")).toBe("var(--size-md)");
  });
});

describe("@raikou/core/get-spacing", () => {
  it("returns correct values", () => {
    expect(getSpacing(10)).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getSpacing(0)).toBe("0");
    expect(getSpacing("10")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getSpacing("10px")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getSpacing("10rem")).toBe("calc(10rem * var(--raikou-scale))");
    expect(getSpacing("10%")).toBe("10%");
    expect(getSpacing("xs")).toBe("var(--raikou-spacing-xs)");
    expect(getSpacing("md")).toBe("var(--raikou-spacing-md)");
  });
});

describe("@raikou/core/get-radius", () => {
  it("returns correct values", () => {
    expect(getRadius(10)).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getRadius(0)).toBe("0");
    expect(getRadius("10")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getRadius("10px")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getRadius("10rem")).toBe("calc(10rem * var(--raikou-scale))");
    expect(getRadius("10%")).toBe("10%");
    expect(getRadius("xs")).toBe("var(--raikou-radius-xs)");
    expect(getRadius("md")).toBe("var(--raikou-radius-md)");
    expect(getRadius(undefined)).toBe("var(--raikou-radius-default)");
  });
});

describe("@raikou/core/get-font-size", () => {
  it("returns correct values", () => {
    expect(getFontSize(10)).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getFontSize(0)).toBe("0");
    expect(getFontSize("10")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getFontSize("10px")).toBe("calc(0.625rem * var(--raikou-scale))");
    expect(getFontSize("10rem")).toBe("calc(10rem * var(--raikou-scale))");
    expect(getFontSize("10%")).toBe("10%");
    expect(getFontSize("xs")).toBe("var(--raikou-font-size-xs)");
    expect(getFontSize("md")).toBe("var(--raikou-font-size-md)");
  });
});

describe("@raikou/core/get-line-height", () => {
  it("returns correct values", () => {
    expect(getLineHeight(10)).toBe(10);
    expect(getLineHeight(1.55)).toBe(1.55);
    expect(getLineHeight("10rem")).toBe("10rem");
    expect(getLineHeight("10%")).toBe("10%");
    expect(getLineHeight("xs")).toBe("var(--raikou-line-height-xs)");
    expect(getLineHeight("md")).toBe("var(--raikou-line-height-md)");
  });
});

describe("@raikou/core/get-shadow", () => {
  it("returns correct values", () => {
    expect(getShadow(undefined)).toBe(undefined);
    expect(getShadow("5px 5px 10px red")).toBe("5px 5px 10px red");
    expect(getShadow("xs")).toBe("var(--raikou-shadow-xs)");
    expect(getShadow("md")).toBe("var(--raikou-shadow-md)");
  });
});
