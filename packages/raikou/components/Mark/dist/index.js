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
return to;};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:true}):target,mod));var __toCommonJS=(mod)=>__copyProps(__defProp({},"__esModule",{value:true}),mod);var src_exports={};__export(src_exports,{Mark:()=>Mark});module.exports=__toCommonJS(src_exports);var import_react=__toESM(require("react"));var import_core2=require("@raikou/core");var import_core=require("@raikou/core");function getMarkColor({color,theme,defaultShade}){const parsed=(0,import_core.parseThemeColor)({color,theme});if(!parsed.isThemeColor){return color;}
if(parsed.shade===void 0){return`var(--raikou-color-${parsed.color}-${defaultShade})`;}
return`var(${parsed.variable})`;}
var Mark_module_default={"root":"m-bcb3f3c2"};var defaultProps={color:"yellow"};var varsResolver=(0,import_core2.createVarsResolver)((theme,{color})=>({root:{"--mark-bg-dark":getMarkColor({color,theme,defaultShade:5}),"--mark-bg-light":getMarkColor({color,theme,defaultShade:2})}}));var Mark=(0,import_core2.factory)((_props,ref)=>{const props=(0,import_core2.useProps)("Mark",defaultProps,_props);const _a=props,{classNames,className,style,styles,unstyled,vars,color,variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","color","variant"]);const getStyles=(0,import_core2.useStyles)({name:"Mark",props,className,style,classes:Mark_module_default,classNames,styles,unstyled,vars,varsResolver});return import_react.default.createElement(import_core2.Box,__spreadValues(__spreadValues({component:"mark",ref,variant},getStyles("root")),others));});Mark.classes=Mark_module_default;Mark.displayName="@raikou/core/Mark";0&&(module.exports={Mark});