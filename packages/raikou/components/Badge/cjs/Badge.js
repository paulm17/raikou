'use client';
'use strict';

var React = require('react');
var core = require('@raikou/core');
var Badge_module = require('./Badge.module.css.js');

const defaultProps = {};
const varsResolver = core.createVarsResolver(
  (theme, { radius, color, gradient, variant, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--badge-height": core.getSize(size, "badge-height"),
        "--badge-padding-x": core.getSize(size, "badge-padding-x"),
        "--badge-fz": core.getSize(size, "badge-fz"),
        "--badge-radius": radius === void 0 ? void 0 : core.getRadius(radius),
        "--badge-bg": color || variant ? colors.background : void 0,
        "--badge-color": color || variant ? colors.color : void 0,
        "--badge-bd": color || variant ? colors.border : void 0,
        "--badge-dot-color": variant === "dot" ? core.getThemeColor(color, theme) : void 0
      }
    };
  }
);
const Badge = core.polymorphicFactory((_props, ref) => {
  const props = core.useProps("Badge", defaultProps, _props);
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
  const getStyles = core.useStyles({
    name: "Badge",
    props,
    classes: Badge_module.default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    core.Box,
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

exports.Badge = Badge;
//# sourceMappingURL=Badge.js.map
