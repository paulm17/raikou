import { render, tests, userEvent } from '@raikou-tests/core';
import { ColorPicker, ColorPickerProps, ColorPickerStylesNames } from './ColorPicker';

const defaultProps: ColorPickerProps = {
  format: 'rgba',
  swatches: ['#fff'],
};

describe('@raikou/core/ColorPicker', () => {
  tests.axe([
    <ColorPicker
      {...defaultProps}
      format="rgba"
      saturationLabel="Saturation"
      alphaLabel="Alpha"
      hueLabel="Hue"
      key="1"
    />,
  ]);

  tests.itSupportsSystemProps<ColorPickerProps, ColorPickerStylesNames>({
    component: ColorPicker,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@raikou/core/ColorPicker',
    stylesApiSelectors: [
      'wrapper',
      'preview',
      'body',
      'sliders',
      'swatches',
      'swatch',
      'saturation',
      'saturationOverlay',
      'slider',
      'thumb',
    ],
  });

  it('renders swatches based on swatches prop', () => {
    const { rerender, container } = render(<ColorPicker swatches={['#fff']} />);
    expect(container.querySelector('.raikou-ColorPicker-swatches')).toBeInTheDocument();

    rerender(<ColorPicker />);
    expect(container.querySelector('.raikou-ColorPicker-swatches')).not.toBeInTheDocument();
  });

  it('renders AlphaSlider based on format prop', () => {
    const { rerender, container } = render(<ColorPicker format="rgba" />);
    expect(container.querySelector('[data-alpha]')).toBeInTheDocument();

    rerender(<ColorPicker format="hex" />);
    expect(container.querySelector('[data-alpha]')).not.toBeInTheDocument();
  });

  it('renders picker based on withPicker prop', () => {
    const { rerender, container } = render(<ColorPicker withPicker />);
    expect(container.querySelector('.raikou-ColorPicker-saturation')).toBeInTheDocument();

    rerender(<ColorPicker withPicker={false} />);
    expect(container.querySelector('.raikou-ColorPicker-saturation')).not.toBeInTheDocument();
  });

  it('calls onChangeEnd when swatch is clicked', async () => {
    const spy = vi.fn();
    const { container } = render(
      <ColorPicker onChangeEnd={spy} format="hex" swatches={['#ffffff', '#000000']} />
    );
    await userEvent.click(container.querySelectorAll('.raikou-ColorSwatch-root')[0]);
    expect(spy).toHaveBeenCalledWith('#ffffff');
  });

  it('calls onColorSwatchClick when swatch is clicked', async () => {
    const spy = vi.fn();
    const { container } = render(
      <ColorPicker onColorSwatchClick={spy} format="hex" swatches={['#ffffff', '#000000']} />
    );
    await userEvent.click(container.querySelectorAll('.raikou-ColorSwatch-root')[0]);
    expect(spy).toHaveBeenCalledWith('#ffffff');
  });
});
