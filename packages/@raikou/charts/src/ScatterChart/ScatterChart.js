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
exports.ScatterChart = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var ChartLegend_1 = require("../ChartLegend");
var ChartTooltip_1 = require("../ChartTooltip");
var grid_chart_css_1 = require("../grid-chart.css");
function getAxis(key, dataKey) {
    return key === dataKey.x ? 'x' : 'y';
}
var defaultProps = {
    withXAxis: true,
    withYAxis: true,
    withTooltip: true,
    tooltipAnimationDuration: 0,
    tickLine: 'y',
    strokeDasharray: '5 5',
    gridAxis: 'x',
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
exports.ScatterChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('ScatterChart', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, referenceLines = props.referenceLines, dir = props.dir, withLegend = props.withLegend, withTooltip = props.withTooltip, withXAxis = props.withXAxis, withYAxis = props.withYAxis, xAxisProps = props.xAxisProps, yAxisProps = props.yAxisProps, orientation = props.orientation, scatterChartProps = props.scatterChartProps, legendProps = props.legendProps, data = props.data, gridAxis = props.gridAxis, tickLine = props.tickLine, strokeDasharray = props.strokeDasharray, gridProps = props.gridProps, tooltipAnimationDuration = props.tooltipAnimationDuration, tooltipProps = props.tooltipProps, children = props.children, onMouseLeave = props.onMouseLeave, dataKey = props.dataKey, textColor = props.textColor, gridColor = props.gridColor, xAxisLabel = props.xAxisLabel, yAxisLabel = props.yAxisLabel, unit = props.unit, labels = props.labels, valueFormatter = props.valueFormatter, scatterProps = props.scatterProps, pointLabels = props.pointLabels, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "referenceLines", "dir", "withLegend", "withTooltip", "withXAxis", "withYAxis", "xAxisProps", "yAxisProps", "orientation", "scatterChartProps", "legendProps", "data", "gridAxis", "tickLine", "strokeDasharray", "gridProps", "tooltipAnimationDuration", "tooltipProps", "children", "onMouseLeave", "dataKey", "textColor", "gridColor", "xAxisLabel", "yAxisLabel", "unit", "labels", "valueFormatter", "scatterProps", "pointLabels"]);
    var getFormatter = function (axis) {
        return typeof valueFormatter === 'function' ? valueFormatter : valueFormatter === null || valueFormatter === void 0 ? void 0 : valueFormatter[axis];
    };
    var xFormatter = getFormatter('x');
    var yFormatter = getFormatter('y');
    var theme = (0, core_1.useRaikouTheme)();
    var mappedData = data.map(function (item) { return (__assign(__assign({}, item), { data: item.data.map(function (point) { return (__assign(__assign({}, point), { name: item.name })); }) })); });
    var _a = (0, core_1.useResolvedStylesApi)({
        classNames: classNames,
        styles: styles,
        props: props,
    }), resolvedClassNames = _a.resolvedClassNames, resolvedStyles = _a.resolvedStyles;
    var getStyles = (0, core_1.useStyles)({
        name: 'ScatterChart',
        classes: {
            root: grid_chart_css_1.GridChartRootStyle,
            container: grid_chart_css_1.GridChartContainerStyle,
            axis: grid_chart_css_1.GridChartAxisStyle,
            grid: grid_chart_css_1.GridChartGridStyle,
            axisLabel: grid_chart_css_1.GridChartAxisLabelStyle,
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
    var withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
    var withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');
    var _b = (0, react_1.useState)(null), highlightedArea = _b[0], setHighlightedArea = _b[1];
    var shouldHighlight = highlightedArea !== null;
    var handleMouseLeave = function (event) {
        setHighlightedArea(null);
        onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(event);
    };
    var referenceLinesItems = referenceLines === null || referenceLines === void 0 ? void 0 : referenceLines.map(function (line, index) {
        var _a;
        var color = (0, core_1.getThemeColor)(line.color, theme);
        return (<recharts_1.ReferenceLine key={index} stroke={line.color ? color : 'var(--chart-grid-color)'} strokeWidth={1} {...line} label={{
                value: line.label,
                fill: line.color ? color : 'currentColor',
                fontSize: 12,
                position: (_a = line.labelPosition) !== null && _a !== void 0 ? _a : 'insideBottomLeft',
            }} {...getStyles('referenceLine')}/>);
    });
    var scatters = mappedData.map(function (item, index) {
        var dimmed = shouldHighlight && highlightedArea !== item.name;
        return (<recharts_1.Scatter data={item.data} fill={(0, core_1.getThemeColor)(item.color, theme)} key={index} isAnimationActive={false} fillOpacity={dimmed ? 0.1 : 1} {...scatterProps}>
        {pointLabels && <recharts_1.LabelList dataKey={dataKey[pointLabels]} fontSize={8} dy={10}/>}
        {scatterProps === null || scatterProps === void 0 ? void 0 : scatterProps.children}
      </recharts_1.Scatter>);
    });
    return (<core_1.Box ref={ref} {...getStyles('root')} onMouseLeave={handleMouseLeave} dir={dir || 'ltr'} {...others}>
      <recharts_1.ResponsiveContainer {...getStyles('container')}>
        <recharts_1.ScatterChart margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
        }} {...scatterChartProps}>
          <recharts_1.CartesianGrid strokeDasharray={strokeDasharray} vertical={gridAxis === 'y' || gridAxis === 'xy'} horizontal={gridAxis === 'x' || gridAxis === 'xy'} {...getStyles('grid')} {...gridProps}/>
          <recharts_1.XAxis type="number" hide={!withXAxis} dataKey={dataKey.x} tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }} stroke="" interval="preserveStartEnd" tickLine={withXTickLine ? { stroke: 'currentColor' } : false} minTickGap={5} unit={unit === null || unit === void 0 ? void 0 : unit.x} tickFormatter={xFormatter} {...getStyles('axis')} {...xAxisProps}>
            {xAxisLabel && (<recharts_1.Label position="insideBottom" offset={-20} fontSize={12} {...getStyles('axisLabel')}>
                {xAxisLabel}
              </recharts_1.Label>)}
            {xAxisProps === null || xAxisProps === void 0 ? void 0 : xAxisProps.children}
          </recharts_1.XAxis>
          <recharts_1.YAxis type="number" hide={!withYAxis} axisLine={false} dataKey={dataKey.y} tickLine={withYTickLine ? { stroke: 'currentColor' } : false} tick={{ transform: 'translate(-10, 0)', fontSize: 12, fill: 'currentColor' }} allowDecimals unit={unit === null || unit === void 0 ? void 0 : unit.y} tickFormatter={yFormatter} {...getStyles('axis')} {...yAxisProps}>
            {yAxisLabel && (<recharts_1.Label position="insideLeft" angle={-90} textAnchor="middle" fontSize={12} offset={-5} {...getStyles('axisLabel')}>
                {yAxisLabel}
              </recharts_1.Label>)}
            {yAxisProps === null || yAxisProps === void 0 ? void 0 : yAxisProps.children}
          </recharts_1.YAxis>

          {withTooltip && (<recharts_1.Tooltip animationDuration={tooltipAnimationDuration} isAnimationActive={tooltipAnimationDuration !== 0} position={{ y: 0 }} cursor={{
                stroke: 'var(--chart-grid-color)',
                strokeWidth: 1,
                strokeDasharray: strokeDasharray,
            }} content={function (_a) {
                var label = _a.label, payload = _a.payload;
                return (<ChartTooltip_1.ChartTooltip type="scatter" label={label} payload={labels
                        ? payload === null || payload === void 0 ? void 0 : payload.map(function (item) {
                            var _a, _b;
                            return (__assign(__assign({}, item), { name: labels[getAxis(item.name, dataKey)] || item.name, value: (_b = (_a = getFormatter(getAxis(item.name, dataKey))) === null || _a === void 0 ? void 0 : _a(item.value)) !== null && _b !== void 0 ? _b : item.value }));
                        })
                        : payload === null || payload === void 0 ? void 0 : payload.map(function (item) {
                            var _a, _b;
                            return (__assign(__assign({}, item), { value: (_b = (_a = getFormatter(getAxis(item.name, dataKey))) === null || _a === void 0 ? void 0 : _a(item.value)) !== null && _b !== void 0 ? _b : item.value }));
                        })} classNames={resolvedClassNames} styles={resolvedStyles} series={data}/>);
            }} {...tooltipProps}/>)}

          {withLegend && (<recharts_1.Legend verticalAlign="top" content={function (payload) {
                var _a;
                return (<ChartLegend_1.ChartLegend payload={(_a = payload.payload) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return (__assign(__assign({}, item), { dataKey: data[index].name })); })} onHighlight={setHighlightedArea} legendPosition={(legendProps === null || legendProps === void 0 ? void 0 : legendProps.verticalAlign) || 'top'} classNames={resolvedClassNames} styles={resolvedStyles} series={data}/>);
            }} height={44} {...legendProps}/>)}

          {referenceLinesItems}
          {scatters}
        </recharts_1.ScatterChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.ScatterChart.displayName = '@raikou/charts/ScatterChart';
