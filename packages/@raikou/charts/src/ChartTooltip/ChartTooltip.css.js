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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartTooltipItemDataStyle = exports.ChartTooltipItemNameStyle = exports.ChartTooltipItemBodyStyle = exports.ChartTooltipItemStyle = exports.ChartTooltipItemColorStyle = exports.ChartTooltipBodyStyle = exports.ChartTooltipLabelStyle = exports.ChartTooltipStyle = void 0;
var react_1 = require("@stylefusion/react");
exports.ChartTooltipStyle = (0, react_1.css)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ minWidth: "200px", backgroundColor: "var(--raikou-color-body)", boxShadow: "var(--raikou-shadow-md)", borderRadius: "var(--raikou-radius-default)" }, theme.applyStyles("light", {
        border: "1px solid ".concat(theme.colors.gray[3]),
    })), theme.applyStyles("dark", {
        border: "1px solid ".concat(theme.colors.dark[4]),
    })));
});
exports.ChartTooltipLabelStyle = (0, react_1.css)({
    padding: "var(--raikou-spacing-xs) var(--raikou-spacing-md)",
    fontSize: "var(--raikou-font-size-md)",
    fontWeight: 500,
    color: "var(--raikou-color-bright)",
});
exports.ChartTooltipBodyStyle = (0, react_1.css)((_a = {
        padding: "var(--raikou-spacing-sm) var(--raikou-spacing-md)",
        paddingTop: 0
    },
    _a["& .".concat(exports.ChartTooltipStyle, ":_where([data-type=\"radial\"]) :_where(&)")] = {
        padding: "var(--raikou-spacing-md)",
    },
    _a));
exports.ChartTooltipItemColorStyle = (0, react_1.css)({});
exports.ChartTooltipItemStyle = (0, react_1.css)((_b = {
        fontSize: "var(--raikou-font-size-sm)",
        display: "flex",
        justifyContent: "space-between",
        "&:_where(& + &)": {
            marginTop: "calc(var(--raikou-spacing-sm) / 2)",
        }
    },
    _b["&[data-type=\"scatter\"] .".concat(exports.ChartTooltipItemColorStyle)] = {
        display: "none",
    },
    _b));
exports.ChartTooltipItemBodyStyle = (0, react_1.css)({
    display: "flex",
    alignItems: "center",
    gap: "var(--raikou-spacing-sm)",
    marginInlineEnd: "var(--raikou-spacing-xl)",
});
exports.ChartTooltipItemNameStyle = (0, react_1.css)({
    color: "var(--raikou-color-text)",
    fontSize: "var(--raikou-font-size-sm)",
});
exports.ChartTooltipItemDataStyle = (0, react_1.css)({
    color: "var(--raikou-color-bright)",
});
