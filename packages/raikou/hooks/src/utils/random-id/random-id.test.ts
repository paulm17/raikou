import { randomId } from "./random-id";

describe("@raikou/hooks/random-id", () => {
  it("returns random id with raikou- prefix", () => {
    expect(randomId().includes("raikou-")).toBe(true);
    expect(randomId()).toHaveLength(16);
  });
});
