import { render, tests, userEvent } from '@raikou-tests/core';
import { Pill, PillProps, PillStylesNames } from './Pill';

const defaultProps: PillProps = {
  children: 'test-pill',
  withRemoveButton: true,
};

describe('@raikou/core/Pill', () => {
  tests.axe([<Pill {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<PillProps, PillStylesNames>({
    component: Pill,
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
    refType: HTMLSpanElement,
    displayName: '@raikou/core/Pill',
    stylesApiSelectors: ['root', 'label', 'remove'],
  });

  it('renders remove button if withRemoveButton prop is true', () => {
    const { container, rerender } = render(<Pill {...defaultProps} withRemoveButton />);
    expect(container.querySelector('.raikou-Pill-remove')).toBeInTheDocument();

    rerender(<Pill {...defaultProps} withRemoveButton={false} />);
    expect(container.querySelector('.raikou-Pill-remove')).not.toBeInTheDocument();
  });

  it('supports removeButtonProps', () => {
    const { container } = render(
      <Pill removeButtonProps={{ 'data-test': true } as any} withRemoveButton />
    );
    expect(container.querySelector('[data-test="true"]')).toBeInTheDocument();
  });

  it('supports onClick in removeButtonProps', async () => {
    const spy = vi.fn();
    const { container } = render(<Pill removeButtonProps={{ onClick: spy }} withRemoveButton />);
    await userEvent.click(container.querySelector('.raikou-Pill-remove')!);
    expect(spy).toHaveBeenCalled();
  });

  it('supports onMouseDown in removeButtonProps', async () => {
    const spy = vi.fn();
    const { container } = render(
      <Pill removeButtonProps={{ onMouseDown: spy }} withRemoveButton />
    );
    await userEvent.click(container.querySelector('.raikou-Pill-remove')!);
    expect(spy).toHaveBeenCalled();
  });

  it('sets data-with-remove attribute based on withRemoveButton prop', () => {
    const { container, rerender } = render(<Pill {...defaultProps} withRemoveButton />);
    expect(container.querySelector('[data-with-remove]')).toBeInTheDocument();

    rerender(<Pill {...defaultProps} withRemoveButton={false} />);
    expect(container.querySelector('[data-with-remove]')).not.toBeInTheDocument();
  });
});
