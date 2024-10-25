import {
  Box,
  BoxProps,
  ElementProps,
  filterProps,
  InlineStyles,
  RaikouSize,
  parseStyleProps,
  polymorphicFactory,
  PolymorphicFactory,
  StyleProp,
  StylesApiProps,
  useRaikouTheme,
  useProps,
  useRandomClassName,
  useStyles,
} from '../../core';
import { FLEX_STYLE_PROPS_DATA } from './flex-props';
import { FlexRootStyle } from './Flex.css';

export type FlexStylesNames = 'root';

export interface FlexProps extends BoxProps, StylesApiProps<FlexFactory>, ElementProps<'div'> {
  /** `gap` CSS property */
  gap?: StyleProp<RaikouSize | (string & {}) | number>;

  /** `row-gap` CSS property */
  rowGap?: StyleProp<RaikouSize | (string & {}) | number>;

  /** `column-gap` CSS property */
  columnGap?: StyleProp<RaikouSize | (string & {}) | number>;

  /** `align-items` CSS property */
  align?: StyleProp<React.CSSProperties['alignItems']>;

  /** `justify-content` CSS property */
  justify?: StyleProp<React.CSSProperties['justifyContent']>;

  /** `flex-wrap` CSS property */
  wrap?: StyleProp<React.CSSProperties['flexWrap']>;

  /** `flex-direction` CSS property */
  direction?: StyleProp<React.CSSProperties['flexDirection']>;
}

export type FlexFactory = PolymorphicFactory<{
  props: FlexProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: FlexStylesNames;
}>;

const defaultProps: Partial<FlexProps> = {};

export const Flex = polymorphicFactory<FlexFactory>((_props, ref) => {
  const props = useProps('Flex', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction,
    ...others
  } = props;

  const getStyles = useStyles<FlexFactory>({
    name: 'Flex',
    classes: {
      root: FlexRootStyle,
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const theme = useRaikouTheme();
  const responsiveClassName = useRandomClassName();  
  const parsedStyleProps = parseStyleProps({
    // @ts-ignore
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA,
  });

  return (
    <>
      {parsedStyleProps.hasResponsiveStyles && (
        <InlineStyles
          selector={`.${responsiveClassName}`}
          styles={parsedStyleProps.styles}
          media={parsedStyleProps.media}
        />
      )}
      <Box
        ref={ref}
        {...getStyles('root', {
          className: responsiveClassName,
          style: filterProps(parsedStyleProps.inlineStyles),
        })}
        {...others}
      />
    </>
  );
});

Flex.displayName = '@raikou/core/Flex';
