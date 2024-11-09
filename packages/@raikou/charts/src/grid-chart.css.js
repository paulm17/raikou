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
exports.GridChartTooltipStyle = exports.GridChartAxisLabelStyle = exports.GridChartAxisStyle = exports.GridChartGridStyle = exports.GridChartContainerStyle = exports.GridChartRootStyle = void 0;
var react_1 = require("@stylefusion/react");
exports.GridChartRootStyle = (0, react_1.css)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign(__assign({ display: "block", width: "100%", svg: {
            overflow: "visible",
        } }, theme.applyStyles("light", {
        "--chart-grid-color": "rgba(173, 181, 189, 0.6)",
        "--chart-cursor-fill": "rgba(173, 181, 189, 0.15)",
    })), theme.applyStyles("dark", {
        "--chart-grid-color": "rgba(105, 105, 105, 0.6)",
        "--chart-cursor-fill": "rgba(105, 105, 105, 0.15)",
    })), { "& :_where(text)": {
            fontFamily: "var(--raikou-font-family)",
            color: "var(--chart-text-color, var(--raikou-color-dimmed))",
        } }));
});
exports.GridChartContainerStyle = (0, react_1.css)({
    height: "100%",
    width: "100%",
});
exports.GridChartGridStyle = (0, react_1.css)({
    stroke: "var(--chart-grid-color)",
});
exports.GridChartAxisStyle = (0, react_1.css)({
    color: "var(--chart-grid-color)",
});
exports.GridChartAxisLabelStyle = (0, react_1.css)({
    color: "var(--chart-text-color, var(--raikou-color-dimmed))",
});
exports.GridChartTooltipStyle = (0, react_1.css)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ minWidth: "200px", backgroundColor: "var(--raikou-color-body)", boxShadow: "var(--raikou-shadow-md)", borderRadius: "var(--raikou-radius-default)", padding: "var(--raikou-spacing-sm)" }, theme.applyStyles("light", {
        border: "1px solid ".concat(theme.colors.gray[3]),
    })), theme.applyStyles("dark", {
        border: "1px solid ".concat(theme.colors.dark[4]),
    })));
});
