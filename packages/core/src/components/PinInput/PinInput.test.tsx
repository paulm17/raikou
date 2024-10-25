import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, tests } from '@raikou-tests/core';
import { PinInput, PinInputProps, PinInputStylesNames } from './PinInput';

const defaultProps: PinInputProps = {};

describe('@raikou/core/PinInput', () => {
  tests.axe([<PinInput {...defaultProps} aria-label="Test label" />]);

  tests.itSupportsSystemProps<PinInputProps, PinInputStylesNames>({
    component: PinInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@raikou/core/PinInput',
    stylesApiSelectors: ['root', 'pinInput', 'input'],
    providerStylesApi: false,
  });

  it('renders correct number of inputs based on length prop', () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.raikou-PinInput-input')).toHaveLength(5);
  });

  it('onChange is called after typing', () => {
    const spy = jest.fn();
    const { container } = render(<PinInput type="number" length={6} onChange={spy} />);

    fireEvent.input(container.querySelectorAll('.raikou-PinInput-input')[1], {
      target: {
        value: '1',
      },
    });

    expect(spy).toHaveBeenCalled();
  });

  it('onComplete is called on last input', () => {
    const spy = jest.fn();
    const { container } = render(<PinInput {...defaultProps} onComplete={spy} />);

    expect(container.querySelectorAll('.raikou-PinInput-input')).toHaveLength(4);

    container.querySelectorAll('.raikou-PinInput-input').forEach((element) => {
      fireEvent.change(element, { target: { value: '1' } });
    });

    expect(spy).toHaveBeenCalledWith('1111');
  });

  it('focus first input on mount with `autoFocus` property', () => {
    const { container } = render(<PinInput length={6} autoFocus />);
    expect(container.querySelectorAll('.raikou-PinInput-input')[0]).toHaveFocus();
  });

  it('stay focused on last element on initial backspace press', async () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.raikou-PinInput-input')).toHaveLength(5);

    container.querySelectorAll('.raikou-PinInput-input').forEach((element, key) => {
      fireEvent.change(element, { target: { value: key } });
    });

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.raikou-PinInput-input')[4]).toHaveFocus();
  });

  it('inputs except the last element should not need two backspace press to shift focus to prev element', async () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.raikou-PinInput-input')).toHaveLength(5);

    container.querySelectorAll('.raikou-PinInput-input').forEach((element, key) => {
      fireEvent.change(element, { target: { value: key } });
    });

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.raikou-PinInput-input')[4]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.raikou-PinInput-input')[3]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.raikou-PinInput-input')[2]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.raikou-PinInput-input')[1]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.raikou-PinInput-input')[0]).toHaveFocus();
  });

  it('inputs will be filled when the value is bigger than 2 chars(ex: Gboard paste action from keypad)', async () => {
    const spy = jest.fn();
    const { container } = render(<PinInput {...defaultProps} onComplete={spy} length={6} />);

    const element = container.querySelectorAll('.raikou-PinInput-input')[0];

    const expectedValue = '123456';
    fireEvent.change(element, { target: { value: expectedValue } });
    expect(spy).toHaveBeenCalledWith(expectedValue);
  });

  it('display only one character in an input', () => {
    const { container } = render(<PinInput length={6} />);
    expect(
      (container.querySelectorAll('.raikou-PinInput-input')[0] as HTMLInputElement).value.length
    ).toBeLessThan(2);
  });

  it('display only one character in an input with `defaultValue` property', () => {
    const { container } = render(<PinInput length={6} defaultValue="123456" />);
    expect(
      (container.querySelectorAll('.raikou-PinInput-input')[2] as HTMLInputElement).value.length
    ).toBe(1);
  });
});
