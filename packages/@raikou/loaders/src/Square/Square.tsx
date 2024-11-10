import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getThemeColor,
  RaikouColor,
  RaikouSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@raikou/core';
import { LoaderSquareRootStyle } from './Square.css';

export type SquareStylesNames = 'root';
export type SquareCssVariables = {
  root: '--square-color' | '--square-size' | '--square-speed-multiplier';
};

export interface SquareProps extends BoxProps, StylesApiProps<SquareFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SquareFactory = Factory<{
  props: SquareProps;
  ref: HTMLDivElement;
  stylesNames: SquareStylesNames;
  vars: SquareCssVariables;
}>;

const defaultProps: Partial<SquareProps> = {
  size: 50,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<SquareFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--square-color': color ? getThemeColor(color, theme) : undefined,
      '--square-size': getSize(size, 'square-size') ?? undefined,
      '--square-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Square = factory<SquareFactory>((_props, ref) => {
  const props = useProps('Square', defaultProps, _props);
  const {
    color,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    size,
    variant,
    children,
    speedMultiplier,
    ...others
  } = props;

  const getStyles = useStyles<SquareFactory>({
    name: 'Square',
    props,
    classes: {
      root: LoaderSquareRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box {...getStyles('root')} ref={ref} {...others} />;
});

Square.displayName = '@raikou/core/Square';
