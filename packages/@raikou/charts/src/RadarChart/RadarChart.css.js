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
exports.RadarChartContainerStyle = exports.RadarChartRootStyle = void 0;
var react_1 = require("@stylefusion/react");
exports.RadarChartRootStyle = (0, react_1.css)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign(__assign({}, theme.applyStyles("light", {
        "--chart-grid-color": "rgba(173, 181, 189, 0.6)",
        "--chart-text-color": theme.colors.gray[7],
    })), theme.applyStyles("dark", {
        "--chart-grid-color": "rgba(105, 105, 105, 0.6)",
        "--chart-text-color": theme.colors.dark[1],
    })), { "& :_where(text)": {
            fontSize: "var(--raikou-font-size-xs)",
            fill: "var(--chart-text-color)",
            userSelect: "none",
        } }));
});
exports.RadarChartContainerStyle = (0, react_1.css)({
    height: "100%",
    width: "100%",
});
