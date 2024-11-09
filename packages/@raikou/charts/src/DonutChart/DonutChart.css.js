"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonutChartLabelStyle = exports.DonutChartRootStyle = void 0;
var react_1 = require("@stylefusion/react");
exports.DonutChartRootStyle = (0, react_1.css)({
    minHeight: 'var(--chart-size, auto)',
    height: 'var(--chart-size, auto)',
    width: 'var(--chart-size, auto)',
    minWidth: 'var(--chart-size, auto)',
    '& :_where(*)': {
        outline: 0,
    },
});
exports.DonutChartLabelStyle = (0, react_1.css)({
    fill: 'var(--raikou-color-text)',
    fontSize: 'var(--raikou-font-size-sm)',
});
