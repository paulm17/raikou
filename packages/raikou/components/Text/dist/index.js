"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Text:()=>Text}),module.exports=__toCommonJS(src_exports);var import_react=__toESM(require("react")),import_core=require("@raikou/core"),Text_module_default={root:"m-b6d8b162"};function getTextTruncate(truncate){return"start"===truncate?"start":"end"===truncate||truncate?"end":void 0}var defaultProps={inherit:!1},varsResolver=(0,import_core.createVarsResolver)(((theme,{variant:variant,lineClamp:lineClamp,gradient:gradient,size:size,color:color})=>({root:{"--text-fz":(0,import_core.getFontSize)(size),"--text-lh":(0,import_core.getLineHeight)(size),"--text-gradient":"gradient"===variant?(0,import_core.getGradient)(gradient,theme):void 0,"--text-line-clamp":"number"==typeof lineClamp?lineClamp.toString():void 0,"--text-color":color?(0,import_core.getThemeColor)(color,theme):void 0}}))),Text=(0,import_core.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core.useProps)("Text",defaultProps,_props),_a=props,{lineClamp:lineClamp,truncate:truncate,inline:inline,inherit:inherit,gradient:gradient,span:span,__staticSelector:__staticSelector,vars:vars,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,variant:variant,mod:mod,size:size}=_a,others=__objRest(_a,["lineClamp","truncate","inline","inherit","gradient","span","__staticSelector","vars","className","style","classNames","styles","unstyled","variant","mod","size"]),getStyles=(0,import_core.useStyles)({name:["Text",__staticSelector],props:props,classes:Text_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{ref:ref,component:span?"span":"p",variant:variant,mod:[{"data-truncate":getTextTruncate(truncate),"data-line-clamp":"number"==typeof lineClamp,"data-inline":inline,"data-inherit":inherit},mod],size:size}),others))}));Text.classes=Text_module_default,Text.displayName="@raikou/core/Text";