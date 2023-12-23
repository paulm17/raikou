var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r=r||{})__hasOwnProp.call(r,t)&&__defNormalProp(e,t,r[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))__propIsEnum.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var t={};for(o in e)__hasOwnProp.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))r.indexOf(o)<0&&__propIsEnum.call(e,o)&&(t[o]=e[o]);return t};import React from"react";import{factory,useProps,useStyles,createVarsResolver,Box}from"@raikou/core";import{rem}from"@raikou/core";var headings=["h1","h2","h3","h4","h5","h6"];function getTitleSize(e,r){r=void 0!==r?r:"h"+e;return headings.includes(r)?{fontSize:`var(--raikou-${r}-font-size)`,fontWeight:`var(--raikou-${r}-font-weight)`,lineHeight:`var(--raikou-${r}-line-height)`}:{fontSize:rem(r),fontWeight:`var(--raikou-h${e}-font-weight)`,lineHeight:`var(--raikou-h${e}-line-height)`}}var Title_module_default={root:"m-8a5d1357"},defaultProps={order:1},varsResolver=createVarsResolver((e,{order:r,size:t,lineClamp:o})=>{r=getTitleSize(r,t);return{root:{"--title-fw":r.fontWeight,"--title-lh":r.lineHeight,"--title-fz":r.fontSize,"--title-line-clamp":"number"==typeof o?o.toString():void 0}}}),Title=factory((e,r)=>{var e=useProps("Title",defaultProps,e),{classNames:t,className:o,style:s,styles:a,unstyled:l,order:i,vars:n,size:p,variant:_,lineClamp:f}=e,u=__objRest(e,["classNames","className","style","styles","unstyled","order","vars","size","variant","lineClamp"]),e=useStyles({name:"Title",props:e,classes:Title_module_default,className:o,style:s,classNames:t,styles:a,unstyled:l,vars:n,varsResolver:varsResolver});return[1,2,3,4,5,6].includes(i)?React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},e("root")),{component:"h"+i,variant:_,ref:r,mod:{order:i,"data-line-clamp":"number"==typeof f},size:p}),u)):null});Title.classes=Title_module_default,Title.displayName="@raikou/core/Title";export{Title};