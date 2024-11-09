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
exports.ChartTooltip = void 0;
exports.getFilteredChartTooltipPayload = getFilteredChartTooltipPayload;
var core_1 = require("@raikou/core");
var utils_1 = require("../utils");
var ChartTooltip_css_1 = require("./ChartTooltip.css");
function updateChartTooltipPayload(payload) {
    return payload.map(function (item) {
        if (!item.payload || item.payload[item.name]) {
            return item;
        }
        var matchFound = item.name.search(/\./);
        if (matchFound >= 0) {
            var newDataKey_1 = item.name.substring(0, matchFound);
            var nestedPayload = __assign({}, item.payload[newDataKey_1]);
            var shallowPayload = Object.entries(item.payload).reduce(function (acc, current) {
                var _a;
                var k = current[0], v = current[1];
                return k === newDataKey_1 ? acc : __assign(__assign({}, acc), (_a = {}, _a[k] = v, _a));
            }, {});
            return __assign(__assign({}, item), { name: item.name.substring(matchFound + 1), payload: __assign(__assign({}, shallowPayload), nestedPayload) });
        }
        return item;
    });
}
function getFilteredChartTooltipPayload(payload, segmentId) {
    var duplicatesFilter = updateChartTooltipPayload(payload.filter(function (item) { return item.fill !== 'none' || !item.color; }));
    if (!segmentId) {
        return duplicatesFilter;
    }
    return duplicatesFilter.filter(function (item) { return item.name === segmentId; });
}
function getData(item, type) {
    if (type === 'radial' || type === 'scatter') {
        if (Array.isArray(item.value)) {
            return item.value[1] - item.value[0];
        }
        return item.value;
    }
    if (Array.isArray(item.payload[item.dataKey])) {
        return item.payload[item.dataKey][1] - item.payload[item.dataKey][0];
    }
    return item.payload[item.name];
}
var defaultProps = {
    type: 'area',
    showColor: true,
};
exports.ChartTooltip = (0, core_1.factory)(function (_props, ref) {
    var _a, _b;
    var props = (0, core_1.useProps)('ChartTooltip', defaultProps, _props);
    var classNames = props.classNames, className = props.className, style = props.style, styles = props.styles, unstyled = props.unstyled, vars = props.vars, payload = props.payload, label = props.label, unit = props.unit, type = props.type, segmentId = props.segmentId, mod = props.mod, series = props.series, valueFormatter = props.valueFormatter, showColor = props.showColor, others = __rest(props, ["classNames", "className", "style", "styles", "unstyled", "vars", "payload", "label", "unit", "type", "segmentId", "mod", "series", "valueFormatter", "showColor"]);
    var theme = (0, core_1.useRaikouTheme)();
    var getStyles = (0, core_1.useStyles)({
        name: 'ChartTooltip',
        classes: {
            tooltip: ChartTooltip_css_1.ChartTooltipStyle,
            tooltipItem: ChartTooltip_css_1.ChartTooltipItemStyle,
            tooltipItemBody: ChartTooltip_css_1.ChartTooltipItemBodyStyle,
            tooltipItemColor: ChartTooltip_css_1.ChartTooltipItemColorStyle,
            tooltipItemName: ChartTooltip_css_1.ChartTooltipItemNameStyle,
            tooltipItemData: ChartTooltip_css_1.ChartTooltipItemDataStyle,
            tooltipLabel: ChartTooltip_css_1.ChartTooltipLabelStyle,
            tooltipBody: ChartTooltip_css_1.ChartTooltipBodyStyle,
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
    var filteredPayload = getFilteredChartTooltipPayload(payload, segmentId);
    var scatterLabel = type === 'scatter' ? (_b = (_a = payload[0]) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.name : null;
    var labels = (0, utils_1.getSeriesLabels)(series);
    var _label = label || scatterLabel;
    var items = filteredPayload.map(function (item) {
        var _a;
        return (<div key={(_a = item === null || item === void 0 ? void 0 : item.key) !== null && _a !== void 0 ? _a : item.name} data-type={type} {...getStyles('tooltipItem')}>
      <div {...getStyles('tooltipItemBody')}>
        {showColor && (<core_1.ColorSwatch color={(0, core_1.getThemeColor)(item.color, theme)} size={12} {...getStyles('tooltipItemColor')} withShadow={false}/>)}
        <div {...getStyles('tooltipItemName')}>{labels[item.name] || item.name}</div>
      </div>
      <div {...getStyles('tooltipItemData')}>
        {typeof valueFormatter === 'function'
                ? valueFormatter(getData(item, type))
                : getData(item, type)}
        {unit || item.unit}
      </div>
    </div>);
    });
    return (<core_1.Box {...getStyles('tooltip')} mod={[{ type: type }, mod]} ref={ref} {...others}>
      {_label && <div {...getStyles('tooltipLabel')}>{_label}</div>}
      <div {...getStyles('tooltipBody')}>{items}</div>
    </core_1.Box>);
});
exports.ChartTooltip.displayName = '@raikou/charts/ChartTooltip';
