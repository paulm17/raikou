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
import { LoaderClipRootStyle } from './Clip.css';

export type ClipStylesNames = 'root';
export type ClipCssVariables = {
  root: '--clip-color' | '--clip-size' | '--clip-speed-multiplier';
};

export interface ClipProps extends BoxProps, StylesApiProps<ClipFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type ClipFactory = Factory<{
  props: ClipProps;
  ref: HTMLDivElement;
  stylesNames: ClipStylesNames;
  vars: ClipCssVariables;
}>;

const defaultProps: Partial<ClipProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<ClipFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--clip-color': color ? getThemeColor(color, theme) : undefined,
      '--clip-size': getSize(size, 'clip-size') ?? undefined,
      '--clip-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Clip = factory<ClipFactory>((_props, ref) => {
  const props = useProps('Clip', defaultProps, _props);
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

  const getStyles = useStyles<ClipFactory>({
    name: 'Clip',
    props,
    classes: {
      root: LoaderClipRootStyle,
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

Clip.displayName = '@raikou/core/Clip';
