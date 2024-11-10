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
import { LoaderSkewRootStyle } from './Skew.css';

export type SkewStylesNames = 'root';
export type SkewCssVariables = {
  root: '--skew-color' | '--skew-size' | '--skew-speed-multiplier';
};

export interface SkewProps extends BoxProps, StylesApiProps<SkewFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SkewFactory = Factory<{
  props: SkewProps;
  ref: HTMLDivElement;
  stylesNames: SkewStylesNames;
  vars: SkewCssVariables;
}>;

const defaultProps: Partial<SkewProps> = {
  size: 20,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<SkewFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--skew-color': color ? getThemeColor(color, theme) : undefined,
      '--skew-size': getSize(size, 'skew-size') ?? undefined,
      '--skew-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Skew = factory<SkewFactory>((_props, ref) => {
  const props = useProps('Skew', defaultProps, _props);
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

  const getStyles = useStyles<SkewFactory>({
    name: 'Skew',
    props,
    classes: {
      root: LoaderSkewRootStyle,
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

Skew.displayName = '@raikou/core/Skew';
