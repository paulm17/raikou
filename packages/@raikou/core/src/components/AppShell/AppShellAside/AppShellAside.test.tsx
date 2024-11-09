import { createContextContainer, render, tests } from '@raikou-tests/core';
import { AppShell } from '../AppShell';
import { AppShellAside, AppShellAsideProps, AppShellAsideStylesNames } from './AppShellAside';

const TestContainer = createContextContainer(AppShellAside, AppShell, {});

const defaultProps: AppShellAsideProps = {};

describe('@raikou/core/AppShellAside', () => {
  tests.itSupportsSystemProps<AppShellAsideProps, AppShellAsideStylesNames>({
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
    displayName: '@raikou/core/AppShellAside',
    stylesApiSelectors: ['aside'],
    selector: '.raikou-AppShell-aside',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellAside,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector('.raikou-AppShell-aside')).toHaveAttribute(
      'data-with-border',
      'true'
    );

    rerender(<TestContainer withBorder={false} />);
    expect(container.querySelector('.raikou-AppShell-aside')).not.toHaveAttribute(
      'data-with-border'
    );
  });
});
