var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React2,{cloneElement,Children}from"react";import{Box as Box2,factory as factory2,useProps as useProps2,useStyles,createVarsResolver,rem,getRadius as getRadius2,getThemeColor as getThemeColor2}from"@raikou/core";import React from"react";import{Box,factory,useProps,getRadius,useRaikouTheme,getThemeColor}from"@raikou/core";import createStore from"pure-store";var useStore=createStore({getStyles:void 0}),defaultProps={},TimelineItem=factory(((_props,ref)=>{const _a=useProps("TimelineItem",defaultProps,_props),{classNames:classNames,className:className,style:style,styles:styles,vars:vars,__active:__active,__align:__align,__lineActive:__lineActive,__vars:__vars,bullet:bullet,radius:radius,color:color,lineVariant:lineVariant,children:children,title:title}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","__active","__align","__lineActive","__vars","bullet","radius","color","lineVariant","children","title"]),theme=useRaikouTheme(),stylesApiProps={classNames:classNames,styles:styles};return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},useStore.getState().getStyles("item",__spreadProps(__spreadValues({},stylesApiProps),{className:className,style:style}))),{mod:{"line-active":__lineActive,active:__active},ref:ref,__vars:{"--tli-radius":radius?getRadius(radius):void 0,"--tli-color":color?getThemeColor(color,theme):void 0,"--tli-border-style":lineVariant||void 0}}),others),React.createElement(Box,__spreadProps(__spreadValues({},useStore.getState().getStyles("itemBullet",stylesApiProps)),{mod:{"with-child":!!bullet,align:__align,active:__active}}),bullet),React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemBody",stylesApiProps)),title&&React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemTitle",stylesApiProps)),title),React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemContent",stylesApiProps)),children)))}));TimelineItem.displayName="@raikou/core/TimelineItem";var Timeline_module_default={root:"m-43657ece",itemTitle:"m-2ebe8099",item:"m-436178ff",itemBullet:"m-8affcee1",itemBody:"m-540e8f41"},defaultProps2={active:-1,align:"left",reverseActive:!1},varsResolver=createVarsResolver(((theme,{bulletSize:bulletSize,lineWidth:lineWidth,radius:radius,color:color})=>({root:{"--tl-bullet-size":rem(bulletSize),"--tl-line-width":rem(lineWidth),"--tl-radius":void 0===radius?void 0:getRadius2(radius),"--tl-color":color?getThemeColor2(color,theme):void 0}}))),Timeline=factory2(((_props,ref)=>{const props=useProps2("Timeline",defaultProps2,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,children:children,active:active,color:color,radius:radius,bulletSize:bulletSize,align:align,lineWidth:lineWidth,reverseActive:reverseActive}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","children","active","color","radius","bulletSize","align","lineWidth","reverseActive"]),getStyles=useStyles({name:"Timeline",classes:Timeline_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver}),_children=Children.toArray(children),items=_children.map(((item,index)=>{var _a2,_b;return cloneElement(item,{unstyled:unstyled,__align:align,__active:(null==(_a2=item.props)?void 0:_a2.active)||(reverseActive?active>=_children.length-index-1:active>=index),__lineActive:(null==(_b=item.props)?void 0:_b.lineActive)||(reverseActive?active>=_children.length-index-1:active-1>=index)})}));return useStore.update((state=>{state.getStyles=getStyles})),React2.createElement(Box2,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{mod:{align:align},ref:ref}),others),items)}));Timeline.classes=Timeline_module_default,Timeline.displayName="@raikou/core/Timeline",Timeline.Item=TimelineItem;export{Timeline,TimelineItem};