var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(r,e,o)=>e in r?__defProp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,__spreadValues=(r,e)=>{for(var o in e=e||{})__hasOwnProp.call(e,o)&&__defNormalProp(r,o,e[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))__propIsEnum.call(e,o)&&__defNormalProp(r,o,e[o]);return r},__objRest=(r,e)=>{var o={};for(t in r)__hasOwnProp.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(null!=r&&__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))e.indexOf(t)<0&&__propIsEnum.call(r,t)&&(o[t]=r[t]);return o};import React from"react";import{NumericFormat}from"react-number-format";import{useProps}from"@raikou/core";var defaultProps={};function NumberFormatter(r){var r=useProps("NumberFormatter",defaultProps,r),e=r["value"],r=__objRest(r,["value","defaultValue"]);return void 0===e?null:React.createElement(NumericFormat,__spreadValues({displayType:"text",value:e},r))}var extendNumberFormatter=r=>r;NumberFormatter.extend=extendNumberFormatter,NumberFormatter.displayName="@raikou/core/NumberFormatter";export{NumberFormatter};