import { Children, cloneElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getRadius,
  getThemeColor,
  RaikouColor,
  RaikouRadius,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { TimelineProvider } from './Timeline.context';
import { TimelineItem, TimelineItemStylesNames } from './TimelineItem/TimelineItem';
import { TimelineItemBodyStyle, TimelineItemBulletStyle, TimelineItemStyle, TimelineItemTitleStyle, TimelineRootStyle } from './Timeline.css';

export type TimelineStylesNames = 'root' | TimelineItemStylesNames;
export type TimelineCssVariables = {
  root: '--tl-line-width' | '--tl-bullet-size' | '--tl-color' | '--tl-icon-color' | '--tl-radius';
};

export interface TimelineProps
  extends BoxProps,
    StylesApiProps<TimelineFactory>,
    ElementProps<'div'> {
  /** `Timeline.Item` components */
  children?: React.ReactNode;

  /** Index of active element */
  active?: number;

  /** Key of `theme.colors` or any valid CSS color to control active item colors, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
  radius?: RaikouRadius;

  /** Controls size of the bullet, `20` by default */
  bulletSize?: number | string;

  /** Controls how the content is positioned relative to the bullet, `'left'` by default */
  align?: 'right' | 'left';

  /** Control width of the line */
  lineWidth?: number | string;

  /** Determines whether the active items direction should be reversed without reversing items order, `false` by default */
  reverseActive?: boolean;

  /** Determines whether icon color should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

export type TimelineFactory = Factory<{
  props: TimelineProps;
  ref: HTMLDivElement;
  stylesNames: TimelineStylesNames;
  vars: TimelineCssVariables;
  staticComponents: {
    Item: typeof TimelineItem;
  };
}>;

const defaultProps: Partial<TimelineProps> = {
  active: -1,
  align: 'left',
  reverseActive: false,
};

const varsResolver = createVarsResolver<TimelineFactory>(
  (theme, { bulletSize, lineWidth, radius, color, autoContrast }) => ({
    root: {
      '--tl-bullet-size': rem(bulletSize),
      '--tl-line-width': rem(lineWidth),
      '--tl-radius': radius === undefined ? undefined : getRadius(radius),
      '--tl-color': color ? getThemeColor(color, theme) : undefined,
      '--tl-icon-color': getAutoContrastValue(autoContrast, theme)
        ? getContrastColor({ color, theme, autoContrast })
        : undefined,
    },
  })
);

export const Timeline = factory<TimelineFactory>((_props, ref) => {
  const props = useProps('Timeline', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    active,
    color,
    radius,
    bulletSize,
    align,
    lineWidth,
    reverseActive,
    mod,
    autoContrast,
    ...others
  } = props;

  const getStyles = useStyles<TimelineFactory>({
    name: 'Timeline',
    classes: {
      root: TimelineRootStyle,
      item: TimelineItemStyle,
      itemTitle: TimelineItemTitleStyle,
      itemBody: TimelineItemBodyStyle,
      itemBullet: TimelineItemBulletStyle,
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

  const _children = Children.toArray(children);
  const items = _children.map((item: any, index) =>
    cloneElement(item, {
      unstyled,
      __align: align,
      __active:
        item.props?.active ||
        (reverseActive ? active! >= _children.length - index - 1 : active! >= index),
      __lineActive:
        item.props?.lineActive ||
        (reverseActive ? active! >= _children.length - index - 1 : active! - 1 >= index),
    })
  );

  return (
    <TimelineProvider value={{ getStyles }}>
      <Box {...getStyles('root')} mod={[{ align }, mod]} ref={ref} {...others}>
        {items}
      </Box>
    </TimelineProvider>
  );
});

Timeline.displayName = '@raikou/core/Timeline';
Timeline.Item = TimelineItem;
