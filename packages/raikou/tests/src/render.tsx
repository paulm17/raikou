import React from "react";
import {
  render as testingLibraryRender,
  act,
  RenderResult,
} from "@testing-library/react";
import { RaikouThemeOverride } from "@raikou/core";
import { RaikouProvider } from "@raikou/system";

export function render(
  ui: React.ReactNode,
  themeOverride?: RaikouThemeOverride,
): RenderResult {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <RaikouProvider theme={themeOverride}>{children}</RaikouProvider>
    ),
  });
}

export async function renderWithAct(
  ui: React.ReactNode,
): Promise<RenderResult> {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
}
