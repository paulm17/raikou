"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var o={};for(t in e)__hasOwnProp.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&__getOwnPropSymbols)for(var t of __getOwnPropSymbols(e))r.indexOf(t)<0&&__propIsEnum.call(e,t)&&(o[t]=e[t]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,t,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===t||__defProp(r,e,{get:()=>o[e],enumerable:!(a=__getOwnPropDesc(o,e))||a.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react3=(__export(src_exports,{Card:()=>Card,CardSection:()=>CardSection}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core3=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core"),Paper_module_default={root:"m-1b7284a3"},defaultProps={},varsResolver=(0,import_core.createVarsResolver)((e,{radius:r,shadow:o})=>({root:{"--paper-radius":void 0===r?void 0:(0,import_core.getRadius)(r),"--paper-shadow":(0,import_core.getShadow)(o)}})),Paper=(0,import_core.polymorphicFactory)((e,r)=>{var e=(0,import_core.useProps)("Paper",defaultProps,e),{classNames:o,className:t,style:a,styles:s,unstyled:_,withBorder:p,vars:l,variant:c}=e,d=__objRest(e,["classNames","className","style","styles","unstyled","withBorder","vars","radius","shadow","variant"]),e=(0,import_core.useStyles)({name:"Paper",props:e,classes:Paper_module_default,className:t,style:a,classNames:o,styles:s,unstyled:_,vars:l,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({ref:r,mod:{"data-with-border":p}},e("root")),{variant:c}),d))}),import_react2=(Paper.displayName="@raikou/core/Paper",Paper.classes=Paper_module_default,__toESM(require("react"))),import_core2=require("@raikou/core"),import_pure_store=__toESM(require("pure-store")),useStore=(0,import_pure_store.default)({getStyles:void 0}),defaultProps2={},CardSection=(0,import_core2.polymorphicFactory)((e,r)=>{var e=(0,import_core2.useProps)("CardSection",defaultProps2,e),{classNames:o,className:t,style:a,styles:s,withBorder:_,inheritPadding:p}=e,e=__objRest(e,["classNames","className","style","styles","vars","withBorder","inheritPadding"]),l=useStore.getState();return import_react2.default.createElement(import_core2.Box,__spreadValues(__spreadValues({ref:r,mod:{"with-border":_,"inherit-padding":p}},l.getStyles("section",{className:t,style:a,styles:s,classNames:o})),e))}),Card_module_default=(CardSection.displayName="@raikou/core/CardSection",{root:"m-e615b15f",section:"m-599a2148"}),defaultProps3={},varsResolver2=(0,import_core3.createVarsResolver)((e,{padding:r})=>({root:{"--card-padding":(0,import_core3.getSpacing)(r)}})),Card=(0,import_core3.polymorphicFactory)((e,r)=>{var e=(0,import_core3.useProps)("Card",defaultProps3,e),{classNames:o,className:t,style:a,styles:s,unstyled:_,vars:p,children:l}=e,c=__objRest(e,["classNames","className","style","styles","unstyled","vars","children","padding"]);const d=(0,import_core3.useStyles)({name:"Card",props:e,classes:Card_module_default,className:t,style:a,classNames:o,styles:s,unstyled:_,vars:p,varsResolver:varsResolver2}),i=(useStore.update(e=>{e.getStyles=d}),import_react3.Children.toArray(l));e=i.map((e,r)=>"object"==typeof e&&e&&"type"in e&&e.type===CardSection?(0,import_react3.cloneElement)(e,{"data-first-section":0===r||void 0,"data-last-section":r===i.length-1||void 0}):e);return import_react3.default.createElement(Paper,__spreadValues(__spreadValues({ref:r},d("root")),c),e)});Card.displayName="@raikou/core/Card",Card.Section=CardSection,Card.classes=Card_module_default;