"use strict";var __create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__objRest=(e,r)=>{var o={};for(_ in e)__hasOwnProp.call(e,_)&&r.indexOf(_)<0&&(o[_]=e[_]);if(null!=e&&__getOwnPropSymbols)for(var _ of __getOwnPropSymbols(e))r.indexOf(_)<0&&__propIsEnum.call(e,_)&&(o[_]=e[_]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,_,t)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===_||__defProp(r,e,{get:()=>o[e],enumerable:!(t=__getOwnPropDesc(o,e))||t.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react=(__export(src_exports,{Kbd:()=>Kbd}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core=require("@raikou/core"),Kbd_module_default={root:"m-dc6f14e2"},defaultProps={},varsResolver=(0,import_core.createVarsResolver)((e,{size:r})=>({root:{"--kbd-fz":(0,import_core.getSize)(r,"kbd-fz"),"--kbd-padding":(0,import_core.getSize)(r,"kbd-padding")}})),Kbd=(0,import_core.factory)((e,r)=>{var e=(0,import_core.useProps)("Kbd",defaultProps,e),{classNames:o,className:_,style:t,styles:s,unstyled:a,vars:p}=e,l=__objRest(e,["classNames","className","style","styles","unstyled","vars"]),e=(0,import_core.useStyles)({name:"Kbd",classes:Kbd_module_default,props:e,className:_,style:t,classNames:o,styles:s,unstyled:a,vars:p,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadValues({component:"kbd",ref:r},e("root")),l))});Kbd.classes=Kbd_module_default,Kbd.displayName="@raikou/core/Kbd";