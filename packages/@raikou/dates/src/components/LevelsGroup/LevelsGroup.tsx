import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  RaikouSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@raikou/core';
import { LevelsGroupStyle } from './LevelsGroup.css';

export type LevelsGroupStylesNames = 'levelsGroup';

export interface LevelsGroupProps
  extends BoxProps,
    StylesApiProps<LevelsGroupFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;
  size?: RaikouSize;
}

export type LevelsGroupFactory = Factory<{
  props: LevelsGroupProps;
  ref: HTMLDivElement;
  stylesNames: LevelsGroupStylesNames;
}>;

const defaultProps: Partial<LevelsGroupProps> = {};

export const LevelsGroup = factory<LevelsGroupFactory>((_props, ref) => {
  const props = useProps('LevelsGroup', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, __staticSelector, ...others } =
    props;

  const getStyles = useStyles<LevelsGroupFactory>({
    name: __staticSelector || 'LevelsGroup',
    classes: {
      levelsGroup: LevelsGroupStyle,
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: 'levelsGroup',
  });

  return <Box ref={ref} {...getStyles('levelsGroup')} {...others} />;
});

LevelsGroup.displayName = '@raikou/dates/LevelsGroup';
