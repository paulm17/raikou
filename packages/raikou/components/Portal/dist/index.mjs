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
return target;};import React,{useRef,useState,forwardRef}from"react";import{createPortal}from"react-dom";import{useIsomorphicEffect,assignRef}from"@raikou/hooks";import{useProps}from"@raikou/core";function createPortalNode(props){const node=document.createElement("div");node.setAttribute("data-portal","true");typeof props.className==="string"&&node.classList.add(...props.className.split(" "));typeof props.style==="object"&&Object.assign(node.style,props.style);typeof props.id==="string"&&node.setAttribute("id",props.id);return node;}
var defaultProps={};var Portal=forwardRef((props,ref)=>{const _a=useProps("Portal",defaultProps,props),{children,target}=_a,others=__objRest(_a,["children","target"]);const[mounted,setMounted]=useState(false);const nodeRef=useRef(null);useIsomorphicEffect(()=>{setMounted(true);nodeRef.current=!target?createPortalNode(others):typeof target==="string"?document.querySelector(target):target;assignRef(ref,nodeRef.current);if(!target&&nodeRef.current){document.body.appendChild(nodeRef.current);}
return()=>{if(!target&&nodeRef.current){document.body.removeChild(nodeRef.current);}};},[target]);if(!mounted||!nodeRef.current){return null;}
return createPortal(React.createElement(React.Fragment,null,children),nodeRef.current);});Portal.displayName="@raikou/core/Portal";import React2 from"react";function OptionalPortal(_a){var _b=_a,{withinPortal=true,children}=_b,others=__objRest(_b,["withinPortal","children"]);if(withinPortal){return React2.createElement(Portal,__spreadValues({},others),children);}
return React2.createElement(React2.Fragment,null,children);}
OptionalPortal.displayName="@raikou/core/OptionalPortal";export{OptionalPortal,Portal};