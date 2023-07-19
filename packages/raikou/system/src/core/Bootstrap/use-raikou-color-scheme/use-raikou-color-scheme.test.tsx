import React from "react";
import { renderHook } from "@testing-library/react";
import { Bootstrap } from "../Bootstrap";
import { useRaikouColorScheme } from "./use-raikou-color-scheme";

function Wrapper({ children }: { children: React.ReactNode }) {
  return <Bootstrap defaultColorScheme="dark">{children}</Bootstrap>;
}

describe("@raikou/core/RaikouProvider/use-raikou-color-scheme", () => {
  it("returns color scheme from RaikouProvider context", () => {
    const { result } = renderHook(() => useRaikouColorScheme(), {
      wrapper: Wrapper,
    });
    expect(result.current.colorScheme).toBe(undefined);
  });
});
