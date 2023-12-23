"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var o={};for(t in e)__hasOwnProp.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&__getOwnPropSymbols)for(var t of __getOwnPropSymbols(e))r.indexOf(t)<0&&__propIsEnum.call(e,t)&&(o[t]=e[t]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,t,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===t||__defProp(r,e,{get:()=>o[e],enumerable:!(a=__getOwnPropDesc(o,e))||a.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react=(__export(src_exports,{Badge:()=>Badge}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core=require("@raikou/core"),Badge_module_default={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},defaultProps={},varsResolver=(0,import_core.createVarsResolver)((e,{radius:r,color:o,gradient:t,variant:a,size:_})=>{t=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:t,variant:a||"filled"});return{root:{"--badge-height":(0,import_core.getSize)(_,"badge-height"),"--badge-padding-x":(0,import_core.getSize)(_,"badge-padding-x"),"--badge-fz":(0,import_core.getSize)(_,"badge-fz"),"--badge-radius":void 0===r?void 0:(0,import_core.getRadius)(r),"--badge-bg":o||a?t.background:void 0,"--badge-color":o||a?t.color:void 0,"--badge-bd":o||a?t.border:void 0,"--badge-dot-color":"dot"===a?(0,import_core.getThemeColor)(o,e):void 0}}}),Badge=(0,import_core.polymorphicFactory)((e,r)=>{var e=(0,import_core.useProps)("Badge",defaultProps,e),{classNames:o,className:t,style:a,styles:_,unstyled:s,vars:l,leftSection:p,rightSection:d,children:i,variant:c,fullWidth:n}=e,m=__objRest(e,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),e=(0,import_core.useStyles)({name:"Badge",props:e,classes:Badge_module_default,className:t,style:a,classNames:o,styles:_,unstyled:s,vars:l,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({variant:c,mod:{block:n}},e("root",{variant:c})),{ref:r}),m),p&&import_react.default.createElement("span",__spreadProps(__spreadValues({},e("section")),{"data-position":"left"}),p),import_react.default.createElement("span",__spreadValues({},e("label")),i),d&&import_react.default.createElement("span",__spreadProps(__spreadValues({},e("section")),{"data-position":"right"}),d))});Badge.displayName="@raikou/Badge",Badge.classes=Badge_module_default;