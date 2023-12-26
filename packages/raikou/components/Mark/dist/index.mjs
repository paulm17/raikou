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
return target;};import React from"react";import{Box,factory,useProps,useStyles,createVarsResolver}from"@raikou/core";import{parseThemeColor}from"@raikou/core";function getMarkColor({color,theme,defaultShade}){const parsed=parseThemeColor({color,theme});if(!parsed.isThemeColor){return color;}
if(parsed.shade===void 0){return`var(--raikou-color-${parsed.color}-${defaultShade})`;}
return`var(${parsed.variable})`;}
var Mark_module_default={"root":"m-bcb3f3c2"};var defaultProps={color:"yellow"};var varsResolver=createVarsResolver((theme,{color})=>({root:{"--mark-bg-dark":getMarkColor({color,theme,defaultShade:5}),"--mark-bg-light":getMarkColor({color,theme,defaultShade:2})}}));var Mark=factory((_props,ref)=>{const props=useProps("Mark",defaultProps,_props);const _a=props,{classNames,className,style,styles,unstyled,vars,color,variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","color","variant"]);const getStyles=useStyles({name:"Mark",props,className,style,classes:Mark_module_default,classNames,styles,unstyled,vars,varsResolver});return React.createElement(Box,__spreadValues(__spreadValues({component:"mark",ref,variant},getStyles("root")),others));});Mark.classes=Mark_module_default;Mark.displayName="@raikou/core/Mark";export{Mark};