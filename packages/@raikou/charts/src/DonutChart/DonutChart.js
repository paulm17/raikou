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
exports.DonutChart = void 0;
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var ChartTooltip_1 = require("../ChartTooltip/ChartTooltip");
var DonutChart_css_1 = require("./DonutChart.css");
var defaultProps = {
    withTooltip: true,
    withLabelsLine: true,
    paddingAngle: 0,
    thickness: 20,
    size: 160,
    strokeWidth: 1,
    startAngle: 0,
    endAngle: 360,
    tooltipDataSource: 'all',
};
var varsResolver = (0, core_1.createVarsResolver)(function (theme, _a) {
    var strokeColor = _a.strokeColor, labelColor = _a.labelColor, withLabels = _a.withLabels, size = _a.size;
    return ({
        root: {
            '--chart-stroke-color': strokeColor ? (0, core_1.getThemeColor)(strokeColor, theme) : undefined,
            '--chart-labels-color': labelColor ? (0, core_1.getThemeColor)(labelColor, theme) : undefined,
            '--chart-size': withLabels ? (0, core_1.rem)(size + 80) : (0, core_1.rem)(size),
        },
    });
});
exports.DonutChart = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('DonutChart', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, withTooltip = props.withTooltip, tooltipAnimationDuration = props.tooltipAnimationDuration, tooltipProps = props.tooltipProps, pieProps = props.pieProps, paddingAngle = props.paddingAngle, withLabels = props.withLabels, withLabelsLine = props.withLabelsLine, size = props.size, thickness = props.thickness, strokeWidth = props.strokeWidth, startAngle = props.startAngle, endAngle = props.endAngle, tooltipDataSource = props.tooltipDataSource, chartLabel = props.chartLabel, children = props.children, pieChartProps = props.pieChartProps, valueFormatter = props.valueFormatter, strokeColor = props.strokeColor, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "withTooltip", "tooltipAnimationDuration", "tooltipProps", "pieProps", "paddingAngle", "withLabels", "withLabelsLine", "size", "thickness", "strokeWidth", "startAngle", "endAngle", "tooltipDataSource", "chartLabel", "children", "pieChartProps", "valueFormatter", "strokeColor"]);
    var theme = (0, core_1.useRaikouTheme)();
    var getStyles = (0, core_1.useStyles)({
        name: 'DonutChart',
        classes: {
            root: DonutChart_css_1.DonutChartRootStyle,
            label: DonutChart_css_1.DonutChartLabelStyle,
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
    var _a = (0, core_1.useResolvedStylesApi)({
        classNames: classNames,
        styles: styles,
        props: props,
    }), resolvedClassNames = _a.resolvedClassNames, resolvedStyles = _a.resolvedStyles;
    var cells = data.map(function (item, index) { return (<recharts_1.Cell key={index} fill={(0, core_1.getThemeColor)(item.color, theme)} stroke="var(--chart-stroke-color, var(--raikou-color-body))" strokeWidth={strokeWidth}/>); });
    return (<core_1.Box ref={ref} size={size} {...getStyles('root')} {...others}>
      <recharts_1.ResponsiveContainer>
        <recharts_1.PieChart {...pieChartProps}>
          <recharts_1.Pie data={data} innerRadius={size / 2 - thickness} outerRadius={size / 2} dataKey="value" isAnimationActive={false} paddingAngle={paddingAngle} startAngle={startAngle} endAngle={endAngle} label={withLabels
            ? {
                fill: 'var(--chart-labels-color, var(--raikou-color-dimmed))',
                fontSize: 12,
                fontFamily: 'var(--raikou-font-family)',
            }
            : false} labelLine={withLabelsLine
            ? {
                stroke: 'var(--chart-label-color, var(--raikou-color-dimmed))',
                strokeWidth: 1,
            }
            : false} {...pieProps}>
            {cells}
          </recharts_1.Pie>

          {chartLabel && (<text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" {...getStyles('label')}>
              {chartLabel}
            </text>)}

          {withTooltip && (<recharts_1.Tooltip animationDuration={tooltipAnimationDuration} isAnimationActive={false} content={function (_a) {
                var _b;
                var payload = _a.payload;
                return (<ChartTooltip_1.ChartTooltip payload={data} classNames={resolvedClassNames} styles={resolvedStyles} type="radial" segmentId={tooltipDataSource === 'segment' ? (_b = payload === null || payload === void 0 ? void 0 : payload[0]) === null || _b === void 0 ? void 0 : _b.name : undefined} valueFormatter={valueFormatter}/>);
            }} {...tooltipProps}/>)}

          {children}
        </recharts_1.PieChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.DonutChart.displayName = '@raikou/charts/DonutChart';
