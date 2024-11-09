"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaSplit = AreaSplit;
var core_1 = require("@raikou/core");
function AreaSplit(_a) {
    var offset = _a.offset, id = _a.id, colors = _a.colors, fillOpacity = _a.fillOpacity;
    var theme = (0, core_1.useRaikouTheme)();
    return (<linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset={offset} stopColor={(0, core_1.getThemeColor)(colors[0], theme)} stopOpacity={fillOpacity !== null && fillOpacity !== void 0 ? fillOpacity : 0.2}/>
      <stop offset={offset} stopColor={(0, core_1.getThemeColor)(colors[1], theme)} stopOpacity={fillOpacity !== null && fillOpacity !== void 0 ? fillOpacity : 0.2}/>
    </linearGradient>);
}
AreaSplit.displayName = '@raikou/charts/AreaSplit';
