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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartLegend = void 0;
exports.getFilteredChartLegendPayload = getFilteredChartLegendPayload;
var core_1 = require("@raikou/core");
var utils_1 = require("../utils");
var ChartLegend_css_1 = require("./ChartLegend.css");
function updateChartLegendPayload(payload) {
    return payload.map(function (item) {
        var newDataKey = item.dataKey.split('.').pop();
        return __assign(__assign({}, item), { dataKey: newDataKey, payload: __assign(__assign({}, item.payload), { name: newDataKey, dataKey: newDataKey }) });
    });
}
function getFilteredChartLegendPayload(payload) {
    return updateChartLegendPayload(payload.filter(function (item) { return item.color !== 'none'; }));
}
var defaultProps = {};
exports.ChartLegend = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('ChartLegend', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, payload = props.payload, onHighlight = props.onHighlight, legendPosition = props.legendPosition, mod = props.mod, series = props.series, showColor = props.showColor, centered = props.centered, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "payload", "onHighlight", "legendPosition", "mod", "series", "showColor", "centered"]);
    var getStyles = (0, core_1.useStyles)({
        name: 'ChartLegend',
        classes: {
            legendItem: ChartLegend_css_1.ChartLegendItemStyle,
            legendItemColor: ChartLegend_css_1.ChartLegendItemColorStyle,
            legendItemName: ChartLegend_css_1.ChartLegendItemNameStyle,
            legend: ChartLegend_css_1.ChartLegendStyle,
        },
        props: props,
        className: className,
        style: style,
        classNames: classNames,
        styles: styles,
        unstyled: unstyled,
    });
    if (!payload) {
        return null;
    }
    var filteredPayload = getFilteredChartLegendPayload(payload);
    var labels = (0, utils_1.getSeriesLabels)(series);
    var items = filteredPayload.map(function (item, index) { return (<div key={index} {...getStyles('legendItem')} onMouseEnter={function () { return onHighlight(item.dataKey); }} onMouseLeave={function () { return onHighlight(null); }} data-without-color={showColor === false || undefined}>
      <core_1.ColorSwatch color={item.color} size={12} {...getStyles('legendItemColor')} withShadow={false}/>
      <p {...getStyles('legendItemName')}>{labels[item.dataKey] || item.dataKey}</p>
    </div>); });
    return (<core_1.Box ref={ref} mod={[{ position: legendPosition, centered: centered }, mod]} {...getStyles('legend')} {...others}>
      {items}
    </core_1.Box>);
});
exports.ChartLegend.displayName = '@raikou/charts/ChartLegend';
