var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(r,e,o)=>e in r?__defProp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,__spreadValues=(r,e)=>{for(var o in e=e||{})__hasOwnProp.call(e,o)&&__defNormalProp(r,o,e[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))__propIsEnum.call(e,o)&&__defNormalProp(r,o,e[o]);return r},__spreadProps=(r,e)=>__defProps(r,__getOwnPropDescs(e)),__objRest=(r,e)=>{var o={};for(p in r)__hasOwnProp.call(r,p)&&e.indexOf(p)<0&&(o[p]=r[p]);if(null!=r&&__getOwnPropSymbols)for(var p of __getOwnPropSymbols(r))e.indexOf(p)<0&&__propIsEnum.call(r,p)&&(o[p]=r[p]);return o};import React from"react";import{Box,factory,useProps}from"@raikou/core";var defaultProps={},Space=factory((r,e)=>{var r=useProps("Space",defaultProps,r),{w:o,h:p,miw:_,mih:a}=r,r=__objRest(r,["w","h","miw","mih"]);return React.createElement(Box,__spreadProps(__spreadValues({ref:e},r),{w:o,miw:null!=_?_:o,h:p,mih:null!=a?a:p}))});Space.displayName="@raikou/core/Space";export{Space};