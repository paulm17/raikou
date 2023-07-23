import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  RaikouSize,
  getFontSize,
  rem,
  createVarsResolver,
  Factory,
} from "@raikou/core";
import { useInputWrapperContext } from "../InputWrapper.context";

export type InputErrorStylesNames = "error";
export type InputErrorCssVariables = {
  error: "--input-error-size";
};

export interface InputErrorProps
  extends BoxProps,
    StylesApiProps<InputErrorFactory>,
    ElementProps<"div"> {
  __staticSelector?: string;

  /** Controls error `font-size`, `'sm'` by default */
  size?: RaikouSize | (string & {});
}

export type InputErrorFactory = Factory<{
  props: InputErrorProps;
  ref: HTMLParagraphElement;
  stylesNames: InputErrorStylesNames;
  vars: InputErrorCssVariables;
}>;

const defaultProps: Partial<InputErrorProps> = {
  size: "sm",
};

const varsResolver = createVarsResolver<InputErrorFactory>((_, { size }) => ({
  error: {
    "--input-error-size": `calc(${getFontSize(size)} - ${rem(2)})`,
  },
}));

export const InputError = factory<InputErrorFactory>((_props, ref) => {
  const props = useProps("InputError", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    variant,
    ...others
  } = props;

  const _getStyles = useStyles<InputErrorFactory>({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: {
      error: "inputWrapper-error",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver,
  });

  const ctx = useInputWrapperContext();
  const getStyles = ctx?.getStyles || _getStyles;

  return (
    <Box
      component="p"
      ref={ref}
      variant={variant}
      size={size}
      {...getStyles("error")}
      {...others}
    />
  );
});

// InputError.classes = classes;
InputError.displayName = "@raikou/core/InputError";
