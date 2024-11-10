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
import { LoaderRotate1Style, LoaderRotate2Style, LoaderRotateRootStyle } from './Rotate.css';

export type RotateStylesNames = 'root';
export type RotateCssVariables = {
  root: '--rotate-color' | '--rotate-size' | '--rotate-margin' | '--rotate-speed-multiplier';
};

export interface RotateProps extends BoxProps, StylesApiProps<RotateFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Margin between the loader and the indicator, numbers are converted to rem */
  margin?: React.CSSProperties['margin'];

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type RotateFactory = Factory<{
  props: RotateProps;
  ref: HTMLDivElement;
  stylesNames: RotateStylesNames;
  vars: RotateCssVariables;
}>;

const defaultProps: Partial<RotateProps> = {
  size: 15,
  margin: 2,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<RotateFactory>(
  // @ts-ignore
  (theme, { color, size, margin, speedMultiplier }) => ({
    root: {
      '--rotate-color': color ? getThemeColor(color, theme) : undefined,
      '--rotate-size': getSize(size, 'rotate-size') ?? undefined,
      '--rotate-margin': getSize(margin, 'rotate-margin') ?? undefined,
      '--rotate-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Rotate = factory<RotateFactory>((_props, ref) => {
  const props = useProps('Rotate', defaultProps, _props);
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

  const getStyles = useStyles<RotateFactory>({
    name: 'Rotate',
    props,
    classes: {
      root: LoaderRotateRootStyle,
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
      <span className={LoaderRotate1Style} />
      <span className={LoaderRotate2Style} />
    </Box>
  );
});

Rotate.displayName = '@raikou/core/Rotate';
