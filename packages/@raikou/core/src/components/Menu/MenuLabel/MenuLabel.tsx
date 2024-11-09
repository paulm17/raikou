import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useMenuContext } from '../Menu.context';

export type MenuLabelStylesNames = 'label';

export interface MenuLabelProps
  extends BoxProps,
    CompoundStylesApiProps<MenuLabelFactory>,
    ElementProps<'div'> {}

export type MenuLabelFactory = Factory<{
  props: MenuLabelProps;
  ref: HTMLDivElement;
  stylesNames: MenuLabelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<MenuLabelProps> = {};

export const MenuLabel = factory<MenuLabelFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'MenuLabel',
    defaultProps,
    props
  );
  const ctx = useMenuContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('label', { className, style, styles, classNames })}
      {...others}
    />
  );
});

MenuLabel.displayName = '@raikou/core/MenuLabel';
