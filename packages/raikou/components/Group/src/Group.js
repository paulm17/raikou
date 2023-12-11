import { __rest } from "tslib";
import React from "react";
import { Box, factory, useProps, useStyles, getSpacing, createVarsResolver, } from "@raikou/core";
import { filterFalsyChildren } from "./filter-falsy-children/filter-falsy-children";
import classes from "./Group.module.css";
const defaultProps = {
    preventGrowOverflow: true,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
};
const varsResolver = createVarsResolver((_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
        "--group-child-width": grow && preventGrowOverflow ? childWidth : undefined,
        "--group-gap": getSpacing(gap),
        "--group-align": align,
        "--group-justify": justify,
        "--group-wrap": wrap,
    },
}));
export const Group = factory((_props, ref) => {
    const props = useProps("Group", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, children, gap, align, justify, wrap, grow, preventGrowOverflow, vars, variant, __size } = props, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "children", "gap", "align", "justify", "wrap", "grow", "preventGrowOverflow", "vars", "variant", "__size"]);
    // @ts-ignore
    const filteredChildren = filterFalsyChildren(children);
    const childrenCount = filteredChildren.length;
    const resolvedGap = getSpacing(gap !== null && gap !== void 0 ? gap : "md");
    const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
    const stylesCtx = { childWidth };
    const getStyles = useStyles({
        name: "Group",
        props,
        stylesCtx,
        className,
        style,
        classes,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver,
    });
    return (React.createElement(Box, Object.assign({}, getStyles("root"), { ref: ref, variant: variant, mod: { grow }, size: __size }, others), filteredChildren));
});
Group.displayName = "@raikou/core/Group";
Group.classes = classes;
//# sourceMappingURL=Group.js.map