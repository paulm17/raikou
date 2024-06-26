"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Overlay:()=>Overlay}),module.exports=__toCommonJS(src_exports);var import_react=__toESM(require("react")),import_core=require("@raikou/core"),Overlay_module_default={root:"m-9814e45f"},defaultProps={zIndex:(0,import_core.getDefaultZIndex)("modal")},varsResolver=(0,import_core.createVarsResolver)(((_,{gradient:gradient,color:color,backgroundOpacity:backgroundOpacity,blur:blur,radius:radius,zIndex:zIndex})=>({root:{"--overlay-bg":gradient||(void 0!==color||void 0!==backgroundOpacity)&&(0,import_core.rgba)(color||"#000",null!=backgroundOpacity?backgroundOpacity:.6)||void 0,"--overlay-filter":blur?`blur(${(0,import_core.rem)(blur)})`:void 0,"--overlay-radius":void 0===radius?void 0:(0,import_core.getRadius)(radius),"--overlay-z-index":null==zIndex?void 0:zIndex.toString()}}))),Overlay=(0,import_core.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core.useProps)("Overlay",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,fixed:fixed,center:center,children:children,radius:radius,zIndex:zIndex,gradient:gradient,blur:blur,color:color,backgroundOpacity:backgroundOpacity,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","fixed","center","children","radius","zIndex","gradient","blur","color","backgroundOpacity","mod"]),getStyles=(0,import_core.useStyles)({name:"Overlay",props:props,classes:Overlay_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({ref:ref},getStyles("root")),{mod:[{center:center,fixed:fixed},mod]}),others),children)}));Overlay.displayName="@raikou/core/Overlay",Overlay.classes=Overlay_module_default;