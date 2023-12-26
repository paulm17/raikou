"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getOwnPropSymbols=Object.getOwnPropertySymbols;var __getProtoOf=Object.getPrototypeOf;var __hasOwnProp=Object.prototype.hasOwnProperty;var __propIsEnum=Object.prototype.propertyIsEnumerable;var __defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:true,configurable:true,writable:true,value}):obj[key]=value;var __spreadValues=(a,b)=>{for(var prop in b||(b={}))
if(__hasOwnProp.call(b,prop))
__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(b)){if(__propIsEnum.call(b,prop))
__defNormalProp(a,prop,b[prop]);}
return a;};var __objRest=(source,exclude)=>{var target={};for(var prop in source)
if(__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0)
target[prop]=source[prop];if(source!=null&&__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(source)){if(exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop))
target[prop]=source[prop];}
return target;};var __export=(target,all)=>{for(var name in all)
__defProp(target,name,{get:all[name],enumerable:true});};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from==="object"||typeof from==="function"){for(let key of __getOwnPropNames(from))
if(!__hasOwnProp.call(to,key)&&key!==except)
__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});}
return to;};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:true}):target,mod));var __toCommonJS=(mod)=>__copyProps(__defProp({},"__esModule",{value:true}),mod);var src_exports={};__export(src_exports,{CopyButton:()=>CopyButton});module.exports=__toCommonJS(src_exports);var import_react=__toESM(require("react"));var import_hooks=require("@raikou/hooks");var import_core=require("@raikou/core");var defaultProps={timeout:1e3};function CopyButton(props){const _a=(0,import_core.useProps)("CopyButton",defaultProps,props),{children,timeout,value}=_a,others=__objRest(_a,["children","timeout","value"]);const clipboard=(0,import_hooks.useClipboard)({timeout});const copy=()=>clipboard.copy(value);return import_react.default.createElement(import_react.default.Fragment,null,children(__spreadValues({copy,copied:clipboard.copied},others)));}
CopyButton.displayName="@raikou/core/CopyButton";0&&(module.exports={CopyButton});