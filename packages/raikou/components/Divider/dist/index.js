"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Divider:()=>Divider}),module.exports=__toCommonJS(src_exports);var import_react=__toESM(require("react")),import_core=require("@raikou/core"),Divider_module_default={root:"m-3eebeb36",label:"m-9e365f20"},defaultProps={orientation:"horizontal"},varsResolver=(0,import_core.createVarsResolver)(((theme,{color:color,variant:variant,size:size})=>({root:{"--divider-color":color?(0,import_core.getThemeColor)(color,theme):void 0,"--divider-border-style":variant,"--divider-size":(0,import_core.getSize)(size,"divider-size")}}))),Divider=(0,import_core.factory)(((_props,ref)=>{const props=(0,import_core.useProps)("Divider",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,color:color,orientation:orientation,label:label,labelPosition:labelPosition}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","color","orientation","label","labelPosition"]),getStyles=(0,import_core.useStyles)({name:"Divider",classes:Divider_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadProps(__spreadValues(__spreadValues({ref:ref,mod:{orientation:orientation,"with-label":!!label}},getStyles("root")),others),{role:"separator"}),label&&import_react.default.createElement(import_core.Box,__spreadValues({component:"span",mod:{position:labelPosition}},getStyles("label")),label))}));Divider.displayName="@raikou/core/Divider",Divider.classes=Divider_module_default;