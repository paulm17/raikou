import React from "react";
import { renderHook } from "@testing-library/react";
import { RaikouProvider } from "../RaikouProvider";
import { useRaikouColorScheme } from "./use-raikou-color-scheme";

function Wrapper({ children }: { children: React.ReactNode }) {
  return <RaikouProvider defaultColorScheme="dark">{children}</RaikouProvider>;
}

describe("@raikou/core/RaikouProvider/use-raikou-color-scheme", () => {
  it("returns color scheme from RaikouProvider context", () => {
    const { result } = renderHook(() => useRaikouColorScheme(), {
      wrapper: Wrapper,
    });
    expect(result.current.colorScheme).toBe(undefined);
  });
});
