"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaGradient = AreaGradient;
function AreaGradient(_a) {
    var color = _a.color, id = _a.id, withGradient = _a.withGradient, fillOpacity = _a.fillOpacity;
    return (<>
      {withGradient ? (<linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={fillOpacity}/>
          <stop offset="100%" stopColor={color} stopOpacity={0.01}/>
        </linearGradient>) : (<linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={color} stopOpacity={fillOpacity !== null && fillOpacity !== void 0 ? fillOpacity : 0.2}/>
        </linearGradient>)}
    </>);
}
AreaGradient.displayName = '@raikou/charts/AreaGradient';
