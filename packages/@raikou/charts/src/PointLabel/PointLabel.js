"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointLabel = PointLabel;
function PointLabel(_a) {
    var x = _a.x, y = _a.y, value = _a.value;
    return (<g transform={"translate(".concat(x, ",").concat(y, ")")}>
      <text x={0} y={0} dy={-8} dx={-10} textAnchor="top" fill="var(--chart-text-color, var(--raikou-color-dimmed))" fontSize={8}>
        {value}
      </text>
    </g>);
}
