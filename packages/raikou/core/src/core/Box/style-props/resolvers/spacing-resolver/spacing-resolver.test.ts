import { spacingResolver } from "./spacing-resolver";
import { DEFAULT_THEME } from "../../../../RaikouProvider";
import { rem } from "../../../../utils";

describe("@raikou/core/Box/spacing-resolver", () => {
  it("resolves number correctly", () => {
    expect(spacingResolver(10, DEFAULT_THEME)).toBe(rem(10));
    expect(spacingResolver(-10, DEFAULT_THEME)).toBe(rem(-10));
    expect(spacingResolver(1.5, DEFAULT_THEME)).toBe(rem(1.5));
    expect(spacingResolver(0, DEFAULT_THEME)).toBe(rem(0));
  });

  it("resolves theme value correctly", () => {
    expect(spacingResolver("xs", DEFAULT_THEME)).toBe(
      "var(--raikou-spacing-xs)",
    );
    expect(spacingResolver("-md", DEFAULT_THEME)).toBe(
      "calc(var(--raikou-spacing-md) * -1)",
    );
  });

  it("resolves string correctly", () => {
    expect(spacingResolver("10px", DEFAULT_THEME)).toBe(rem(10));
    expect(spacingResolver("-10px", DEFAULT_THEME)).toBe(rem(-10));
    expect(spacingResolver("1rem", DEFAULT_THEME)).toBe(rem("1rem"));
  });
});
