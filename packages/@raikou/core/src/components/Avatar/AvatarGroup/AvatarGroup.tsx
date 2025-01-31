import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  RaikouSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { AvatarGroupProvider } from './AvatarGroup.context';
import { AvatarGroupStyle } from '../Avatar.css';

export type AvatarGroupStylesNames = 'group';
export type AvatarGroupCssVariables = {
  group: '--ag-spacing';
};

export interface AvatarGroupProps
  extends BoxProps,
    StylesApiProps<AvatarGroupFactory>,
    ElementProps<'div'> {
  /** Negative space between Avatar components, `'sm'` by default */
  spacing?: RaikouSpacing;
}

export type AvatarGroupFactory = Factory<{
  props: AvatarGroupProps;
  ref: HTMLDivElement;
  stylesNames: AvatarGroupStylesNames;
  vars: AvatarGroupCssVariables;
}>;

const defaultProps: Partial<AvatarGroupProps> = {};

const varsResolver = createVarsResolver<AvatarGroupFactory>((_, { spacing }) => ({
  group: {
    '--ag-spacing': getSpacing(spacing),
  },
}));

export const AvatarGroup = factory<AvatarGroupFactory>((_props, ref) => {
  const props = useProps('AvatarGroup', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, spacing, ...others } = props;

  const getStyles = useStyles<AvatarGroupFactory>({
    name: 'AvatarGroup',
    classes: {
      group: AvatarGroupStyle,
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'group',
  });

  return (
    <AvatarGroupProvider value>
      <Box ref={ref} {...getStyles('group')} {...others} />
    </AvatarGroupProvider>
  );
});

AvatarGroup.displayName = '@raikou/core/AvatarGroup';
