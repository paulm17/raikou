import React from "react";
import { keys, px, em } from "../../utils";
import { RaikouTheme } from "../theme.types";

interface RaikouClassesProps {
  theme: RaikouTheme;
  nonce: any;
}

export function RaikouClasses({ theme, nonce }: RaikouClassesProps) {
  const classes = keys(theme.breakpoints).reduce<string>((acc, breakpoint) => {
    const pxValue = px(theme.breakpoints[breakpoint]) as number;

    return `${acc}@media (max-width: ${em(
      pxValue - 0.1,
    )}) {.raikou-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${em(
      pxValue,
    )}) {.raikou-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");

  return (
    <style
      data-raikou-styles="classes"
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: classes }}
    />
  );
}
