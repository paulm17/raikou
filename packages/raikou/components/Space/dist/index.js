"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var o={};for(_ in e)__hasOwnProp.call(e,_)&&r.indexOf(_)<0&&(o[_]=e[_]);if(null!=e&&__getOwnPropSymbols)for(var _ of __getOwnPropSymbols(e))r.indexOf(_)<0&&__propIsEnum.call(e,_)&&(o[_]=e[_]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,_,t)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===_||__defProp(r,e,{get:()=>o[e],enumerable:!(t=__getOwnPropDesc(o,e))||t.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react=(__export(src_exports,{Space:()=>Space}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core=require("@raikou/core"),defaultProps={},Space=(0,import_core.factory)((e,r)=>{var e=(0,import_core.useProps)("Space",defaultProps,e),{w:o,h:_,miw:t,mih:p}=e,e=__objRest(e,["w","h","miw","mih"]);return import_react.default.createElement(import_core.Box,__spreadProps(__spreadValues({ref:r},e),{w:o,miw:null!=t?t:o,h:_,mih:null!=p?p:_}))});Space.displayName="@raikou/core/Space";