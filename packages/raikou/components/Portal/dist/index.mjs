var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React,{useRef,useState,forwardRef}from"react";import{createPortal}from"react-dom";import{useIsomorphicEffect,assignRef}from"@raikou/hooks";import{useProps}from"@raikou/core";function createPortalNode(props){const node=document.createElement("div");return node.setAttribute("data-portal","true"),"string"==typeof props.className&&node.classList.add(...props.className.split(" ").filter(Boolean)),"object"==typeof props.style&&Object.assign(node.style,props.style),"string"==typeof props.id&&node.setAttribute("id",props.id),node}var defaultProps={},Portal=forwardRef(((props,ref)=>{const _a=useProps("Portal",defaultProps,props),{children:children,target:target}=_a,others=__objRest(_a,["children","target"]),[mounted,setMounted]=useState(!1),nodeRef=useRef(null);return useIsomorphicEffect((()=>(setMounted(!0),nodeRef.current=target?"string"==typeof target?document.querySelector(target):target:createPortalNode(others),assignRef(ref,nodeRef.current),!target&&nodeRef.current&&document.body.appendChild(nodeRef.current),()=>{!target&&nodeRef.current&&document.body.removeChild(nodeRef.current)})),[target]),mounted&&nodeRef.current?createPortal(React.createElement(React.Fragment,null,children),nodeRef.current):null}));Portal.displayName="@raikou/core/Portal";import React2 from"react";function OptionalPortal(_a){var _b=_a,{withinPortal:withinPortal=!0,children:children}=_b,others=__objRest(_b,["withinPortal","children"]);return withinPortal?React2.createElement(Portal,__spreadValues({},others),children):React2.createElement(React2.Fragment,null,children)}OptionalPortal.displayName="@raikou/core/OptionalPortal";export{OptionalPortal,Portal};