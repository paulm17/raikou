import { DEFAULT_THEME } from "../../RaikouProvider";
import { px } from "../units-converters";
import { getBreakpointValue } from "./get-breakpoint-value";

describe("@raikou/core/AppShell/get-breakpoint-value", () => {
  it("returns breakpoint value from theme", () => {
    expect(getBreakpointValue("xs", DEFAULT_THEME)).toBe(
      px(DEFAULT_THEME.breakpoints.xs),
    );
  });

  it("returns breakpoint value from number", () => {
    expect(getBreakpointValue(10, DEFAULT_THEME)).toBe(px(10));
  });

  it("returns breakpoint value from string", () => {
    expect(getBreakpointValue("10px", DEFAULT_THEME)).toBe(px(10));
    expect(getBreakpointValue("20em", DEFAULT_THEME)).toBe(px("20em"));
  });
});
