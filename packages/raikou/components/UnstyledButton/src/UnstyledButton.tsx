import React from "react";
import {
  Box,
  useProps,
  StylesApiProps,
  useStyles,
  polymorphicFactory,
  BoxComponentProps,
  PolymorphicFactory,
} from "@raikou/core";
import classes from "./UnstyledButton.module.css";

export type UnstyledButtonStylesNames = "root";

export interface UnstyledButtonProps
  extends Omit<BoxComponentProps, "vars" | "variant">,
    StylesApiProps<UnstyledButtonFactory> {
  __staticSelector?: string;
}

const defaultProps: Partial<UnstyledButtonProps> = {
  __staticSelector: "UnstyledButton",
};

export type UnstyledButtonFactory = PolymorphicFactory<{
  props: UnstyledButtonProps;
  stylesNames: UnstyledButtonStylesNames;
  defaultComponent: "button";
  defaultRef: HTMLButtonElement;
}>;

export const UnstyledButton = polymorphicFactory<UnstyledButtonFactory>(
  (_props: UnstyledButtonProps & { component?: any }, ref) => {
    const props = useProps("UnstyledButton", defaultProps, _props);
    const {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style,
      ...others
    } = props;

    const getStyles = useStyles<UnstyledButtonFactory>({
      name: __staticSelector!,
      props,
      classes,
      className,
      style,
      classNames,
      styles,
      unstyled,
    });

    return (
      <Box
        {...getStyles("root", { focusable: true })}
        component={component}
        ref={ref}
        type={component === "button" ? "button" : undefined}
        {...others}
      />
    );
  },
);

UnstyledButton.displayName = "@raikou/core/UnstyledButton";
UnstyledButton.classes = classes;
