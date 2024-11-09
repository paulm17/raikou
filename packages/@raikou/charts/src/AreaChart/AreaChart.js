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
exports.AreaChart = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var ChartLegend_1 = require("../ChartLegend");
var ChartTooltip_1 = require("../ChartTooltip");
var PointLabel_1 = require("../PointLabel/PointLabel");
var AreaGradient_1 = require("./AreaGradient");
var AreaSplit_1 = require("./AreaSplit");
var get_split_offset_1 = require("./get-split-offset");
var grid_chart_css_1 = require("../grid-chart.css");
function valueToPercent(value) {
    return "".concat((value * 100).toFixed(0), "%");
}
var defaultProps = {
    withXAxis: true,
    withYAxis: true,
    withDots: true,
    withTooltip: true,
    connectNulls: true,
    strokeWidth: 2,
    tooltipAnimationDuration: 0,
    fillOpacity: 0.2,
    tickLine: "y",
    strokeDasharray: "5 5",
    curveType: "monotone",
    gridAxis: "x",
    type: "default",
    splitColors: ["green.7", "red.7"],
    orientation: "horizontal",
};
var varsResolver = (0, core_1.createVarsResolver)(function (theme, _a) {
    var textColor = _a.textColor, gridColor = _a.gridColor;
    return ({
        root: {
            "--chart-text-color": textColor
                ? (0, core_1.getThemeColor)(textColor, theme)
                : undefined,
            "--chart-grid-color": gridColor
                ? (0, core_1.getThemeColor)(gridColor, theme)
                : undefined,
        },
    });
});
exports.AreaChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)("AreaChart", defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, series = props.series, withGradient = props.withGradient, dataKey = props.dataKey, withXAxis = props.withXAxis, withYAxis = props.withYAxis, curveType = props.curveType, gridProps = props.gridProps, withDots = props.withDots, tickLine = props.tickLine, strokeDasharray = props.strokeDasharray, gridAxis = props.gridAxis, unit = props.unit, yAxisProps = props.yAxisProps, xAxisProps = props.xAxisProps, dotProps = props.dotProps, activeDotProps = props.activeDotProps, strokeWidth = props.strokeWidth, tooltipAnimationDuration = props.tooltipAnimationDuration, type = props.type, legendProps = props.legendProps, tooltipProps = props.tooltipProps, withLegend = props.withLegend, withTooltip = props.withTooltip, areaChartProps = props.areaChartProps, fillOpacity = props.fillOpacity, splitColors = props.splitColors, splitOffset = props.splitOffset, connectNulls = props.connectNulls, onMouseLeave = props.onMouseLeave, orientation = props.orientation, referenceLines = props.referenceLines, dir = props.dir, valueFormatter = props.valueFormatter, children = props.children, areaProps = props.areaProps, xAxisLabel = props.xAxisLabel, yAxisLabel = props.yAxisLabel, withRightYAxis = props.withRightYAxis, rightYAxisLabel = props.rightYAxisLabel, rightYAxisProps = props.rightYAxisProps, withPointLabels = props.withPointLabels, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "series", "withGradient", "dataKey", "withXAxis", "withYAxis", "curveType", "gridProps", "withDots", "tickLine", "strokeDasharray", "gridAxis", "unit", "yAxisProps", "xAxisProps", "dotProps", "activeDotProps", "strokeWidth", "tooltipAnimationDuration", "type", "legendProps", "tooltipProps", "withLegend", "withTooltip", "areaChartProps", "fillOpacity", "splitColors", "splitOffset", "connectNulls", "onMouseLeave", "orientation", "referenceLines", "dir", "valueFormatter", "children", "areaProps", "xAxisLabel", "yAxisLabel", "withRightYAxis", "rightYAxisLabel", "rightYAxisProps", "withPointLabels"]);
    var theme = (0, core_1.useRaikouTheme)();
    var baseId = (0, react_1.useId)();
    var splitId = "".concat(baseId, "-split");
    var withXTickLine = gridAxis !== "none" && (tickLine === "x" || tickLine === "xy");
    var withYTickLine = gridAxis !== "none" && (tickLine === "y" || tickLine === "xy");
    var isAnimationActive = (tooltipAnimationDuration || 0) > 0;
    var _withGradient = typeof withGradient === "boolean" ? withGradient : type === "default";
    var stacked = type === "stacked" || type === "percent";
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
        name: "AreaChart",
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
    var dotsAreas = series.map(function (item) {
        var color = (0, core_1.getThemeColor)(item.color, theme);
        var dimmed = shouldHighlight && highlightedArea !== item.name;
        return (<recharts_1.Area {...getStyles("area")} activeDot={__assign({ fill: theme.white, stroke: color, strokeWidth: 2, r: 4 }, activeDotProps)} dot={__assign({ fill: color, fillOpacity: dimmed ? 0 : 1, strokeWidth: 2, r: 4 }, dotProps)} key={item.name} name={item.name} type={curveType} dataKey={item.name} fill="none" strokeWidth={strokeWidth} stroke="none" isAnimationActive={false} connectNulls={connectNulls} stackId={stacked ? "stack-dots" : undefined} yAxisId={item.yAxisId || "left"} {...(typeof areaProps === "function" ? areaProps(item) : areaProps)}/>);
    });
    var areas = series.map(function (item) {
        var id = "".concat(baseId, "-").concat(item.color.replace(/[^a-zA-Z0-9]/g, ""));
        var color = (0, core_1.getThemeColor)(item.color, theme);
        var dimmed = shouldHighlight && highlightedArea !== item.name;
        return (<react_1.Fragment key={item.name}>
        <defs>
          <AreaGradient_1.AreaGradient color={color} withGradient={_withGradient} id={id} fillOpacity={fillOpacity}/>
        </defs>
        <recharts_1.Area {...getStyles("area")} activeDot={false} dot={false} name={item.name} type={curveType} dataKey={item.name} fill={type === "split" ? "url(#".concat(splitId, ")") : "url(#".concat(id, ")")} strokeWidth={strokeWidth} stroke={color} isAnimationActive={false} connectNulls={connectNulls} stackId={stacked ? "stack" : undefined} fillOpacity={dimmed ? 0 : 1} strokeOpacity={dimmed ? 0.5 : 1} strokeDasharray={item.strokeDasharray} yAxisId={item.yAxisId || "left"} label={withPointLabels ? <PointLabel_1.PointLabel /> : undefined} {...(typeof areaProps === "function" ? areaProps(item) : areaProps)}/>
      </react_1.Fragment>);
    });
    var referenceLinesItems = referenceLines === null || referenceLines === void 0 ? void 0 : referenceLines.map(function (line, index) {
        var _a;
        var color = (0, core_1.getThemeColor)(line.color, theme);
        return (<recharts_1.ReferenceLine key={index} stroke={line.color ? color : "var(--chart-grid-color)"} strokeWidth={1} yAxisId={line.yAxisId || "left"} {...line} label={{
                value: line.label,
                fill: line.color ? color : "currentColor",
                fontSize: 12,
                position: (_a = line.labelPosition) !== null && _a !== void 0 ? _a : "insideBottomLeft",
            }} {...getStyles("referenceLine")}/>);
    });
    var sharedYAxisProps = __assign(__assign(__assign({ axisLine: false }, (orientation === "vertical"
        ? { dataKey: dataKey, type: "category" }
        : { type: "number" })), { tickLine: withYTickLine ? { stroke: "currentColor" } : false, allowDecimals: true, unit: unit, tickFormatter: type === "percent" ? valueToPercent : valueFormatter }), getStyles("axis"));
    return (<core_1.Box ref={ref} {...getStyles("root")} onMouseLeave={handleMouseLeave} dir={dir || "ltr"} {...others}>
      <recharts_1.ResponsiveContainer {...getStyles("container")}>
        <recharts_1.AreaChart data={data} stackOffset={type === "percent" ? "expand" : undefined} layout={orientation} margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 10 : undefined,
            right: yAxisLabel ? 5 : undefined,
        }} {...areaChartProps}>
          {referenceLinesItems}
          {withLegend && (<recharts_1.Legend verticalAlign="top" content={function (payload) { return (<ChartLegend_1.ChartLegend payload={payload.payload} onHighlight={setHighlightedArea} legendPosition={(legendProps === null || legendProps === void 0 ? void 0 : legendProps.verticalAlign) || "top"} classNames={resolvedClassNames} styles={resolvedStyles} series={series}/>); }} {...legendProps}/>)}

          <recharts_1.CartesianGrid strokeDasharray={strokeDasharray} vertical={gridAxis === "y" || gridAxis === "xy"} horizontal={gridAxis === "x" || gridAxis === "xy"} {...getStyles("grid")} {...gridProps}/>

          <recharts_1.XAxis hide={!withXAxis} {...(orientation === "vertical" ? { type: "number" } : { dataKey: dataKey })} tick={{
            transform: "translate(0, 10)",
            fontSize: 12,
            fill: "currentColor",
        }} stroke="" interval="preserveStartEnd" tickLine={withXTickLine ? { stroke: "currentColor" } : false} minTickGap={5} {...getStyles("axis")} {...xAxisProps}>
            {xAxisLabel && (<recharts_1.Label position="insideBottom" offset={-20} fontSize={12} {...getStyles("axisLabel")}>
                {xAxisLabel}
              </recharts_1.Label>)}
            {xAxisProps === null || xAxisProps === void 0 ? void 0 : xAxisProps.children}
          </recharts_1.XAxis>

          <recharts_1.YAxis yAxisId="left" orientation="left" tick={{
            transform: "translate(-10, 0)",
            fontSize: 12,
            fill: "currentColor",
        }} hide={!withYAxis} {...sharedYAxisProps} {...yAxisProps}>
            {yAxisLabel && (<recharts_1.Label position="insideLeft" angle={-90} textAnchor="middle" fontSize={12} offset={-5} {...getStyles("axisLabel")}>
                {yAxisLabel}
              </recharts_1.Label>)}
            {yAxisProps === null || yAxisProps === void 0 ? void 0 : yAxisProps.children}
          </recharts_1.YAxis>

          <recharts_1.YAxis yAxisId="right" orientation="right" tick={{
            transform: "translate(10, 0)",
            fontSize: 12,
            fill: "currentColor",
        }} hide={!withRightYAxis} {...sharedYAxisProps} {...rightYAxisProps}>
            {rightYAxisLabel && (<recharts_1.Label position="insideRight" angle={90} textAnchor="middle" fontSize={12} offset={-5} {...getStyles("axisLabel")}>
                {rightYAxisLabel}
              </recharts_1.Label>)}
            {yAxisProps === null || yAxisProps === void 0 ? void 0 : yAxisProps.children}
          </recharts_1.YAxis>

          {withTooltip && (<recharts_1.Tooltip animationDuration={tooltipAnimationDuration} isAnimationActive={isAnimationActive} position={orientation === "vertical" ? {} : { y: 0 }} cursor={{
                stroke: "var(--chart-grid-color)",
                strokeWidth: 1,
                strokeDasharray: strokeDasharray,
            }} content={function (_a) {
                var label = _a.label, payload = _a.payload;
                return (<ChartTooltip_1.ChartTooltip label={label} payload={payload} unit={unit} classNames={resolvedClassNames} styles={resolvedStyles} series={series} valueFormatter={valueFormatter}/>);
            }} {...tooltipProps}/>)}

          {type === "split" && (<defs>
              <AreaSplit_1.AreaSplit colors={splitColors} id={splitId} offset={splitOffset !== null && splitOffset !== void 0 ? splitOffset : (0, get_split_offset_1.getDefaultSplitOffset)({ data: data, series: series })} fillOpacity={fillOpacity}/>
            </defs>)}

          {areas}
          {withDots && dotsAreas}
          {children}
        </recharts_1.AreaChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.AreaChart.displayName = "@raikou/charts/AreaChart";
