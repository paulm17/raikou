"use strict";
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
exports.RadarChart = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var ChartLegend_1 = require("../ChartLegend");
var RadarChart_css_1 = require("./RadarChart.css");
var defaultProps = {
    withPolarGrid: true,
    withPolarAngleAxis: true,
    withPolarRadiusAxis: false,
};
var varsResolver = (0, core_1.createVarsResolver)(function (theme, _a) {
    var gridColor = _a.gridColor, textColor = _a.textColor;
    return ({
        root: {
            '--chart-grid-color': gridColor ? (0, core_1.getThemeColor)(gridColor, theme) : undefined,
            '--chart-text-color': textColor ? (0, core_1.getThemeColor)(textColor, theme) : undefined,
        },
    });
});
exports.RadarChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('RadarChart', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, series = props.series, dataKey = props.dataKey, gridColor = props.gridColor, textColor = props.textColor, radarProps = props.radarProps, radarChartProps = props.radarChartProps, polarGridProps = props.polarGridProps, polarAngleAxisProps = props.polarAngleAxisProps, polarRadiusAxisProps = props.polarRadiusAxisProps, withPolarGrid = props.withPolarGrid, withPolarAngleAxis = props.withPolarAngleAxis, withPolarRadiusAxis = props.withPolarRadiusAxis, children = props.children, withLegend = props.withLegend, legendProps = props.legendProps, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "series", "dataKey", "gridColor", "textColor", "radarProps", "radarChartProps", "polarGridProps", "polarAngleAxisProps", "polarRadiusAxisProps", "withPolarGrid", "withPolarAngleAxis", "withPolarRadiusAxis", "children", "withLegend", "legendProps"]);
    var theme = (0, core_1.useRaikouTheme)();
    var getStyles = (0, core_1.useStyles)({
        name: 'RadarChart',
        classes: {
            root: RadarChart_css_1.RadarChartRootStyle,
            container: RadarChart_css_1.RadarChartContainerStyle,
        },
        props: props,
        className: className,
        style: style,
        classNames: classNames,
        styles: styles,
        unstyled: unstyled,
        vars: vars,
        varsResolver: varsResolver,
    });
    var _a = (0, react_1.useState)(null), highlightedArea = _a[0], setHighlightedArea = _a[1];
    var _b = (0, core_1.useResolvedStylesApi)({
        classNames: classNames,
        styles: styles,
        props: props,
    }), resolvedClassNames = _b.resolvedClassNames, resolvedStyles = _b.resolvedStyles;
    var radars = series.map(function (item, index) { return (<recharts_1.Radar key={index} name={item.name} dataKey={item.name} stroke={(0, core_1.getThemeColor)(item.strokeColor || item.color, theme)} fill={(0, core_1.getThemeColor)(item.color, theme)} fillOpacity={highlightedArea
            ? highlightedArea === item.name
                ? item.opacity || 0.4
                : 0.05
            : item.opacity || 0.4} strokeOpacity={highlightedArea ? (highlightedArea === item.name ? 1 : 0.1) : 1} isAnimationActive={false} {...(typeof radarProps === 'function' ? radarProps(item) : radarProps)}/>); });
    return (<core_1.Box ref={ref} {...getStyles('root')} {...others}>
      <recharts_1.ResponsiveContainer {...getStyles('container')}>
        <recharts_1.RadarChart data={data} {...radarChartProps}>
          {withPolarGrid && <recharts_1.PolarGrid stroke="var(--chart-grid-color)" {...polarGridProps}/>}
          {withPolarAngleAxis && <recharts_1.PolarAngleAxis dataKey={dataKey} {...polarAngleAxisProps}/>}
          {withPolarRadiusAxis && (<recharts_1.PolarRadiusAxis stroke="var(--chart-grid-color)" {...polarRadiusAxisProps}/>)}
          {radars}
          {withLegend && (<recharts_1.Legend verticalAlign="bottom" content={function (payload) { return (<ChartLegend_1.ChartLegend payload={payload.payload} onHighlight={setHighlightedArea} legendPosition={(legendProps === null || legendProps === void 0 ? void 0 : legendProps.verticalAlign) || 'bottom'} classNames={resolvedClassNames} styles={resolvedStyles} series={series} centered/>); }} {...legendProps}/>)}
          {children}
        </recharts_1.RadarChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.RadarChart.displayName = '@raikou/charts/RadarChart';
