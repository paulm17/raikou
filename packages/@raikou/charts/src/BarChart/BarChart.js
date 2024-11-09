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
exports.BarChart = void 0;
exports.BarLabel = BarLabel;
var react_1 = require("react");
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var ChartLegend_1 = require("../ChartLegend");
var ChartTooltip_1 = require("../ChartTooltip");
var grid_chart_css_1 = require("../grid-chart.css");
function valueToPercent(value) {
    return "".concat((value * 100).toFixed(0), "%");
}
var defaultProps = {
    withXAxis: true,
    withYAxis: true,
    withTooltip: true,
    tooltipAnimationDuration: 0,
    fillOpacity: 1,
    tickLine: 'y',
    strokeDasharray: '5 5',
    gridAxis: 'x',
    type: 'default',
};
var varsResolver = (0, core_1.createVarsResolver)(function (theme, _a) {
    var textColor = _a.textColor, gridColor = _a.gridColor, cursorFill = _a.cursorFill;
    return ({
        root: {
            '--chart-text-color': textColor ? (0, core_1.getThemeColor)(textColor, theme) : undefined,
            '--chart-grid-color': gridColor ? (0, core_1.getThemeColor)(gridColor, theme) : undefined,
            '--chart-cursor-fill': cursorFill ? (0, core_1.getThemeColor)(cursorFill, theme) : undefined,
        },
    });
});
function BarLabel(_a) {
    var value = _a.value, valueFormatter = _a.valueFormatter, textBreakAll = _a.textBreakAll, parentViewBox = _a.parentViewBox, others = __rest(_a, ["value", "valueFormatter", "textBreakAll", "parentViewBox"]);
    return (<text {...others} dy={-10} fontSize={12} fill="var(--chart-text-color, var(--raikou-color-dimmed))" textAnchor="center">
      {typeof valueFormatter === 'function' ? valueFormatter(value) : value}
    </text>);
}
function calculateCumulativeTotal(waterfallData, dataKey) {
    var start = 0;
    var end = 0;
    return waterfallData.map(function (item) {
        if (item.standalone) {
            for (var prop in item) {
                if (typeof item[prop] === 'number' && prop !== dataKey) {
                    item[prop] = [0, item[prop]];
                }
            }
        }
        else {
            for (var prop in item) {
                if (typeof item[prop] === 'number' && prop !== dataKey) {
                    end += item[prop];
                    item[prop] = [start, end];
                    start = end;
                }
            }
        }
        return item;
    });
}
exports.BarChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('BarChart', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, withLegend = props.withLegend, legendProps = props.legendProps, series = props.series, onMouseLeave = props.onMouseLeave, dataKey = props.dataKey, withTooltip = props.withTooltip, withXAxis = props.withXAxis, withYAxis = props.withYAxis, gridAxis = props.gridAxis, tickLine = props.tickLine, xAxisProps = props.xAxisProps, yAxisProps = props.yAxisProps, unit = props.unit, tooltipAnimationDuration = props.tooltipAnimationDuration, strokeDasharray = props.strokeDasharray, gridProps = props.gridProps, tooltipProps = props.tooltipProps, referenceLines = props.referenceLines, fillOpacity = props.fillOpacity, barChartProps = props.barChartProps, type = props.type, orientation = props.orientation, dir = props.dir, valueFormatter = props.valueFormatter, children = props.children, barProps = props.barProps, xAxisLabel = props.xAxisLabel, yAxisLabel = props.yAxisLabel, withBarValueLabel = props.withBarValueLabel, withRightYAxis = props.withRightYAxis, rightYAxisLabel = props.rightYAxisLabel, rightYAxisProps = props.rightYAxisProps, minBarSize = props.minBarSize, maxBarWidth = props.maxBarWidth, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "withLegend", "legendProps", "series", "onMouseLeave", "dataKey", "withTooltip", "withXAxis", "withYAxis", "gridAxis", "tickLine", "xAxisProps", "yAxisProps", "unit", "tooltipAnimationDuration", "strokeDasharray", "gridProps", "tooltipProps", "referenceLines", "fillOpacity", "barChartProps", "type", "orientation", "dir", "valueFormatter", "children", "barProps", "xAxisLabel", "yAxisLabel", "withBarValueLabel", "withRightYAxis", "rightYAxisLabel", "rightYAxisProps", "minBarSize", "maxBarWidth"]);
    var theme = (0, core_1.useRaikouTheme)();
    var withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
    var withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');
    var _a = (0, react_1.useState)(null), highlightedArea = _a[0], setHighlightedArea = _a[1];
    var shouldHighlight = highlightedArea !== null;
    var stacked = type === 'stacked' || type === 'percent';
    var handleMouseLeave = function (event) {
        setHighlightedArea(null);
        onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(event);
    };
    var _b = (0, core_1.useResolvedStylesApi)({
        classNames: classNames,
        styles: styles,
        props: props,
    }), resolvedClassNames = _b.resolvedClassNames, resolvedStyles = _b.resolvedStyles;
    var inputData = type === 'waterfall' ? calculateCumulativeTotal(data, dataKey) : data;
    var getStyles = (0, core_1.useStyles)({
        name: 'BarChart',
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
    var bars = series.map(function (item) {
        var color = (0, core_1.getThemeColor)(item.color, theme);
        var dimmed = shouldHighlight && highlightedArea !== item.name;
        return (<recharts_1.Bar {...getStyles('bar')} key={item.name} name={item.name} dataKey={item.name} fill={color} stroke={color} isAnimationActive={false} fillOpacity={dimmed ? 0.1 : fillOpacity} strokeOpacity={dimmed ? 0.2 : 0} stackId={stacked ? 'stack' : item.stackId || undefined} label={withBarValueLabel ? <BarLabel valueFormatter={valueFormatter}/> : undefined} yAxisId={item.yAxisId || 'left'} minPointSize={minBarSize} {...(typeof barProps === 'function' ? barProps(item) : barProps)}>
        {inputData.map(function (entry, index) { return (<recharts_1.Cell key={"cell-".concat(index)} fill={entry.color ? (0, core_1.getThemeColor)(entry.color, theme) : color}/>); })}
      </recharts_1.Bar>);
    });
    var referenceLinesItems = referenceLines === null || referenceLines === void 0 ? void 0 : referenceLines.map(function (line, index) {
        var _a;
        var color = (0, core_1.getThemeColor)(line.color, theme);
        return (<recharts_1.ReferenceLine key={index} stroke={line.color ? color : 'var(--chart-grid-color)'} strokeWidth={1} yAxisId={line.yAxisId || 'left'} {...line} label={{
                value: line.label,
                fill: line.color ? color : 'currentColor',
                fontSize: 12,
                position: (_a = line.labelPosition) !== null && _a !== void 0 ? _a : 'insideBottomLeft',
            }} {...getStyles('referenceLine')}/>);
    });
    var sharedYAxisProps = __assign(__assign(__assign({ axisLine: false }, (orientation === 'vertical'
        ? { dataKey: dataKey, type: 'category' }
        : { type: 'number' })), { tickLine: withYTickLine ? { stroke: 'currentColor' } : false, allowDecimals: true, unit: unit, tickFormatter: type === 'percent' ? valueToPercent : valueFormatter }), getStyles('axis'));
    return (<core_1.Box ref={ref} {...getStyles('root')} onMouseLeave={handleMouseLeave} dir={dir || 'ltr'} {...others}>
      <recharts_1.ResponsiveContainer {...getStyles('container')}>
        <recharts_1.BarChart data={inputData} stackOffset={type === 'percent' ? 'expand' : undefined} layout={orientation} maxBarSize={maxBarWidth} margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
        }} {...barChartProps}>
          {withLegend && (<recharts_1.Legend verticalAlign="top" content={function (payload) { return (<ChartLegend_1.ChartLegend payload={payload.payload} onHighlight={setHighlightedArea} legendPosition={(legendProps === null || legendProps === void 0 ? void 0 : legendProps.verticalAlign) || 'top'} classNames={resolvedClassNames} styles={resolvedStyles} series={series} showColor={type !== 'waterfall'}/>); }} {...legendProps}/>)}

          <recharts_1.XAxis hide={!withXAxis} {...(orientation === 'vertical' ? { type: 'number' } : { dataKey: dataKey })} tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }} stroke="" interval="preserveStartEnd" tickLine={withXTickLine ? { stroke: 'currentColor' } : false} minTickGap={5} {...getStyles('axis')} {...xAxisProps}>
            {xAxisLabel && (<recharts_1.Label position="insideBottom" offset={-20} fontSize={12} {...getStyles('axisLabel')}>
                {xAxisLabel}
              </recharts_1.Label>)}
            {xAxisProps === null || xAxisProps === void 0 ? void 0 : xAxisProps.children}
          </recharts_1.XAxis>

          <recharts_1.YAxis yAxisId="left" orientation="left" tick={{ transform: 'translate(-10, 0)', fontSize: 12, fill: 'currentColor' }} hide={!withYAxis} {...sharedYAxisProps} {...yAxisProps}>
            {yAxisLabel && (<recharts_1.Label position="insideLeft" angle={-90} textAnchor="middle" fontSize={12} offset={-5} {...getStyles('axisLabel')}>
                {yAxisLabel}
              </recharts_1.Label>)}
            {yAxisProps === null || yAxisProps === void 0 ? void 0 : yAxisProps.children}
          </recharts_1.YAxis>

          <recharts_1.YAxis yAxisId="right" orientation="right" tick={{ transform: 'translate(10, 0)', fontSize: 12, fill: 'currentColor' }} hide={!withRightYAxis} {...sharedYAxisProps} {...rightYAxisProps}>
            {rightYAxisLabel && (<recharts_1.Label position="insideRight" angle={90} textAnchor="middle" fontSize={12} offset={-5} {...getStyles('axisLabel')}>
                {rightYAxisLabel}
              </recharts_1.Label>)}
            {yAxisProps === null || yAxisProps === void 0 ? void 0 : yAxisProps.children}
          </recharts_1.YAxis>

          <recharts_1.CartesianGrid strokeDasharray={strokeDasharray} vertical={gridAxis === 'y' || gridAxis === 'xy'} horizontal={gridAxis === 'x' || gridAxis === 'xy'} {...getStyles('grid')} {...gridProps}/>

          {withTooltip && (<recharts_1.Tooltip animationDuration={tooltipAnimationDuration} isAnimationActive={tooltipAnimationDuration !== 0} position={orientation === 'vertical' ? {} : { y: 0 }} cursor={{
                stroke: 'var(--chart-grid-color)',
                strokeWidth: 1,
                strokeDasharray: strokeDasharray,
                fill: 'var(--chart-cursor-fill)',
            }} content={function (_a) {
                var label = _a.label, payload = _a.payload;
                return (<ChartTooltip_1.ChartTooltip label={label} payload={payload} type={type === 'waterfall' ? 'scatter' : undefined} unit={unit} classNames={resolvedClassNames} styles={resolvedStyles} series={series} valueFormatter={valueFormatter}/>);
            }} {...tooltipProps}/>)}

          {bars}
          {referenceLinesItems}
          {children}
        </recharts_1.BarChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.BarChart.displayName = '@raikou/charts/BarChart';
