import { patchConsoleError, render, screen, tests } from '@raikou-tests/core';
import {
  SemiCircleProgress,
  SemiCircleProgressProps,
  SemiCircleProgressStylesNames,
} from './SemiCircleProgress';

const defaultProps: SemiCircleProgressProps = {
  size: 200,
  thickness: 12,
  value: 40,
};

describe('@raikou/core/SemiCircleProgress', () => {
  beforeAll(() => {
    patchConsoleError();
  });

  afterAll(() => {
    patchConsoleError.release();
  });

  tests.itSupportsSystemProps<SemiCircleProgressProps, SemiCircleProgressStylesNames>({
    component: SemiCircleProgress,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/SemiCircleProgress',
    stylesApiSelectors: ['root', 'svg'],
  });

  it('renders given label', () => {
    render(<SemiCircleProgress {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('assigns labelPosition prop to label data-position attribute', () => {
    render(<SemiCircleProgress {...defaultProps} label="test-label" labelPosition="center" />);
    expect(screen.getByText('test-label')).toHaveAttribute('data-position', 'center');
  });
});
