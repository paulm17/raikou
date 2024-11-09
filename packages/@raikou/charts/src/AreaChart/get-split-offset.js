"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSplitOffset = getSplitOffset;
exports.getDefaultSplitOffset = getDefaultSplitOffset;
function getSplitOffset(_a) {
    var data = _a.data, dataKey = _a.dataKey;
    var dataMax = Math.max.apply(Math, data.map(function (item) { return item[dataKey]; }));
    var dataMin = Math.min.apply(Math, data.map(function (item) { return item[dataKey]; }));
    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }
    return dataMax / (dataMax - dataMin);
}
function getDefaultSplitOffset(_a) {
    var data = _a.data, series = _a.series;
    if (series.length === 1) {
        var dataKey = series[0].name;
        return getSplitOffset({ data: data, dataKey: dataKey });
    }
    return 0.5;
}
