import { act, RenderResult, render as testingLibraryRender } from '@testing-library/react';
import { emotionTransform, RaikouEmotionProvider } from '@raikou/emotion';
import { RaikouProvider, RaikouProviderProps } from '@raikou/system';

export function render(ui: React.ReactNode, providerProps?: Omit<RaikouProviderProps, 'theme'>) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => {
      return (
        <RaikouProvider stylesTransform={emotionTransform} {...providerProps}>
          <RaikouEmotionProvider>{children}</RaikouEmotionProvider>
        </RaikouProvider>
      );
    },
  });
}

export async function renderWithAct(ui: React.ReactNode) {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
}
