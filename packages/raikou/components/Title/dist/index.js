"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var o={};for(t in e)__hasOwnProp.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&__getOwnPropSymbols)for(var t of __getOwnPropSymbols(e))r.indexOf(t)<0&&__propIsEnum.call(e,t)&&(o[t]=e[t]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,t,_)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===t||__defProp(r,e,{get:()=>o[e],enumerable:!(_=__getOwnPropDesc(o,e))||_.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react=(__export(src_exports,{Title:()=>Title}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core2=require("@raikou/core"),import_core=require("@raikou/core"),headings=["h1","h2","h3","h4","h5","h6"];function getTitleSize(e,r){r=void 0!==r?r:"h"+e;return headings.includes(r)?{fontSize:`var(--raikou-${r}-font-size)`,fontWeight:`var(--raikou-${r}-font-weight)`,lineHeight:`var(--raikou-${r}-line-height)`}:{fontSize:(0,import_core.rem)(r),fontWeight:`var(--raikou-h${e}-font-weight)`,lineHeight:`var(--raikou-h${e}-line-height)`}}var Title_module_default={root:"m-8a5d1357"},defaultProps={order:1},varsResolver=(0,import_core2.createVarsResolver)((e,{order:r,size:o,lineClamp:t})=>{r=getTitleSize(r,o);return{root:{"--title-fw":r.fontWeight,"--title-lh":r.lineHeight,"--title-fz":r.fontSize,"--title-line-clamp":"number"==typeof t?t.toString():void 0}}}),Title=(0,import_core2.factory)((e,r)=>{var e=(0,import_core2.useProps)("Title",defaultProps,e),{classNames:o,className:t,style:_,styles:s,unstyled:a,order:l,vars:i,size:p,variant:n,lineClamp:c}=e,u=__objRest(e,["classNames","className","style","styles","unstyled","order","vars","size","variant","lineClamp"]),e=(0,import_core2.useStyles)({name:"Title",props:e,classes:Title_module_default,className:t,style:_,classNames:o,styles:s,unstyled:a,vars:i,varsResolver:varsResolver});return[1,2,3,4,5,6].includes(l)?import_react.default.createElement(import_core2.Box,__spreadValues(__spreadProps(__spreadValues({},e("root")),{component:"h"+l,variant:n,ref:r,mod:{order:l,"data-line-clamp":"number"==typeof c},size:p}),u)):null});Title.classes=Title_module_default,Title.displayName="@raikou/core/Title";