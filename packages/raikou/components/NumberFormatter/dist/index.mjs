var __defProp=Object.defineProperty;var __getOwnPropSymbols=Object.getOwnPropertySymbols;var __hasOwnProp=Object.prototype.hasOwnProperty;var __propIsEnum=Object.prototype.propertyIsEnumerable;var __defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:true,configurable:true,writable:true,value}):obj[key]=value;var __spreadValues=(a,b)=>{for(var prop in b||(b={}))
if(__hasOwnProp.call(b,prop))
__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(b)){if(__propIsEnum.call(b,prop))
__defNormalProp(a,prop,b[prop]);}
return a;};var __objRest=(source,exclude)=>{var target={};for(var prop in source)
if(__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0)
target[prop]=source[prop];if(source!=null&&__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(source)){if(exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop))
target[prop]=source[prop];}
return target;};import React from"react";import{NumericFormat}from"react-number-format";import{useProps}from"@raikou/core";var defaultProps={};function NumberFormatter(_props){const props=useProps("NumberFormatter",defaultProps,_props);const _a=props,{value,defaultValue}=_a,others=__objRest(_a,["value","defaultValue"]);if(value===void 0){return null;}
return React.createElement(NumericFormat,__spreadValues({displayType:"text",value},others));}
var extendNumberFormatter=(c)=>c;NumberFormatter.extend=extendNumberFormatter;NumberFormatter.displayName="@raikou/core/NumberFormatter";export{NumberFormatter};