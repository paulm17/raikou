import React, { forwardRef } from 'react';
import cx from 'clsx';
import { EmotionSx, emotionTransform } from '@raikou/emotion';
import { createPolymorphicComponent } from '../factory';
import { InlineStyles } from '../InlineStyles';
import { RaikouBreakpoint, useRaikouTheme } from '../RaikouProvider';
import { isNumberLike } from '../utils';
import type { CssVarsProp, RaikouStyleProp } from './Box.types';
import { getBoxMod } from './get-box-mod/get-box-mod';
import { getBoxStyle } from './get-box-style/get-box-style';
import {
  extractStyleProps,
  parseStyleProps,
  RaikouStyleProps,
  STYlE_PROPS_DATA,
} from './style-props';
import { useRandomClassName } from './use-random-classname/use-random-classname';

export type Mod = Record<string, any> | string;
export type BoxMod = Mod | Mod[] | BoxMod[];

export interface BoxProps extends RaikouStyleProps {
  /** Class added to root element, if applicable */
  className?: string;

  /** Inline style added to root component element, can subscribe to theme defined on RaikouProvider */
  style?: RaikouStyleProp;

  /** CSS variables defined on root component element */
  __vars?: CssVarsProp;

  /** `size` property passed down the HTML element */
  __size?: string;

  /** Breakpoint above which the component is hidden with `display: none` */
  hiddenFrom?: RaikouBreakpoint;

  /** Breakpoint below which the component is hidden with `display: none` */
  visibleFrom?: RaikouBreakpoint;

  /** Determines whether component should be hidden in light color scheme with `display: none` */
  lightHidden?: boolean;

  /** Determines whether component should be hidden in dark color scheme with `display: none` */
  darkHidden?: boolean;

  /** Element modifiers transformed into `data-` attributes, for example, `{ 'data-size': 'xl' }`, falsy values are removed */
  mod?: BoxMod;

  /** Emotion styles for stx, styles prop */
  stx?: EmotionSx;
}

export type ElementProps<
  ElementType extends React.ElementType,
  PropsToOmit extends string = never,
> = Omit<React.ComponentPropsWithoutRef<ElementType>, 'style' | PropsToOmit>;

export interface BoxComponentProps extends BoxProps {
  /** Variant passed from parent component, sets `data-variant` */
  variant?: string;

  /** Size passed from parent component, sets `data-size` if value is not number like */
  size?: string | number;
}

const _Box = forwardRef<
  HTMLDivElement,
  BoxComponentProps & { component: any; className: string; renderRoot: any }
>(
  (
    {
      component,
      style,
      __vars,
      className,
      variant,
      mod,
      size,
      hiddenFrom,
      visibleFrom,
      lightHidden,
      darkHidden,
      renderRoot,
      __size,
      ...others
    },
    ref
  ) => {
    const theme = useRaikouTheme();
    const Element = component || 'div';

    const { styleProps, rest } = extractStyleProps(others);
    const stylesTransform = emotionTransform.stx !== undefined ? emotionTransform.stx() : undefined;
    const transformedSx = stylesTransform?.(styleProps.stx);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA,
    });

    const props = {
      ref,
      style: getBoxStyle({
        theme,
        style,
        vars: __vars,
        styleProps: parsedStyleProps.inlineStyles,
      }),
      className: cx(className, transformedSx, {
        [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
        'raikou-light-hidden': lightHidden,
        'raikou-dark-hidden': darkHidden,
        [`raikou-hidden-from-${hiddenFrom}`]: hiddenFrom,
        [`raikou-visible-from-${visibleFrom}`]: visibleFrom,
      }),
      'data-variant': variant,
      'data-size': isNumberLike(size) ? undefined : size || undefined,
      size: __size,
      ...getBoxMod(mod),
      ...rest,
    };

    return (
      <>
        {parsedStyleProps.hasResponsiveStyles && (
          <InlineStyles
            selector={`.${responsiveClassName}`}
            styles={parsedStyleProps.styles}
            media={parsedStyleProps.media}
          />
        )}
        {typeof renderRoot === 'function' ? renderRoot(props) : <Element {...props} />}
      </>
    );
  }
);

_Box.displayName = '@raikou/core/Box';

export const Box = createPolymorphicComponent<'div', BoxComponentProps>(_Box);
