import React from "react";
import {
  factory,
  Box,
  BoxProps,
  StylesApiProps,
  useProps,
  useStyles,
  rem,
  createVarsResolver,
  Factory,
} from "@raikou/core";

export type ActionIconGroupStylesNames = "group";
export type ActionIconGroupCssVariables = {
  group: "--ai-border-width";
};

export interface ActionIconGroupProps
  extends BoxProps,
    StylesApiProps<ActionIconGroupFactory> {
  /** `ActionIcon` components only */
  children?: React.ReactNode;

  /** Controls group orientation, `'horizontal'` by default */
  orientation?: "horizontal" | "vertical";

  /** `border-width` of the child `ActionIcon` components. Default value in `1` */
  borderWidth?: number | string;
}

export type ActionIconGroupFactory = Factory<{
  props: ActionIconGroupProps;
  ref: HTMLDivElement;
  stylesNames: ActionIconGroupStylesNames;
  vars: ActionIconGroupCssVariables;
}>;

const defaultProps: Partial<ActionIconGroupProps> = {
  orientation: "horizontal",
  borderWidth: 1,
};

const varsResolver = createVarsResolver<ActionIconGroupFactory>(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": rem(borderWidth) },
  }),
);

export const ActionIconGroup = factory<ActionIconGroupFactory>(
  (_props, ref) => {
    const props = useProps("ActionIconGroup", defaultProps, _props);
    const {
      className,
      style,
      classNames,
      styles,
      unstyled,
      orientation,
      vars,
      borderWidth,
      variant,
      ...others
    } = useProps("ActionIconGroup", defaultProps, _props);

    const getStyles = useStyles<ActionIconGroupFactory>({
      name: "ActionIconGroup",
      props,
      classes: {
        group: "actionIconGroup-root",
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver,
      rootSelector: "group",
    });

    return (
      <Box
        {...getStyles("group")}
        ref={ref}
        variant={variant}
        mod={{ "data-orientation": orientation }}
        role="group"
        {...others}
      />
    );
  },
);

// ActionIconGroup.classes = classes;
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";
