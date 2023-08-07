import { isSameMonth } from "./is-same-month";

describe("@raikou/dates/is-same-month", () => {
  it("detects same month", () => {
    expect(isSameMonth(new Date(2021, 2, 1), new Date(2021, 2, 2))).toBe(true);
    expect(isSameMonth(new Date(2021, 3, 1), new Date(2021, 2, 2))).toBe(false);
    expect(isSameMonth(new Date(2022, 2, 2), new Date(2021, 2, 2))).toBe(false);
  });
});
