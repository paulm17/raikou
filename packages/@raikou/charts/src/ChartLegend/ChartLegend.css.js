"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartLegendItemNameStyle = exports.ChartLegendItemStyle = exports.ChartLegendItemColorStyle = exports.ChartLegendStyle = void 0;
var react_1 = require("@stylefusion/react");
exports.ChartLegendStyle = (0, react_1.css)({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    "&:_where([data-centered])": {
        justifyContent: "center",
    },
    '&:_where([data-position="top"])': {
        paddingBottom: "var(--raikou-spacing-md)",
    },
    '&:_where([data-position="bottom"])': {
        paddingTop: "var(--raikou-spacing-md)",
    },
});
exports.ChartLegendItemColorStyle = (0, react_1.css)({});
exports.ChartLegendItemStyle = (0, react_1.css)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign(__assign({ display: "flex", alignItems: "center", gap: "7px", padding: "7px var(--raikou-spacing-xs)", borderRadius: "var(--raikou-radius-default)", lineHeight: 1 }, theme.applyMixin("hover", {
        "&:hover": __assign(__assign({}, theme.applyStyles("light", {
            backgroundColor: theme.colors.gray[0],
        })), theme.applyStyles("dark", {
            backgroundColor: theme.colors.dark[5],
        })),
    })), (_b = {}, _b["&[data-without-color] ".concat(exports.ChartLegendItemColorStyle)] = {
        display: "none",
    }, _b)));
});
exports.ChartLegendItemNameStyle = (0, react_1.css)({
    fontSize: "var(--raikou-font-size-sm)",
    margin: 0,
    padding: 0,
});
