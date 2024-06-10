"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Card:()=>Card,CardSection:()=>CardSection}),module.exports=__toCommonJS(src_exports);var import_react3=__toESM(require("react")),import_core3=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core"),Paper_module_default={root:"m-1b7284a3"},defaultProps={},varsResolver=(0,import_core.createVarsResolver)(((_,{radius:radius,shadow:shadow})=>({root:{"--paper-radius":void 0===radius?void 0:(0,import_core.getRadius)(radius),"--paper-shadow":(0,import_core.getShadow)(shadow)}}))),Paper=(0,import_core.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core.useProps)("Paper",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,withBorder:withBorder,vars:vars,radius:radius,shadow:shadow,variant:variant,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","withBorder","vars","radius","shadow","variant","mod"]),getStyles=(0,import_core.useStyles)({name:"Paper",props:props,classes:Paper_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({ref:ref,mod:[{"data-with-border":withBorder},mod]},getStyles("root")),{variant:variant}),others))}));Paper.displayName="@raikou/core/Paper",Paper.classes=Paper_module_default;var import_react2=__toESM(require("react")),import_core2=require("@raikou/core"),import_pure_store=__toESM(require("pure-store")),useStore=(0,import_pure_store.default)({getStyles:void 0}),defaultProps2={},CardSection=(0,import_core2.polymorphicFactory)(((_props,ref)=>{const _a=(0,import_core2.useProps)("CardSection",defaultProps2,_props),{classNames:classNames,className:className,style:style,styles:styles,vars:vars,withBorder:withBorder,inheritPadding:inheritPadding,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","withBorder","inheritPadding","mod"]),ctx=useStore.getState();return import_react2.default.createElement(import_core2.Box,__spreadValues(__spreadValues({ref:ref,mod:[{"with-border":withBorder,"inherit-padding":inheritPadding},mod]},ctx.getStyles("section",{className:className,style:style,styles:styles,classNames:classNames})),others))}));CardSection.displayName="@raikou/core/CardSection";var Card_module_default={root:"m-e615b15f",section:"m-599a2148"},defaultProps3={},varsResolver2=(0,import_core3.createVarsResolver)(((_,{padding:padding})=>({root:{"--card-padding":(0,import_core3.getSpacing)(padding)}}))),Card=(0,import_core3.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core3.useProps)("Card",defaultProps3,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,children:children,padding:padding}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","children","padding"]),getStyles=(0,import_core3.useStyles)({name:"Card",props:props,classes:Card_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2});useStore.update((state=>{state.getStyles=getStyles}));const _children=import_react3.Children.toArray(children),content=_children.map(((child,index)=>"object"==typeof child&&child&&"type"in child&&child.type===CardSection?(0,import_react3.cloneElement)(child,{"data-first-section":0===index||void 0,"data-last-section":index===_children.length-1||void 0}):child));return import_react3.default.createElement(Paper,__spreadValues(__spreadValues({ref:ref},getStyles("root")),others),content)}));Card.displayName="@raikou/core/Card",Card.Section=CardSection,Card.classes=Card_module_default;