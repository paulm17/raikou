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
import { LoaderMoonBallStyle, LoaderMoonCircleStyle, LoaderMoonRootStyle } from './Moon.css';

export type MoonStylesNames = 'root';
export type MoonCssVariables = {
  root: '--moon-color' | '--moon-size' | '--moon-speed-multiplier';
};

export interface MoonProps extends BoxProps, StylesApiProps<MoonFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type MoonFactory = Factory<{
  props: MoonProps;
  ref: HTMLDivElement;
  stylesNames: MoonStylesNames;
  vars: MoonCssVariables;
}>;

const defaultProps: Partial<MoonProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<MoonFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--moon-color': color ? getThemeColor(color, theme) : undefined,
      '--moon-size': getSize(size, 'moon-size') ?? undefined,
      '--moon-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Moon = factory<MoonFactory>((_props, ref) => {
  const props = useProps('Moon', defaultProps, _props);
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

  const getStyles = useStyles<MoonFactory>({
    name: 'Moon',
    props,
    classes: {
      root: LoaderMoonRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box {...getStyles('root')} ref={ref} {...others}>
      <span className={LoaderMoonBallStyle} />
      <span className={LoaderMoonCircleStyle} />
    </Box>
  );
});

Moon.displayName = '@raikou/core/Moon';
