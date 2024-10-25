import { createContextContainer, render, tests } from '@raikou-tests/core';
import { AppShell } from '../AppShell';
import {
  AppShellSection,
  AppShellSectionProps,
  AppShellSectionStylesNames,
} from './AppShellSection';

const TestContainer = createContextContainer<any>(AppShellSection, AppShell, {});

const defaultProps: AppShellSectionProps = {};

describe('@raikou/core/AppShellSection', () => {
  tests.itSupportsSystemProps<any, AppShellSectionStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@raikou/core/AppShellSection',
    stylesApiSelectors: ['section'],
    selector: '.raikou-AppShell-section',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError<any>({
    component: AppShellSection,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-grow attribute based on grow prop', () => {
    const { container, rerender } = render(<TestContainer grow />);
    expect(container.querySelector('.raikou-AppShell-section')).toHaveAttribute(
      'data-grow',
      'true'
    );

    rerender(<TestContainer grow={false} />);
    expect(container.querySelector('.raikou-AppShell-section')).not.toHaveAttribute('data-grow');
  });
});
