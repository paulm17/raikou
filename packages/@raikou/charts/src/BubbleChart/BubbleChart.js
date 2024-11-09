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
exports.BubbleChart = void 0;
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var grid_chart_css_1 = require("../grid-chart.css");
function getDomain(data, key) {
    var values = data.map(function (item) { return item[key]; });
    return [Math.min.apply(Math, values), Math.max.apply(Math, values)];
}
function BubbleChartTooltip(_a) {
    var active = _a.active, payload = _a.payload, getStyles = _a.getStyles, dataKey = _a.dataKey, valueFormatter = _a.valueFormatter;
    if (active && payload && payload.length) {
        var data = payload[0] && payload[0].payload;
        return (<div {...getStyles('tooltip')}>
        <core_1.Group justify="space-between">
          <core_1.Text fz="sm">{data[dataKey.x]}</core_1.Text>
          <core_1.Text fz="sm">{valueFormatter ? valueFormatter(data[dataKey.z]) : data[dataKey.z]}</core_1.Text>
        </core_1.Group>
      </div>);
    }
    return null;
}
var defaultProps = {
    color: 'blue.6',
    withTooltip: true,
};
var varsResolver = (0, core_1.createVarsResolver)(function (theme, _a) {
    var textColor = _a.textColor, gridColor = _a.gridColor;
    return ({
        root: {
            '--chart-text-color': textColor ? (0, core_1.getThemeColor)(textColor, theme) : undefined,
            '--chart-grid-color': gridColor ? (0, core_1.getThemeColor)(gridColor, theme) : undefined,
        },
    });
});
exports.BubbleChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('BubbleChart', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, xAxisProps = props.xAxisProps, yAxisProps = props.yAxisProps, zAxisProps = props.zAxisProps, tooltipProps = props.tooltipProps, scatterProps = props.scatterProps, color = props.color, label = props.label, withTooltip = props.withTooltip, dataKey = props.dataKey, range = props.range, valueFormatter = props.valueFormatter, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "xAxisProps", "yAxisProps", "zAxisProps", "tooltipProps", "scatterProps", "color", "label", "withTooltip", "dataKey", "range", "valueFormatter"]);
    var theme = (0, core_1.useRaikouTheme)();
    var getStyles = (0, core_1.useStyles)({
        name: 'BubbleChart',
        classes: {
            root: grid_chart_css_1.GridChartRootStyle,
            axis: grid_chart_css_1.GridChartAxisStyle,
            tooltip: grid_chart_css_1.GridChartTooltipStyle,
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
    return (<core_1.Box ref={ref} {...getStyles('root')} {...others}>
      <recharts_1.ResponsiveContainer>
        <recharts_1.ScatterChart>
          <recharts_1.XAxis type="category" dataKey={dataKey.x} interval={0} tick={{ fontSize: 12, fill: 'currentColor' }} tickLine={{ transform: 'translate(0, -6)', stroke: 'currentColor' }} stroke="currentColor" {...getStyles('axis')} {...xAxisProps}/>

          <recharts_1.YAxis type="number" dataKey={dataKey.y} height={10} width={label ? undefined : 0} tick={false} tickLine={false} axisLine={false} label={{ value: label, position: 'insideRight', fontSize: 12, fill: 'currentColor' }} {...getStyles('axis')} {...yAxisProps}/>

          <recharts_1.ZAxis type="number" dataKey={dataKey.z} domain={getDomain(data, dataKey.z)} range={range} {...zAxisProps}/>

          {withTooltip && (<recharts_1.Tooltip animationDuration={100} isAnimationActive={false} cursor={{ stroke: 'var(--chart-grid-color)', strokeWidth: 1, strokeDasharray: '3 3' }} content={function (payload) { return (<BubbleChartTooltip dataKey={dataKey} active={payload.active} payload={payload.payload} getStyles={getStyles} valueFormatter={valueFormatter}/>); }} {...tooltipProps}/>)}

          <recharts_1.Scatter data={data} fill={(0, core_1.getThemeColor)(color, theme)} isAnimationActive={false} {...scatterProps}/>
        </recharts_1.ScatterChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.BubbleChart.displayName = '@raikou/charts/BubbleChart';
