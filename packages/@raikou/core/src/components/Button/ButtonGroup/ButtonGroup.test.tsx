import { render, screen, tests } from '@raikou-tests/core';
import { ButtonGroup, ButtonGroupProps, ButtonGroupStylesNames } from './ButtonGroup';

const defaultProps: ButtonGroupProps = {};

describe('@raikou/core/ButtonGroup', () => {
  tests.itSupportsSystemProps<ButtonGroupProps, ButtonGroupStylesNames>({
    component: ButtonGroup,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/ButtonGroup',
    stylesApiSelectors: ['group'],
  });

  it('adds data-orientation attribute to root element based on orientation prop', () => {
    render(<ButtonGroup orientation="vertical" />);
    expect(screen.getByRole('group')).toHaveAttribute('data-orientation', 'vertical');
  });
});
