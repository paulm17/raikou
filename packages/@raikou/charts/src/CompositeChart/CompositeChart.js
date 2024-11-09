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
exports.CompositeChart = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var BarChart_1 = require("../BarChart/BarChart");
var ChartLegend_1 = require("../ChartLegend");
var ChartTooltip_1 = require("../ChartTooltip");
var PointLabel_1 = require("../PointLabel/PointLabel");
var grid_chart_css_1 = require("../grid-chart.css");
var defaultProps = {
    withXAxis: true,
    withYAxis: true,
    withTooltip: true,
    tooltipAnimationDuration: 0,
    tickLine: 'y',
    strokeDasharray: '5 5',
    gridAxis: 'x',
    withDots: true,
    connectNulls: true,
    strokeWidth: 2,
    curveType: 'monotone',
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
exports.CompositeChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('CompositeChart', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, withLegend = props.withLegend, legendProps = props.legendProps, series = props.series, onMouseLeave = props.onMouseLeave, dataKey = props.dataKey, withTooltip = props.withTooltip, withXAxis = props.withXAxis, withYAxis = props.withYAxis, gridAxis = props.gridAxis, tickLine = props.tickLine, xAxisProps = props.xAxisProps, yAxisProps = props.yAxisProps, unit = props.unit, tooltipAnimationDuration = props.tooltipAnimationDuration, strokeDasharray = props.strokeDasharray, gridProps = props.gridProps, tooltipProps = props.tooltipProps, referenceLines = props.referenceLines, withDots = props.withDots, dotProps = props.dotProps, activeDotProps = props.activeDotProps, strokeWidth = props.strokeWidth, connectNulls = props.connectNulls, curveType = props.curveType, dir = props.dir, valueFormatter = props.valueFormatter, children = props.children, lineProps = props.lineProps, xAxisLabel = props.xAxisLabel, yAxisLabel = props.yAxisLabel, withRightYAxis = props.withRightYAxis, rightYAxisLabel = props.rightYAxisLabel, rightYAxisProps = props.rightYAxisProps, withPointLabels = props.withPointLabels, areaProps = props.areaProps, barProps = props.barProps, withBarValueLabel = props.withBarValueLabel, minBarSize = props.minBarSize, maxBarWidth = props.maxBarWidth, composedChartProps = props.composedChartProps, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "withLegend", "legendProps", "series", "onMouseLeave", "dataKey", "withTooltip", "withXAxis", "withYAxis", "gridAxis", "tickLine", "xAxisProps", "yAxisProps", "unit", "tooltipAnimationDuration", "strokeDasharray", "gridProps", "tooltipProps", "referenceLines", "withDots", "dotProps", "activeDotProps", "strokeWidth", "connectNulls", "curveType", "dir", "valueFormatter", "children", "lineProps", "xAxisLabel", "yAxisLabel", "withRightYAxis", "rightYAxisLabel", "rightYAxisProps", "withPointLabels", "areaProps", "barProps", "withBarValueLabel", "minBarSize", "maxBarWidth", "composedChartProps"]);
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
        name: 'CompositeChart',
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
    var lines = series.map(function (item) {
        var color = (0, core_1.getThemeColor)(item.color, theme);
        var dimmed = shouldHighlight && highlightedArea !== item.name;
        if (item.type === 'line') {
            return (<recharts_1.Line {...getStyles('line')} key={item.name} name={item.name} dataKey={item.name} dot={withDots
                    ? __assign({ fillOpacity: dimmed ? 0 : 1, strokeOpacity: dimmed ? 0 : 1, strokeWidth: 1, fill: color, stroke: color }, dotProps) : false} activeDot={withDots
                    ? __assign({ fill: 'var(--raikou-color-white)', stroke: color }, activeDotProps) : false} fill={color} stroke={color} strokeWidth={strokeWidth} isAnimationActive={false} fillOpacity={dimmed ? 0 : 1} strokeOpacity={dimmed ? 0.5 : 1} connectNulls={connectNulls} type={curveType} strokeDasharray={item.strokeDasharray} yAxisId={item.yAxisId || 'left'} label={withPointLabels ? <PointLabel_1.PointLabel /> : undefined} {...(typeof lineProps === 'function' ? lineProps(item) : lineProps)}/>);
        }
        if (item.type === 'area') {
            return (<recharts_1.Area {...getStyles('area')} name={item.name} type={curveType} dataKey={item.name} fill={color} strokeWidth={strokeWidth} stroke={color} isAnimationActive={false} connectNulls={connectNulls} dot={withDots
                    ? __assign({ fillOpacity: dimmed ? 0 : 1, strokeOpacity: dimmed ? 0 : 1, strokeWidth: 1, fill: color, stroke: color }, dotProps) : false} activeDot={withDots
                    ? __assign({ fill: theme.white, stroke: color, strokeWidth: 2, r: 4 }, activeDotProps) : false} fillOpacity={dimmed ? 0 : 0.2} strokeOpacity={dimmed ? 0.5 : 1} strokeDasharray={item.strokeDasharray} yAxisId={item.yAxisId || 'left'} label={withPointLabels ? <PointLabel_1.PointLabel /> : undefined} {...(typeof areaProps === 'function' ? areaProps(item) : areaProps)}/>);
        }
        if (item.type === 'bar') {
            return (<recharts_1.Bar {...getStyles('bar')} key={item.name} name={item.name} dataKey={item.name} fill={color} stroke={color} isAnimationActive={false} fillOpacity={dimmed ? 0.1 : 1} strokeOpacity={dimmed ? 0.2 : 0} label={withBarValueLabel ? <BarChart_1.BarLabel valueFormatter={valueFormatter}/> : undefined} yAxisId={item.yAxisId || 'left'} minPointSize={minBarSize} {...(typeof barProps === 'function' ? barProps(item) : barProps)}/>);
        }
        return null;
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
    var sharedYAxisProps = __assign({ axisLine: false, type: 'number', tickLine: withYTickLine ? { stroke: 'currentColor' } : false, allowDecimals: true, unit: unit, tickFormatter: valueFormatter }, getStyles('axis'));
    return (<core_1.Box ref={ref} {...getStyles('root')} onMouseLeave={handleMouseLeave} dir={dir || 'ltr'} {...others}>
      <recharts_1.ResponsiveContainer {...getStyles('container')}>
        <recharts_1.ComposedChart data={data} maxBarSize={maxBarWidth} margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
        }} {...composedChartProps}>
          {withLegend && (<recharts_1.Legend verticalAlign="top" content={function (payload) { return (<ChartLegend_1.ChartLegend payload={payload.payload} onHighlight={setHighlightedArea} legendPosition={(legendProps === null || legendProps === void 0 ? void 0 : legendProps.verticalAlign) || 'top'} classNames={resolvedClassNames} styles={resolvedStyles} series={series}/>); }} {...legendProps}/>)}

          <recharts_1.XAxis hide={!withXAxis} dataKey={dataKey} tick={{ transform: 'translate(0, 10)', fontSize: 12, fill: 'currentColor' }} stroke="" interval="preserveStartEnd" tickLine={withXTickLine ? { stroke: 'currentColor' } : false} minTickGap={5} {...getStyles('axis')} {...xAxisProps}>
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

          {withTooltip && (<recharts_1.Tooltip animationDuration={tooltipAnimationDuration} isAnimationActive={tooltipAnimationDuration !== 0} position={{ y: 0 }} cursor={{
                stroke: 'var(--chart-grid-color)',
                strokeWidth: 1,
                strokeDasharray: strokeDasharray,
            }} content={function (_a) {
                var label = _a.label, payload = _a.payload;
                return (<ChartTooltip_1.ChartTooltip label={label} payload={payload} unit={unit} classNames={resolvedClassNames} styles={resolvedStyles} series={series} valueFormatter={valueFormatter}/>);
            }} {...tooltipProps}/>)}

          {lines}
          {referenceLinesItems}
          {children}
        </recharts_1.ComposedChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.CompositeChart.displayName = '@raikou/charts/CompositeChart';
