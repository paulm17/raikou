"use strict";var __create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Fieldset:()=>Fieldset}),module.exports=__toCommonJS(src_exports);var import_react=__toESM(require("react")),import_core=require("@raikou/core"),Fieldset_module_default={root:"m-e9408a47","root--default":"m-84c9523a","root--filled":"m-ef274e49","root--unstyled":"m-eda993d3",legend:"m-90794832","legend--unstyled":"m-74ca27fe"},defaultProps={variant:"default"},varsResolver=(0,import_core.createVarsResolver)(((_,{radius:radius})=>({root:{"--fieldset-radius":void 0===radius?void 0:(0,import_core.getRadius)(radius)}}))),Fieldset=(0,import_core.factory)(((_props,ref)=>{const props=(0,import_core.useProps)("Fieldset",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,legend:legend,variant:variant,children:children}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","legend","variant","children"]),getStyles=(0,import_core.useStyles)({name:"Fieldset",classes:Fieldset_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadValues({component:"fieldset",ref:ref,variant:variant},getStyles("root",{variant:variant})),others),legend&&import_react.default.createElement("legend",__spreadValues({},getStyles("legend",{variant:variant})),legend),children)}));Fieldset.displayName="@raikou/core/Fieldset";