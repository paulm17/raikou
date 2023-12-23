"use strict";var __create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__objRest=(e,r)=>{var o={};for(a in e)__hasOwnProp.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&__getOwnPropSymbols)for(var a of __getOwnPropSymbols(e))r.indexOf(a)<0&&__propIsEnum.call(e,a)&&(o[a]=e[a]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,a,t)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===a||__defProp(r,e,{get:()=>o[e],enumerable:!(t=__getOwnPropDesc(o,e))||t.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react=(__export(src_exports,{BackgroundImage:()=>BackgroundImage}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core=require("@raikou/core"),BackgroundImage_module_default={root:"m-2ce0de02"},defaultProps={},varsResolver=(0,import_core.createVarsResolver)((e,{radius:r})=>({root:{"--bi-radius":void 0===r?void 0:(0,import_core.getRadius)(r)}})),BackgroundImage=(0,import_core.polymorphicFactory)((e,r)=>{var e=(0,import_core.useProps)("BackgroundImage",defaultProps,e),{classNames:o,className:a,style:t,styles:_,unstyled:s,vars:l,src:p,variant:c}=e,n=__objRest(e,["classNames","className","style","styles","unstyled","vars","radius","src","variant"]),e=(0,import_core.useStyles)({name:"BackgroundImage",props:e,classes:BackgroundImage_module_default,className:a,style:t,classNames:o,styles:_,unstyled:s,vars:l,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadValues({ref:r,variant:c},e("root",{style:{backgroundImage:`url(${p})`}})),n))});BackgroundImage.displayName="@raikou/core/BackgroundImage",BackgroundImage.classes=BackgroundImage_module_default;