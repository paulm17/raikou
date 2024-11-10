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
import { LoaderBallRootStyle, LoaderBallStyle } from './Ball.css';

export type BallStylesNames = 'root';
export type BallCssVariables = {
  root: '--ball-color' | '--ball-size' | '--ball-speed-multiplier';
};

export interface BallProps extends BoxProps, StylesApiProps<BallFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type BallFactory = Factory<{
  props: BallProps;
  ref: HTMLDivElement;
  stylesNames: BallStylesNames;
  vars: BallCssVariables;
}>;

const defaultProps: Partial<BallProps> = {
  size: 40,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<BallFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--ball-color': color ? getThemeColor(color, theme) : undefined,
      '--ball-size': getSize(size, 'ball-size') ?? undefined,
      '--ball-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Ball = factory<BallFactory>((_props, ref) => {
  const props = useProps('Ball', defaultProps, _props);
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

  const getStyles = useStyles<BallFactory>({
    name: 'Ball',
    props,
    classes: {
      root: LoaderBallRootStyle,
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
      <span className={LoaderBallStyle} />
    </Box>
  );
});

Ball.displayName = '@raikou/core/Ball';
