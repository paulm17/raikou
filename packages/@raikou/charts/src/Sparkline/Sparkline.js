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
exports.Sparkline = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var core_1 = require("@raikou/core");
var AreaChart_1 = require("../AreaChart");
var classes = {};
var defaultProps = {
    withGradient: true,
    connectNulls: true,
    fillOpacity: 0.6,
    strokeWidth: 2,
    curveType: 'linear',
};
function getTrendColor(data, trendColors) {
    var first = data[0];
    var last = data[data.length - 1];
    if (first === null || last === null) {
        return trendColors.neutral || trendColors.positive;
    }
    if (first < last) {
        return trendColors.positive;
    }
    if (first > last) {
        return trendColors.negative;
    }
    return trendColors.neutral || trendColors.positive;
}
var varsResolver = (0, core_1.createVarsResolver)(function (theme, _a) {
    var color = _a.color, data = _a.data, trendColors = _a.trendColors;
    return ({
        root: {
            '--chart-color': trendColors
                ? (0, core_1.getThemeColor)(getTrendColor(data, trendColors), theme)
                : color
                    ? (0, core_1.getThemeColor)(color, theme)
                    : undefined,
        },
    });
});
exports.Sparkline = (0, core_1.factory)(function (_props, ref) {
    var props = (0, core_1.useProps)('Sparkline', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, data = props.data, withGradient = props.withGradient, fillOpacity = props.fillOpacity, curveType = props.curveType, strokeWidth = props.strokeWidth, trendColors = props.trendColors, connectNulls = props.connectNulls, areaProps = props.areaProps, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "data", "withGradient", "fillOpacity", "curveType", "strokeWidth", "trendColors", "connectNulls", "areaProps"]);
    var getStyles = (0, core_1.useStyles)({
        name: 'Sparkline',
        classes: classes,
        props: props,
        className: className,
        style: style,
        classNames: classNames,
        styles: styles,
        unstyled: unstyled,
        vars: vars,
        varsResolver: varsResolver,
    });
    var id = (0, react_1.useId)();
    var mappedData = (0, react_1.useMemo)(function () { return data.map(function (value, index) { return ({ value: value, index: index }); }); }, [data]);
    return (<core_1.Box ref={ref} {...getStyles('root')} {...others} dir="ltr">
      <recharts_1.ResponsiveContainer>
        <recharts_1.AreaChart data={mappedData}>
          <recharts_1.Area dataKey="value" type={curveType} fill={"url(#".concat(id, ")")} stroke="var(--chart-color, var(--raikou-color-blue-filled))" isAnimationActive={false} connectNulls={connectNulls} strokeWidth={strokeWidth} fillOpacity={1} {...areaProps}/>

          <defs>
            <AreaChart_1.AreaGradient id={id} color="var(--chart-color, var(--raikou-color-blue-filled))" fillOpacity={fillOpacity} withGradient={withGradient}/>
          </defs>
        </recharts_1.AreaChart>
      </recharts_1.ResponsiveContainer>
    </core_1.Box>);
});
exports.Sparkline.displayName = '@raikou/charts/Sparkline';
exports.Sparkline.classes = classes;
