'use client';
import React from 'react';
import { createVarsResolver, getSize, getRadius, getThemeColor, polymorphicFactory, useProps, useStyles, Box } from '@raikou/core';
import classes from './Badge.module.css.mjs';

const defaultProps = {};
const varsResolver = createVarsResolver(
  (theme, { radius, color, gradient, variant, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--badge-height": getSize(size, "badge-height"),
        "--badge-padding-x": getSize(size, "badge-padding-x"),
        "--badge-fz": getSize(size, "badge-fz"),
        "--badge-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--badge-bg": color || variant ? colors.background : void 0,
        "--badge-color": color || variant ? colors.color : void 0,
        "--badge-bd": color || variant ? colors.border : void 0,
        "--badge-dot-color": variant === "dot" ? getThemeColor(color, theme) : void 0
      }
    };
  }
);
const Badge = polymorphicFactory((_props, ref) => {
  const props = useProps("Badge", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    gradient,
    leftSection,
    rightSection,
    children,
    variant,
    fullWidth,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Badge",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    Box,
    {
      variant,
      mod: { block: fullWidth },
      ...getStyles("root", { variant }),
      ref,
      ...others
    },
    leftSection && /* @__PURE__ */ React.createElement("span", { ...getStyles("section"), "data-position": "left" }, leftSection),
    /* @__PURE__ */ React.createElement("span", { ...getStyles("label") }, children),
    rightSection && /* @__PURE__ */ React.createElement("span", { ...getStyles("section"), "data-position": "right" }, rightSection)
  );
});
Badge.displayName = "@raikou/Badge";

export { Badge };
//# sourceMappingURL=Badge.mjs.map
