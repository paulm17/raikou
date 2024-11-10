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
import { LoaderJellyfishRingStyle, LoaderJellyfishRootStyle } from './Jellyfish.css';

export type JellyfishStylesNames = 'root';
export type JellyfishCssVariables = {
  root: '--jellyfish-color' | '--jellyfish-size';
};

export interface JellyfishProps
  extends BoxProps,
    StylesApiProps<JellyfishFactory>,
    ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type JellyfishFactory = Factory<{
  props: JellyfishProps;
  ref: HTMLDivElement;
  stylesNames: JellyfishStylesNames;
  vars: JellyfishCssVariables;
}>;

const defaultProps: Partial<JellyfishProps> = {
  size: 60,
};

const varsResolver = createVarsResolver<JellyfishFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      '--jellyfish-color': color ? getThemeColor(color, theme) : undefined,
      '--jellyfish-size': getSize(size, 'jellyfish-size') ?? undefined,
    },
  })
);

export const Jellyfish = factory<JellyfishFactory>((_props, ref) => {
  const props = useProps('Jellyfish', defaultProps, _props);
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

  const getStyles = useStyles<JellyfishFactory>({
    name: 'Jellyfish',
    props,
    classes: {
      root: LoaderJellyfishRootStyle,
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
      {[...Array(6)].map((_, i) => {
        return (
          <span
            key={i}
            className={LoaderJellyfishRingStyle}
            style={{
              width: `calc(${i} * (var(--jellyfish-size) / 6))`,
              height: `calc(${i} * (var(--jellyfish-size) / 6) / 2)`,
              animationDelay: `${i * 100}ms`,
            }}
          />
        );
      })}
    </Box>
  );
});

Jellyfish.displayName = '@raikou/core/Jellyfish';
