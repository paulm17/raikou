var __defProp=Object.defineProperty;var __getOwnPropSymbols=Object.getOwnPropertySymbols;var __hasOwnProp=Object.prototype.hasOwnProperty;var __propIsEnum=Object.prototype.propertyIsEnumerable;var __defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:true,configurable:true,writable:true,value}):obj[key]=value;var __spreadValues=(a,b)=>{for(var prop in b||(b={}))
if(__hasOwnProp.call(b,prop))
__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(b)){if(__propIsEnum.call(b,prop))
__defNormalProp(a,prop,b[prop]);}
return a;};var __objRest=(source,exclude)=>{var target={};for(var prop in source)
if(__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0)
target[prop]=source[prop];if(source!=null&&__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(source)){if(exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop))
target[prop]=source[prop];}
return target;};import React from"react";import{Box,polymorphicFactory,useProps,useStyles,getRadius,createVarsResolver}from"@raikou/core";var BackgroundImage_module_default={"root":"m-2ce0de02"};var defaultProps={};var varsResolver=createVarsResolver((_,{radius})=>({root:{"--bi-radius":radius===void 0?void 0:getRadius(radius)}}));var BackgroundImage=polymorphicFactory((_props,ref)=>{const props=useProps("BackgroundImage",defaultProps,_props);const _a=props,{classNames,className,style,styles,unstyled,vars,radius,src,variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","radius","src","variant"]);const getStyles=useStyles({name:"BackgroundImage",props,classes:BackgroundImage_module_default,className,style,classNames,styles,unstyled,vars,varsResolver});return React.createElement(Box,__spreadValues(__spreadValues({ref,variant},getStyles("root",{style:{backgroundImage:`url(${src})`}})),others));});BackgroundImage.displayName="@raikou/core/BackgroundImage";BackgroundImage.classes=BackgroundImage_module_default;export{BackgroundImage};