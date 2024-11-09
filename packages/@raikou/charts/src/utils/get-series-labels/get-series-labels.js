"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesLabels = getSeriesLabels;
function getSeriesLabels(series) {
    if (!series) {
        return {};
    }
    return series.reduce(function (acc, item) {
        var matchFound = item.name.search(/\./);
        if (matchFound >= 0) {
            var key = item.name.substring(matchFound + 1);
            acc[key] = item.label;
            return acc;
        }
        acc[item.name] = item.label;
        return acc;
    }, {});
}
