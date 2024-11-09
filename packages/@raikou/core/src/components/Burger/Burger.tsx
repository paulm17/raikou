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
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import { BurgerBurgerStyle, BurgerRootStyle } from './Burger.css';

export type BurgerStylesNames = 'root' | 'burger';
export type BurgerCssVariables = {
  root:
    | '--burger-color'
    | '--burger-size'
    | '--burger-line-size'
    | '--burger-transition-duration'
    | '--burger-transition-timing-function';
};

export interface BurgerProps
  extends BoxProps,
    StylesApiProps<BurgerFactory>,
    ElementProps<'button'> {
  /** Controls burger `width` and `height`, numbers are converted to rem, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;

  /** Controls height of lines, by default calculated based on `size` prop */
  lineSize?: string | number;

  /** Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light */
  color?: RaikouColor;

  /** State of the burger, when `true` burger is transformed into X, `false` by default */
  opened?: boolean;

  /** `transition-duration` property value in ms, `300` by default */
  transitionDuration?: number;

  /** `transition-timing-function` property value, `'ease'` by default  */
  transitionTimingFunction?: string;
}

export type BurgerFactory = Factory<{
  props: BurgerProps;
  ref: HTMLButtonElement;
  stylesNames: BurgerStylesNames;
  vars: BurgerCssVariables;
}>;

const defaultProps: Partial<BurgerProps> = {};

const varsResolver = createVarsResolver<BurgerFactory>(
  (theme, { color, size, lineSize, transitionDuration, transitionTimingFunction }) => ({
    root: {
      '--burger-color': color ? getThemeColor(color, theme) : undefined,
      '--burger-size': getSize(size, 'burger-size'),
      '--burger-line-size': lineSize ? rem(lineSize) : undefined,
      '--burger-transition-duration':
        transitionDuration === undefined ? undefined : `${transitionDuration}ms`,
      '--burger-transition-timing-function': transitionTimingFunction,
    },
  })
);

export const Burger = factory<BurgerFactory>((_props, ref) => {
  const props = useProps('Burger', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    children,
    transitionDuration,
    transitionTimingFunction,
    lineSize,
    ...others
  } = props;

  const getStyles = useStyles<BurgerFactory>({
    name: 'Burger',
    classes: {
      root: BurgerRootStyle,
      burger: BurgerBurgerStyle,
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <UnstyledButton {...getStyles('root')} ref={ref} {...others}>
      <Box mod={['reduce-motion', { opened }]} {...getStyles('burger')} />
      {children}
    </UnstyledButton>
  );
});

Burger.displayName = '@raikou/core/Burger';
