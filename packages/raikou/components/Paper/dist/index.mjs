var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,a)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,__spreadValues=(e,r)=>{for(var a in r=r||{})__hasOwnProp.call(r,a)&&__defNormalProp(e,a,r[a]);if(__getOwnPropSymbols)for(var a of __getOwnPropSymbols(r))__propIsEnum.call(r,a)&&__defNormalProp(e,a,r[a]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var a={};for(s in e)__hasOwnProp.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&__getOwnPropSymbols)for(var s of __getOwnPropSymbols(e))r.indexOf(s)<0&&__propIsEnum.call(e,s)&&(a[s]=e[s]);return a};import React from"react";import{Box,polymorphicFactory,useProps,useStyles,getRadius,getShadow,createVarsResolver}from"@raikou/core";var Paper_module_default={root:"m-1b7284a3"},defaultProps={},varsResolver=createVarsResolver((e,{radius:r,shadow:a})=>({root:{"--paper-radius":void 0===r?void 0:getRadius(r),"--paper-shadow":getShadow(a)}})),Paper=polymorphicFactory((e,r)=>{var e=useProps("Paper",defaultProps,e),{classNames:a,className:s,style:o,styles:t,unstyled:p,withBorder:l,vars:_,variant:d}=e,n=__objRest(e,["classNames","className","style","styles","unstyled","withBorder","vars","radius","shadow","variant"]),e=useStyles({name:"Paper",props:e,classes:Paper_module_default,className:s,style:o,classNames:a,styles:t,unstyled:p,vars:_,varsResolver:varsResolver});return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({ref:r,mod:{"data-with-border":l}},e("root")),{variant:d}),n))});Paper.displayName="@raikou/core/Paper",Paper.classes=Paper_module_default;export{Paper};