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
  RaikouRadius,
  RaikouSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@raikou/core';
import {
  LoaderScale1Style,
  LoaderScale2Style,
  LoaderScale3Style,
  LoaderScale4Style,
  LoaderScale5Style,
  LoaderScaleRootStyle,
} from './Scale.css';

export type ScaleStylesNames = 'root';
export type ScaleCssVariables = {
  root:
    | '--scale-color'
    | '--scale-size'
    | '--scale-radius'
    | '--scale-margin'
    | '--scale-speed-multiplier';
};

export interface ScaleProps extends BoxProps, StylesApiProps<ScaleFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: RaikouRadius;

  /** Margin between the loader and the indicator, numbers are converted to rem */
  margin?: React.CSSProperties['margin'];

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type ScaleFactory = Factory<{
  props: ScaleProps;
  ref: HTMLDivElement;
  stylesNames: ScaleStylesNames;
  vars: ScaleCssVariables;
}>;

const defaultProps: Partial<ScaleProps> = {
  size: 15,
  margin: 2,
  radius: 2,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<ScaleFactory>(
  // @ts-ignore
  (theme, { color, size, margin, speedMultiplier }) => ({
    root: {
      '--scale-color': color ? getThemeColor(color, theme) : undefined,
      '--scale-size': getSize(size, 'scale-size') ?? undefined,
      '--scale-radius': getSize(margin, 'scale-radius') ?? undefined,
      '--scale-margin': getSize(margin, 'scale-margin') ?? undefined,
      '--scale-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Scale = factory<ScaleFactory>((_props, ref) => {
  const props = useProps('Scale', defaultProps, _props);
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

  const getStyles = useStyles<ScaleFactory>({
    name: 'Scale',
    props,
    classes: {
      root: LoaderScaleRootStyle,
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
      <span className={LoaderScale1Style} />
      <span className={LoaderScale2Style} />
      <span className={LoaderScale3Style} />
      <span className={LoaderScale4Style} />
      <span className={LoaderScale5Style} />
    </Box>
  );
});

Scale.displayName = '@raikou/core/Scale';
