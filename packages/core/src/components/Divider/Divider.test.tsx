import { render, tests } from '@raikou-tests/core';
import { Divider, DividerProps, DividerStylesNames } from './Divider';

const defaultProps: DividerProps = {
  label: 'test-label',
};

describe('@raikou/core/Divider', () => {
  tests.itSupportsSystemProps<DividerProps, DividerStylesNames>({
    component: Divider,
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
    displayName: '@raikou/core/Divider',
    stylesApiSelectors: ['root', 'label'],
  });

  it('sets data-orientation attribute based on orientation prop', () => {
    const { rerender, container } = render(<Divider orientation="horizontal" />);
    expect(container.querySelector('.raikou-Divider-root')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );

    rerender(<Divider orientation="vertical" />);
    expect(container.querySelector('.raikou-Divider-root')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('sets data-position on label element based on labelPosition prop', () => {
    const { container } = render(<Divider label="test-label" labelPosition="left" />);
    expect(container.querySelector('.raikou-Divider-label')).toHaveAttribute(
      'data-position',
      'left'
    );
  });

  it('sets data-with-label attribute when label is present', () => {
    const { container, rerender } = render(<Divider label="test-label" />);
    expect(container.querySelector('.raikou-Divider-root')).toHaveAttribute('data-with-label');

    rerender(<Divider />);
    expect(container.querySelector('.raikou-Divider-root')).not.toHaveAttribute('data-with-label');
  });
});
