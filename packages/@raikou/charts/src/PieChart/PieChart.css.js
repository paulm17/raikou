"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChartLabelStyle = exports.PieChartRootStyle = void 0;
var react_1 = require("@stylefusion/react");
exports.PieChartRootStyle = (0, react_1.css)({
    minHeight: 'var(--chart-size, auto)',
    height: 'var(--chart-size, auto)',
    width: 'var(--chart-size, auto)',
    minWidth: 'var(--chart-size, auto)',
    '& :_where(*)': {
        outline: 0,
    },
});
exports.PieChartLabelStyle = (0, react_1.css)({});
