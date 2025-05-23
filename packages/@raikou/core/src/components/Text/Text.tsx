import {
  Box,
  BoxProps,
  createVarsResolver,
  getFontSize,
  getGradient,
  getLineHeight,
  getThemeColor,
  polymorphicFactory,
  PolymorphicFactory,
  RaikouColor,
  RaikouGradient,
  RaikouSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { TextRootStyle } from './Text.css';

type TextTruncate = 'end' | 'start' | boolean;

function getTextTruncate(truncate: TextTruncate | undefined) {
  if (truncate === 'start') {
    return 'start';
  }

  if (truncate === 'end' || truncate) {
    return 'end';
  }

  return undefined;
}

export type TextStylesNames = 'root';
export type TextVariant = 'text' | 'gradient';
export type TextCssVariables = {
  root: '--text-gradient' | '--text-line-clamp' | '--text-fz' | '--text-lh';
};

export interface TextProps extends BoxProps, StylesApiProps<TextFactory> {
  __staticSelector?: string;

  /** Controls `font-size` and `line-height`, `'md'` by default */
  size?: RaikouSize | (string & {});

  /** Number of lines after which Text will be truncated */
  lineClamp?: number;

  /** Side on which Text must be truncated, if `true`, text is truncated from the start */
  truncate?: TextTruncate;

  /** Sets `line-height` to 1 for centering, `false` by default */
  inline?: boolean;

  /** Determines whether font properties should be inherited from the parent, `false` by default */
  inherit?: boolean;

  /** Gradient configuration, ignored when `variant` is not `gradient`, `theme.defaultGradient` by default */
  gradient?: RaikouGradient;

  /** Shorthand for `component="span"`, `false` by default, default root element is `p` */
  span?: boolean;

  /** @deprecated Use `c` prop instead */
  color?: RaikouColor;
}

export type TextFactory = PolymorphicFactory<{
  props: TextProps;
  defaultComponent: 'p';
  defaultRef: HTMLParagraphElement;
  stylesNames: TextStylesNames;
  vars: TextCssVariables;
  variant: TextVariant;
}>;

const defaultProps: Partial<TextProps> = {
  inherit: false,
};

const varsResolver = createVarsResolver<TextFactory>(
  (theme, { variant, lineClamp, gradient, size, color }) => ({
    root: {
      '--text-fz': getFontSize(size),
      '--text-lh': getLineHeight(size),
      '--text-gradient': variant === 'gradient' ? getGradient(gradient, theme) : undefined,
      '--text-line-clamp': typeof lineClamp === 'number' ? lineClamp.toString() : undefined,
      '--text-color': color ? getThemeColor(color, theme) : undefined,
    },
  })
);

export const Text = polymorphicFactory<TextFactory>((_props, ref) => {
  const props = useProps('Text', defaultProps, _props);
  const {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size,
    ...others
  } = props;

  const getStyles = useStyles<TextFactory>({
    name: ['Text', __staticSelector],
    props,
    classes: {
      root: TextRootStyle,
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
    <Box
      {...getStyles('root', { focusable: true })}
      ref={ref}
      component={span ? 'span' : 'p'}
      variant={variant}
      mod={[
        {
          'data-truncate': getTextTruncate(truncate),
          'data-line-clamp': typeof lineClamp === 'number',
          'data-inline': inline,
          'data-inherit': inherit,
        },
        mod,
      ]}
      size={size}
      {...others}
    />
  );
});

Text.displayName = '@raikou/core/Text';
