import React from "react";
import cx from "clsx";
import { polymorphicFactory, useProps, PolymorphicFactory } from "@raikou/core";
import {
  Text,
  TextProps,
  TextCssVariables,
  TextStylesNames,
  TextVariant,
} from "../../Text/src";

export type AnchorStylesNames = TextStylesNames;
export type AnchorVariant = TextVariant;
export type AnchorCssVariables = TextCssVariables;

export interface AnchorProps extends Omit<TextProps, "span"> {
  /** Determines in which cases link should have `text-decoration: underline` styles, `hover` by default */
  underline?: "always" | "hover" | "never";
}

export type AnchorFactory = PolymorphicFactory<{
  props: AnchorProps;
  defaultComponent: "a";
  defaultRef: HTMLAnchorElement;
  stylesNames: AnchorStylesNames;
  vars: AnchorCssVariables;
  variant: AnchorVariant;
}>;

const defaultProps: Partial<AnchorProps> = {
  underline: "hover",
};

export const Anchor = polymorphicFactory<AnchorFactory>((props, ref) => {
  const { underline, className, ...others } = useProps(
    "Anchor",
    defaultProps,
    props
  );
  return (
    <Text
      component="a"
      ref={ref}
      className={cx("anchor-root", className)}
      {...others}
      mod={{ underline }}
      __staticSelector="Anchor"
    />
  );
});

// Anchor.classes = classes;
Anchor.displayName = "@raikou/core/Anchor";
