import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  PolymorphicFactory,
} from "@raikou/core";
import { useStore } from "../store";

export type CardSectionStylesNames = "section";

export interface CardSectionProps
  extends BoxProps,
    StylesApiProps<CardSectionFactory> {
  /** Determines whether the section should have a border, `false` by default */
  withBorder?: boolean;

  /** Determines whether the section should inherit padding from the parent `Card`, `false` by default */
  inheritPadding?: boolean;
}

export type CardSectionFactory = PolymorphicFactory<{
  props: CardSectionProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: CardSectionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<CardSectionProps> = {};

export const CardSection = polymorphicFactory<CardSectionFactory>(
  (_props, ref) => {
    const props = useProps("CardSection", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      withBorder,
      inheritPadding,
      ...others
    } = props;
    const ctx = useStore.getState();

    return (
      <Box
        ref={ref}
        mod={{ "with-border": withBorder, "inherit-padding": inheritPadding }}
        {...ctx.getStyles("section", { className, style, styles, classNames })}
        {...others}
      />
    );
  },
);

CardSection.displayName = "@raikou/core/CardSection";
