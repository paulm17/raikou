"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var o={};for(t in e)__hasOwnProp.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&__getOwnPropSymbols)for(var t of __getOwnPropSymbols(e))r.indexOf(t)<0&&__propIsEnum.call(e,t)&&(o[t]=e[t]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,t,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===t||__defProp(r,e,{get:()=>o[e],enumerable:!(s=__getOwnPropDesc(o,e))||s.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react2=(__export(src_exports,{SimpleGrid:()=>SimpleGrid}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core2=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core");function SimpleGridVariables({spacing:o,verticalSpacing:e,cols:t,selector:r}){const s=(0,import_core.useRaikouTheme)(),_=void 0===e?o:e;e=(0,import_core.filterProps)({"--sg-spacing-x":(0,import_core.getSpacing)((0,import_core.getBaseValue)(o)),"--sg-spacing-y":(0,import_core.getSpacing)((0,import_core.getBaseValue)(_)),"--sg-cols":null==(e=(0,import_core.getBaseValue)(t))?void 0:e.toString()});const a=(0,import_core.keys)(s.breakpoints).reduce((e,r)=>(e[r]||(e[r]={}),"object"==typeof o&&void 0!==o[r]&&(e[r]["--sg-spacing-x"]=(0,import_core.getSpacing)(o[r])),"object"==typeof _&&void 0!==_[r]&&(e[r]["--sg-spacing-y"]=(0,import_core.getSpacing)(_[r])),"object"==typeof t&&void 0!==t[r]&&(e[r]["--sg-cols"]=t[r]),e),{});var p=(0,import_core.getSortedBreakpoints)((0,import_core.keys)(a),s).filter(e=>0<(0,import_core.keys)(a[e.value]).length).map(e=>({query:`(min-width: ${s.breakpoints[e.value]})`,styles:a[e.value]}));return import_react.default.createElement(import_core.InlineStyles,{styles:e,media:p,selector:r})}var SimpleGrid_module_default={root:"m-2415a157"},defaultProps={cols:1,spacing:"md"},SimpleGrid=(0,import_core2.factory)((e,r)=>{var e=(0,import_core2.useProps)("SimpleGrid",defaultProps,e),{classNames:o,className:t,style:s,styles:_,unstyled:a,vars:p}=e,l=__objRest(e,["classNames","className","style","styles","unstyled","vars","cols","verticalSpacing","spacing"]),t=(0,import_core2.useStyles)({name:"SimpleGrid",classes:SimpleGrid_module_default,props:e,className:t,style:s,classNames:o,styles:_,unstyled:a,vars:p}),s=(0,import_core2.useRandomClassName)();return import_react2.default.createElement(import_react2.default.Fragment,null,import_react2.default.createElement("div",null,import_react2.default.createElement(SimpleGridVariables,__spreadProps(__spreadValues({},e),{selector:"."+s}))),import_react2.default.createElement(import_core2.Box,__spreadValues(__spreadValues({ref:r},t("root",{className:s})),l)))});SimpleGrid.classes=SimpleGrid_module_default,SimpleGrid.displayName="@raikou/core/SimpleGrid";