import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useComboboxContext } from '../Combobox.context';

export type ComboboxHeaderStylesNames = 'header';

export interface ComboboxHeaderProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxHeaderFactory>,
    ElementProps<'div'> {}

export type ComboboxHeaderFactory = Factory<{
  props: ComboboxHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxHeaderStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxHeaderProps> = {};

export const ComboboxHeader = factory<ComboboxHeaderFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'ComboboxHeader',
    defaultProps,
    props
  );

  const ctx = useComboboxContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('header', { className, classNames, style, styles })}
      {...others}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
    />
  );
});

ComboboxHeader.displayName = '@raikou/core/ComboboxHeader';
