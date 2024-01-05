var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React from"react";import{Box,factory,useProps,useStyles,createVarsResolver}from"@raikou/core";import{parseThemeColor}from"@raikou/core";function getMarkColor({color:color,theme:theme,defaultShade:defaultShade}){const parsed=parseThemeColor({color:color,theme:theme});return parsed.isThemeColor?void 0===parsed.shade?`var(--raikou-color-${parsed.color}-${defaultShade})`:`var(${parsed.variable})`:color}var Mark_module_default={root:"m-bcb3f3c2"},defaultProps={color:"yellow"},varsResolver=createVarsResolver(((theme,{color:color})=>({root:{"--mark-bg-dark":getMarkColor({color:color,theme:theme,defaultShade:5}),"--mark-bg-light":getMarkColor({color:color,theme:theme,defaultShade:2})}}))),Mark=factory(((_props,ref)=>{const props=useProps("Mark",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,color:color,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","color","variant"]),getStyles=useStyles({name:"Mark",props:props,className:className,style:style,classes:Mark_module_default,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return React.createElement(Box,__spreadValues(__spreadValues({component:"mark",ref:ref,variant:variant},getStyles("root")),others))}));Mark.classes=Mark_module_default,Mark.displayName="@raikou/core/Mark";export{Mark};