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
return target;};import React from"react";import{Box,polymorphicFactory,useProps,useStyles}from"@raikou/core";var Center_module_default={"root":"m-4451eb3a"};var defaultProps={};var Center=polymorphicFactory((_props,ref)=>{const props=useProps("Center",defaultProps,_props);const _a=props,{classNames,className,style,styles,unstyled,vars,inline}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","inline"]);const getStyles=useStyles({name:"Center",props,classes:Center_module_default,className,style,classNames,styles,unstyled,vars});return React.createElement(Box,__spreadValues(__spreadValues({ref,mod:{inline}},getStyles("root")),others));});Center.displayName="@raikou/core/Center";Center.classes=Center_module_default;export{Center};