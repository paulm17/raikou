var __defProp=Object.defineProperty;var __defProps=Object.defineProperties;var __getOwnPropDescs=Object.getOwnPropertyDescriptors;var __getOwnPropSymbols=Object.getOwnPropertySymbols;var __hasOwnProp=Object.prototype.hasOwnProperty;var __propIsEnum=Object.prototype.propertyIsEnumerable;var __defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:true,configurable:true,writable:true,value}):obj[key]=value;var __spreadValues=(a,b)=>{for(var prop in b||(b={}))
if(__hasOwnProp.call(b,prop))
__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(b)){if(__propIsEnum.call(b,prop))
__defNormalProp(a,prop,b[prop]);}
return a;};var __spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b));var __objRest=(source,exclude)=>{var target={};for(var prop in source)
if(__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0)
target[prop]=source[prop];if(source!=null&&__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(source)){if(exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop))
target[prop]=source[prop];}
return target;};import React2,{cloneElement,Children}from"react";import{Box as Box2,factory as factory2,useProps as useProps2,useStyles,createVarsResolver,rem,getRadius as getRadius2,getThemeColor as getThemeColor2}from"@raikou/core";import React from"react";import{Box,factory,useProps,getRadius,useRaikouTheme,getThemeColor}from"@raikou/core";import createStore from"pure-store";var useStore=createStore({getStyles:void 0});var defaultProps={};var TimelineItem=factory((_props,ref)=>{const props=useProps("TimelineItem",defaultProps,_props);const _a=props,{classNames,className,style,styles,vars,__active,__align,__lineActive,__vars,bullet,radius,color,lineVariant,children,title}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","__active","__align","__lineActive","__vars","bullet","radius","color","lineVariant","children","title"]);const theme=useRaikouTheme();const stylesApiProps={classNames,styles};return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},useStore.getState().getStyles("item",__spreadProps(__spreadValues({},stylesApiProps),{className,style}))),{mod:{"line-active":__lineActive,active:__active},ref,__vars:{"--tli-radius":radius?getRadius(radius):void 0,"--tli-color":color?getThemeColor(color,theme):void 0,"--tli-border-style":lineVariant||void 0}}),others),React.createElement(Box,__spreadProps(__spreadValues({},useStore.getState().getStyles("itemBullet",stylesApiProps)),{mod:{"with-child":!!bullet,align:__align,active:__active}}),bullet),React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemBody",stylesApiProps)),title&&React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemTitle",stylesApiProps)),title),React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemContent",stylesApiProps)),children)));});TimelineItem.displayName="@raikou/core/TimelineItem";var Timeline_module_default={"root":"m-43657ece","itemTitle":"m-2ebe8099","item":"m-436178ff","itemBullet":"m-8affcee1","itemBody":"m-540e8f41"};var defaultProps2={active:-1,align:"left",reverseActive:false};var varsResolver=createVarsResolver((theme,{bulletSize,lineWidth,radius,color})=>({root:{"--tl-bullet-size":rem(bulletSize),"--tl-line-width":rem(lineWidth),"--tl-radius":radius===void 0?void 0:getRadius2(radius),"--tl-color":color?getThemeColor2(color,theme):void 0}}));var Timeline=factory2((_props,ref)=>{const props=useProps2("Timeline",defaultProps2,_props);const _a=props,{classNames,className,style,styles,unstyled,vars,children,active,color,radius,bulletSize,align,lineWidth,reverseActive}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","children","active","color","radius","bulletSize","align","lineWidth","reverseActive"]);const getStyles=useStyles({name:"Timeline",classes:Timeline_module_default,props,className,style,classNames,styles,unstyled,vars,varsResolver});const _children=Children.toArray(children);const items=_children.map((item,index)=>{var _a2,_b;return cloneElement(item,{unstyled,__align:align,__active:((_a2=item.props)==null?void 0:_a2.active)||(reverseActive?active>=_children.length-index-1:active>=index),__lineActive:((_b=item.props)==null?void 0:_b.lineActive)||(reverseActive?active>=_children.length-index-1:active-1>=index)});});useStore.update((state)=>{state.getStyles=getStyles;});return React2.createElement(Box2,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{mod:{align},ref}),others),items);});Timeline.classes=Timeline_module_default;Timeline.displayName="@raikou/core/Timeline";Timeline.Item=TimelineItem;export{Timeline,TimelineItem};