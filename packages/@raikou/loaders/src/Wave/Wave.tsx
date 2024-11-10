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
import { LoaderWaveBarStyle, LoaderWaveRootStyle } from './Wave.css';

export type WaveStylesNames = 'root';
export type WaveCssVariables = {
  root: '--wave-color' | '--wave-size';
};

export interface WaveProps extends BoxProps, StylesApiProps<WaveFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type WaveFactory = Factory<{
  props: WaveProps;
  ref: HTMLDivElement;
  stylesNames: WaveStylesNames;
  vars: WaveCssVariables;
}>;

const defaultProps: Partial<WaveProps> = {
  size: 30,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === 'string') {
    const sizes: Record<RaikouSize, number> = {
      xs: 18,
      sm: 22,
      md: 36,
      lg: 44,
      xl: 58,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<WaveFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      '--wave-color': color ? getThemeColor(color, theme) : undefined,
      '--wave-size': getSize(size, 'wave-size') ?? undefined,
    },
  })
);

export const Wave = factory<WaveFactory>((_props, ref) => {
  const props = useProps('Wave', defaultProps, _props);
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

  const getStyles = useStyles<WaveFactory>({
    name: 'Wave',
    props,
    classes: {
      root: LoaderWaveRootStyle,
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
      {[...Array(10)].map((_, i) => {
        // @ts-ignore
        const x = i * (newSize / 5 + (newSize / 15 - newSize / 100));
        const y = 0;

        return (
          <span
            className={LoaderWaveBarStyle}
            key={i}
            style={{
              // @ts-ignore
              top: `${y + newSize / 10}px`,
              left: `${x}px`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        );
      })}
    </Box>
  );
});

Wave.displayName = '@raikou/core/Wave';
