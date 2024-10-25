import { createContextContainer, render, tests } from '@raikou-tests/core';
import { AppShell } from '../AppShell';
import { AppShellHeader, AppShellHeaderProps, AppShellHeaderStylesNames } from './AppShellHeader';

const TestContainer = createContextContainer(AppShellHeader, AppShell, {});

const defaultProps: AppShellHeaderProps = {};

describe('@raikou/core/AppShellHeader', () => {
  tests.itSupportsSystemProps<AppShellHeaderProps, AppShellHeaderStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@raikou/core/AppShellHeader',
    stylesApiSelectors: ['header'],
    selector: '.raikou-AppShell-header',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellHeader,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector('.raikou-AppShell-header')).toHaveAttribute(
      'data-with-border',
      'true'
    );

    rerender(<TestContainer withBorder={false} />);
    expect(container.querySelector('.raikou-AppShell-header')).not.toHaveAttribute(
      'data-with-border'
    );
  });
});
