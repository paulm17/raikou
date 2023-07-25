import { fontSizeResolver } from "./font-size-resolver";
import { DEFAULT_THEME } from "../../../../RaikouProvider";
import { rem } from "../../../../utils";

describe("@raikou/core/Box/font-size-resolver", () => {
  it("resolves theme font size", () => {
    expect(fontSizeResolver("xs", DEFAULT_THEME)).toBe(
      "var(--raikou-font-size-xs)",
    );
    expect(fontSizeResolver("sm", DEFAULT_THEME)).toBe(
      "var(--raikou-font-size-sm)",
    );
    expect(fontSizeResolver("md", DEFAULT_THEME)).toBe(
      "var(--raikou-font-size-md)",
    );
    expect(fontSizeResolver("lg", DEFAULT_THEME)).toBe(
      "var(--raikou-font-size-lg)",
    );
    expect(fontSizeResolver("xl", DEFAULT_THEME)).toBe(
      "var(--raikou-font-size-xl)",
    );
  });

  it("resolves number font size", () => {
    expect(fontSizeResolver(12, DEFAULT_THEME)).toBe(
      "calc(0.75rem * var(--raikou-scale))",
    );
    expect(fontSizeResolver(32, DEFAULT_THEME)).toBe(
      "calc(2rem * var(--raikou-scale))",
    );
  });

  it("resolves string font size", () => {
    expect(fontSizeResolver("12px", DEFAULT_THEME)).toBe(rem(12));
    expect(fontSizeResolver("1em", DEFAULT_THEME)).toBe(rem("1em"));
    expect(fontSizeResolver("1rem", DEFAULT_THEME)).toBe(rem("1rem"));
  });
});
