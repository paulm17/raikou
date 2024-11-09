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
exports.LineChart = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var hooks_1 = require("@raikou/hooks");
var ChartLegend_1 = require("../ChartLegend");
var ChartTooltip_1 = require("../ChartTooltip");
var PointLabel_1 = require("../PointLabel/PointLabel");
var grid_chart_css_1 = require("../grid-chart.css");
var defaultProps = {
    withXAxis: true,
    withYAxis: true,
    withTooltip: true,
    tooltipAnimationDuration: 0,
    fillOpacity: 1,
    tickLine: 'y',
    strokeDasharray: '5 5',
    gridAxis: 'x',
    withDots: true,
    connectNulls: true,
    strokeWidth: 2,
    curveType: 'monotone',
    gradientStops: [
        { offset: 0, color: 'red' },
        { offset: 100, color: 'blue' },
    ],
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
exports.LineChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('LineChart', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, withLegend = props.withLegend, legendProps = props.legendProps, series = props.series, onMouseLeave = props.onMouseLeave, dataKey = props.dataKey, withTooltip = props.withTooltip, withXAxis = props.withXAxis, withYAxis = props.withYAxis, gridAxis = props.gridAxis, tickLine = props.tickLine, xAxisProps = props.xAxisProps, yAxisProps = props.yAxisProps, unit = props.unit, tooltipAnimationDuration = props.tooltipAnimationDuration, strokeDasharray = props.strokeDasharray, gridProps = props.gridProps, tooltipProps = props.tooltipProps, referenceLines = props.referenceLines, withDots = props.withDots, dotProps = props.dotProps, activeDotProps = props.activeDotProps, strokeWidth = props.strokeWidth, lineChartProps = props.lineChartProps, connectNulls = props.connectNulls, fillOpacity = props.fillOpacity, curveType = props.curveType, orientation = props.orientation, dir = props.dir, valueFormatter = props.valueFormatter, children = props.children, lineProps = props.lineProps, xAxisLabel = props.xAxisLabel, yAxisLabel = props.yAxisLabel, type = props.type, gradientStops = props.gradientStops, withRightYAxis = props.withRightYAxis, rightYAxisLabel = props.rightYAxisLabel, rightYAxisProps = props.rightYAxisProps, withPointLabels = props.withPointLabels, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "withLegend", "legendProps", "series", "onMouseLeave", "dataKey", "withTooltip", "withXAxis", "withYAxis", "gridAxis", "tickLine", "xAxisProps", "yAxisProps", "unit", "tooltipAnimationDuration", "strokeDasharray", "gridProps", "tooltipProps", "referenceLines", "withDots", "dotProps", "activeDotProps", "strokeWidth", "lineChartProps", "connectNulls", "fillOpacity", "curveType", "orientation", "dir", "valueFormatter", "children", "lineProps", "xAxisLabel", "yAxisLabel", "type", "gradientStops", "withRightYAxis", "rightYAxisLabel", "rightYAxisProps", "withPointLabels"]);
    var theme = (0, core_1.useRaikouTheme)();
    var withXTickLine = gridAxis !== 'none' && (tickLine === 'x' || tickLine === 'xy');
    var withYTickLine = gridAxis !== 'none' && (tickLine === 'y' || tickLine === 'xy');
    var _a = (0, react_1.useState)(null), highlightedArea = _a[0], setHighlightedArea = _a[1];
    var shouldHighlight = highlightedArea !== null;
    var handleMouseLeave = function (event) {
        setHighlightedArea(null);
        onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(event);
    };
    var _b = (0, core_1.useResolvedStylesApi)({
        classNames: classNames,
        styles: styles,
        props: props,
    }), resolvedClassNames = _b.resolvedClassNames, resolvedStyles = _b.resolvedStyles;
    var getStyles = (0, core_1.useStyles)({
        name: 'LineChart',
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
    var id = (0, hooks_1.useId)();
    var gradientId = "line-chart-gradient-".concat(id);
    var stops = gradientStops === null || gradientStops === void 0 ? void 0 : gradientStops.map(function (stop) { return (<stop key={stop.color} offset={"".concat(stop.offset, "%")} stopColor={(0, core_1.getThemeColor)(stop.color, theme)}/>); });
    var lines = series.map(function (item) {
        var color = (0, core_1.getThemeColor)(item.color, theme);
        var dimmed = shouldHighlight && highlightedArea !== item.name;
        return (<recharts_1.Line {...getStyles('line')} key={item.name} name={item.name} dataKey={item.name} dot={withDots
                ? __assign({ fillOpacity: dimmed ? 0 : 1, strokeOpacity: dimmed ? 0 : 1, strokeWidth: 1, fill: type === 'gradient' ? 'var(--raikou-color-gray-7)' : color, stroke: type === 'gradient' ? 'white' : color }, dotProps) : false} activeDot={withDots
                ? __assign({ fill: type === 'gradient' ? 'var(--raikou-color-gray-7)' : color, stroke: type === 'gradient' ? 'white' : color }, activeDotProps) : false} fill={color} stroke={type === 'gradient' ? "url(#".concat(gradientId, ")") : color} strokeWidth={strokeWidth} isAnimationActive={false} fillOpacity={dimmed ? 0 : fillOpacity} strokeOpacity={dimmed ? 0.5 : fillOpacity} connectNulls={connectNulls} type={curveType} strokeDasharray={item.strokeDasharray} yAxisId={item.yAxisId || 'left'} label={withPointLabels ? <PointLabel_1.PointLabel /> : undefined} {...(typeof lineProps === 'function' ? lineProps(item) : lineProps)}/>);
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
        : { type: 'number' })), { tickLine: withYTickLine ? { stroke: 'currentColor' } : false, allowDecimals: true, unit: unit, tickFormatter: valueFormatter }), getStyles('axis'));
    return (<core_1.Box ref={ref} {...getStyles('root')} onMouseLeave={handleMouseLeave} dir={dir || 'ltr'} {...others}>
      <recharts_1.ResponsiveContainer {...getStyles('container')}>
        <recharts_1.LineChart data={data} layout={orientation} margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
        }} {...lineChartProps}>
          {type === 'gradient' && (<defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                {stops}
              </linearGradient>
            </defs>)}

          {withLegend && (<recharts_1.Legend verticalAlign="top" content={function (payload) { return (<ChartLegend_1.ChartLegend payload={payload.payload} onHighlight={setHighlightedArea} legendPosition={(legendProps === null || legendProps === void 0 ? void 0 : legendProps.verticalAlign) || 'top'} classNames={resolvedClassNames} styles={resolvedStyles} series={series} showColor={type !== 'gradient'}/>); }} {...legendProps}/>)}

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
            }} content={function (_a) {
                var label = _a.label, payload = _a.payload;
                return (<ChartTooltip_1.ChartTooltip label={label} payload={payload} unit={unit} classNames={resolvedClassNames} styles={resolvedStyles} series={series} valueFormatter={valueFormatter} showColor={type !== 'gradient'}/>);
            }} {...tooltipProps}/>)}

          {lines}
          {referenceLinesItems}
          {children}
        </recharts_1.LineChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.LineChart.displayName = '@raikou/charts/LineChart';
