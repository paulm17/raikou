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
import { LoaderPulsarBallStyle, LoaderPulsarRootStyle } from './Pulsar.css';

export type PulsarStylesNames = 'root';
export type PulsarCssVariables = {
  root: '--pulsar-color' | '--pulsar-size';
};

export interface PulsarProps extends BoxProps, StylesApiProps<PulsarFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type PulsarFactory = Factory<{
  props: PulsarProps;
  ref: HTMLDivElement;
  stylesNames: PulsarStylesNames;
  vars: PulsarCssVariables;
}>;

const defaultProps: Partial<PulsarProps> = {
  size: 70,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === 'string') {
    const sizes: Record<RaikouSize, number> = {
      xs: 35,
      sm: 42,
      md: 70,
      lg: 85,
      xl: 112,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<PulsarFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      '--pulsar-color': color ? getThemeColor(color, theme) : undefined,
      '--pulsar-size': getSize(size, 'pulsar-size') ?? undefined,
    },
  })
);

export const Pulsar = factory<PulsarFactory>((_props, ref) => {
  const props = useProps('Pulsar', defaultProps, _props);
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
    ...others
  } = props;

  const getStyles = useStyles<PulsarFactory>({
    name: 'Pulsar',
    props,
    classes: {
      root: LoaderPulsarRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const newSize = getNewSize(size) as number;

  return (
    <Box {...getStyles('root')} ref={ref} {...others}>
      {/* @ts-ignore */}
      {[...Array(Math.round(newSize / 5))].map((_, i) => {
        return (
          <span
            key={i}
            className={LoaderPulsarBallStyle}
            style={{
              animationTimingFunction: `cubic-bezier(0.5, ${i * 0.3}, 0.9, 0.9)`,
            }}
          />
        );
      })}
    </Box>
  );
});

Pulsar.displayName = '@raikou/core/Pulsar';
