import { act, RenderResult, render as testingLibraryRender } from '@testing-library/react';
import { RaikouProvider, RaikouProviderProps, RaikouThemeOverride } from '@raikou/core';

export function render(
  ui: React.ReactNode,
  themeOverride?: RaikouThemeOverride,
  providerProps?: Omit<RaikouProviderProps, 'theme'>
) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <RaikouProvider theme={themeOverride} {...providerProps}>
        {children}
      </RaikouProvider>
    ),
  });
}

export async function renderWithAct(ui: React.ReactNode) {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
}
