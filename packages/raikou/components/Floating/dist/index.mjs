var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import{useRef,useEffect}from"react";function useDelayedHover({open:open,close:close,openDelay:openDelay,closeDelay:closeDelay}){const openTimeout=useRef(-1),closeTimeout=useRef(-1),clearTimeouts=()=>{window.clearTimeout(openTimeout.current),window.clearTimeout(closeTimeout.current)};return useEffect((()=>clearTimeouts),[]),{openDropdown:()=>{clearTimeouts(),0===openDelay?open():openTimeout.current=window.setTimeout(open,openDelay)},closeDropdown:()=>{clearTimeouts(),0===closeDelay?close():closeTimeout.current=window.setTimeout(close,closeDelay)}}}import{useState,useEffect as useEffect2}from"react";import{autoUpdate}from"@floating-ui/react";import{useDidUpdate}from"@raikou/hooks";function useFloatingAutoUpdate({opened:opened,floating:floating,position:position,positionDependencies:positionDependencies}){const[delayedUpdate,setDelayedUpdate]=useState(0);useEffect2((()=>{if(floating.refs.reference.current&&floating.refs.floating.current)return autoUpdate(floating.refs.reference.current,floating.refs.floating.current,floating.update)}),[floating.refs.reference.current,floating.refs.floating.current,opened,delayedUpdate,position]),useDidUpdate((()=>{floating.update()}),positionDependencies),useDidUpdate((()=>{setDelayedUpdate((c=>c+1))}),[opened])}function getFloatingPosition(dir,position){if("rtl"===dir&&(position.includes("right")||position.includes("left"))){const[side,placement]=position.split("-"),flippedPosition="right"===side?"left":"right";return void 0===placement?flippedPosition:`${flippedPosition}-${placement}`}return position}import React,{forwardRef}from"react";import{useDirection}from"@raikou/core";import{rem}from"@raikou/core";function horizontalSide(placement,arrowY,arrowOffset,arrowPosition){return"center"===placement||"center"===arrowPosition?{top:arrowY}:"end"===placement?{bottom:arrowOffset}:"start"===placement?{top:arrowOffset}:{}}function verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir){return"center"===placement||"center"===arrowPosition?{left:arrowX}:"end"===placement?{["ltr"===dir?"right":"left"]:arrowOffset}:"start"===placement?{["ltr"===dir?"left":"right"]:arrowOffset}:{}}var radiusByFloatingSide={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function getArrowPositionStyles({position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,arrowX:arrowX,arrowY:arrowY,dir:dir}){const[side,placement="center"]=position.split("-"),baseStyles={width:rem(arrowSize),height:rem(arrowSize),transform:"rotate(45deg)",position:"absolute",[radiusByFloatingSide[side]]:rem(arrowRadius)},arrowPlacement=rem(-arrowSize/2);return"left"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),horizontalSide(placement,arrowY,arrowOffset,arrowPosition)),{right:arrowPlacement,borderLeftColor:"transparent",borderBottomColor:"transparent"}):"right"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),horizontalSide(placement,arrowY,arrowOffset,arrowPosition)),{left:arrowPlacement,borderRightColor:"transparent",borderTopColor:"transparent"}):"top"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir)),{bottom:arrowPlacement,borderTopColor:"transparent",borderLeftColor:"transparent"}):"bottom"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir)),{top:arrowPlacement,borderBottomColor:"transparent",borderRightColor:"transparent"}):{}}var FloatingArrow=forwardRef(((_a,ref)=>{var _b=_a,{position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,visible:visible,arrowX:arrowX,arrowY:arrowY,style:style}=_b,others=__objRest(_b,["position","arrowSize","arrowOffset","arrowRadius","arrowPosition","visible","arrowX","arrowY","style"]);const{dir:dir}=useDirection();return visible?React.createElement("div",__spreadProps(__spreadValues({},others),{ref:ref,style:__spreadValues(__spreadValues({},style),getArrowPositionStyles({position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,dir:dir,arrowX:arrowX,arrowY:arrowY}))})):null}));FloatingArrow.displayName="@raikou/core/FloatingArrow";export{FloatingArrow,getFloatingPosition,useDelayedHover,useFloatingAutoUpdate};