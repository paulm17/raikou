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
  StylesApiProps,
  useProps,
  useStyles,
} from '@raikou/core';
import {
  LoaderHorizontalBar1Style,
  LoaderHorizontalBar2Style,
  LoaderHorizontalBarRootStyle,
} from './HorizontalBar.css';

export type HorizontalBarStylesNames = 'root';
export type HorizontalBarCssVariables = {
  root:
    | '--horizontal-bar-color'
    | '--horizontal-bar-width'
    | '--horizontal-bar-height'
    | '--horizontal-bar-indicator-color'
    | '--horizontal-bar-speed-multiplier';
};

export interface HorizontalBarProps
  extends BoxProps,
    StylesApiProps<HorizontalBarFactory>,
    ElementProps<'span'> {
  /** Skeleton `height`, numbers are converted to rem */
  height?: React.CSSProperties['height'];

  /** Skeleton `width`, numbers are converted to rem */
  width?: React.CSSProperties['width'];

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  indicatorColor?: RaikouColor;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type HorizontalBarFactory = Factory<{
  props: HorizontalBarProps;
  ref: HTMLDivElement;
  stylesNames: HorizontalBarStylesNames;
  vars: HorizontalBarCssVariables;
}>;

const defaultProps: Partial<HorizontalBarProps> = {
  height: 4,
  width: 200,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<HorizontalBarFactory>(
  // @ts-ignore
  (theme, { color, indicatorColor, width, height, speedMultiplier }) => ({
    root: {
      '--horizontal-bar-color': color ? getThemeColor(color, theme) : undefined,
      '--horizontal-bar-width': getSize(width, 'horizontal-bar-width') ?? undefined,
      '--horizontal-bar-height': getSize(height, 'horizontal-bar-height') ?? undefined,
      '--horizontal-bar-indicator-color': indicatorColor ?? undefined,
      '--horizontal-bar-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const HorizontalBar = factory<HorizontalBarFactory>((_props, ref) => {
  const props = useProps('HorizontalBar', defaultProps, _props);
  const {
    color,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    children,
    indicatorColor,
    speedMultiplier,
    width,
    height,
    ...others
  } = props;

  const getStyles = useStyles<HorizontalBarFactory>({
    name: 'HorizontalBar',
    props,
    classes: {
      root: LoaderHorizontalBarRootStyle,
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
      <span className={LoaderHorizontalBar1Style} />
      <span className={LoaderHorizontalBar2Style} />
    </Box>
  );
});

HorizontalBar.displayName = '@raikou/core/HorizontalBar';
