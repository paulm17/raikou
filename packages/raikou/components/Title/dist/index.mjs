var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React from"react";import{factory,useProps,useStyles,createVarsResolver,Box}from"@raikou/core";import{rem}from"@raikou/core";var headings=["h1","h2","h3","h4","h5","h6"];function getTitleSize(order,size){const titleSize=void 0!==size?size:`h${order}`;return headings.includes(titleSize)?{fontSize:`var(--raikou-${titleSize}-font-size)`,fontWeight:`var(--raikou-${titleSize}-font-weight)`,lineHeight:`var(--raikou-${titleSize}-line-height)`}:{fontSize:rem(titleSize),fontWeight:`var(--raikou-h${order}-font-weight)`,lineHeight:`var(--raikou-h${order}-line-height)`}}var Title_module_default={root:"m-8a5d1357"},defaultProps={order:1},varsResolver=createVarsResolver(((_,{order:order,size:size,lineClamp:lineClamp})=>{const sizeVariables=getTitleSize(order,size);return{root:{"--title-fw":sizeVariables.fontWeight,"--title-lh":sizeVariables.lineHeight,"--title-fz":sizeVariables.fontSize,"--title-line-clamp":"number"==typeof lineClamp?lineClamp.toString():void 0}}})),Title=factory(((_props,ref)=>{const props=useProps("Title",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,order:order,vars:vars,size:size,variant:variant,lineClamp:lineClamp}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","order","vars","size","variant","lineClamp"]),getStyles=useStyles({name:"Title",props:props,classes:Title_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return[1,2,3,4,5,6].includes(order)?React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{component:`h${order}`,variant:variant,ref:ref,mod:{order:order,"data-line-clamp":"number"==typeof lineClamp},size:size}),others)):null}));Title.classes=Title_module_default,Title.displayName="@raikou/core/Title";export{Title};