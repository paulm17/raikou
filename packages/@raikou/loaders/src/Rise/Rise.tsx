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
import {
  LoaderRise1Style,
  LoaderRise2Style,
  LoaderRise3Style,
  LoaderRise4Style,
  LoaderRise5Style,
  LoaderRise6Style,
  LoaderRiseRootStyle,
} from './Rise.css';

export type RiseStylesNames = 'root';
export type RiseCssVariables = {
  root: '--rise-color' | '--rise-size' | '--rise-margin' | '--rise-speed-multiplier';
};

export interface RiseProps extends BoxProps, StylesApiProps<RiseFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Skeleton `width`, numbers are converted to rem */
  margin?: React.CSSProperties['margin'];

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type RiseFactory = Factory<{
  props: RiseProps;
  ref: HTMLDivElement;
  stylesNames: RiseStylesNames;
  vars: RiseCssVariables;
}>;

const defaultProps: Partial<RiseProps> = {
  size: 15,
  margin: 2,
  speedMultiplier: 1,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === 'string') {
    const sizes: Record<RaikouSize, number> = {
      xs: 8,
      sm: 9,
      md: 15,
      lg: 18,
      xl: 24,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<RiseFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--rise-color': color ? getThemeColor(color, theme) : undefined,
      '--rise-size': getSize(size, 'rise-size') ?? undefined,
      '--rise-margin': getSize(size, 'rise-margin') ?? undefined,
      '--rise-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Rise = factory<RiseFactory>((_props, ref) => {
  const props = useProps('Rise', defaultProps, _props);
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
    speedMultiplier,
    size,
    margin,
    ...others
  } = props;

  const getStyles = useStyles<RiseFactory>({
    name: 'Rise',
    props,
    classes: {
      root: LoaderRiseRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  // @ts-ignore
  const newSize = getNewSize(size) as number;

  const rawHTML = `
    <style scoped> 
      @keyframes rise-loader-odd {
        0% {transform: scale(0.4)}
        25% {transform: translateY(${newSize}px)}
        50% {transform: scale(1.1)}
        75% {transform: translateY(${-newSize}px)}
        100% {transform: translateY(0) scale(0.75)}
      }
      @keyframes rise-loader-even {
        0% {transform: scale(1.1)}
        25% {transform: translateY(-${newSize}px)}
        50% {transform: scale(0.4)}
        75% {transform: translateY(${newSize}px)}
        100% {transform: translateY(0) scale(1.0)}
      }
    </style>
  `;

  return (
    <Box {...getStyles('root')} ref={ref} {...others}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      <span className={LoaderRise1Style} />
      <span className={LoaderRise2Style} />
      <span className={LoaderRise3Style} />
      <span className={LoaderRise4Style} />
      <span className={LoaderRise5Style} />
      <span className={LoaderRise6Style} />
    </Box>
  );
});

Rise.displayName = '@raikou/core/Rise';
