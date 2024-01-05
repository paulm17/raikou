var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React2 from"react";import{Box as Box2,factory as factory2,useProps as useProps2,useStyles,createVarsResolver,getFontSize,getLineHeight,getSpacing}from"@raikou/core";import React from"react";import{Box,factory,useProps}from"@raikou/core";import createStore from"pure-store";var useStore=createStore({getStyles:void 0,center:void 0,icon:void 0}),defaultProps={},ListItem=factory(((_props,ref)=>{const _a=useProps("ListItem",defaultProps,_props),{classNames:classNames,className:className,style:style,styles:styles,vars:vars,icon:icon,children:children}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","icon","children"]),_icon=icon||useStore.getState().icon,stylesApiProps={classNames:classNames,styles:styles};return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},useStore.getState().getStyles("item",__spreadProps(__spreadValues({},stylesApiProps),{className:className,style:style}))),{component:"li",mod:{"with-icon":!!_icon,centered:useStore.getState().center},ref:ref}),others),React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemWrapper",stylesApiProps)),_icon&&React.createElement("span",__spreadValues({},useStore.getState().getStyles("itemIcon",stylesApiProps)),_icon),React.createElement("span",__spreadValues({},useStore.getState().getStyles("itemLabel",stylesApiProps)),children)))}));ListItem.displayName="@raikou/core/ListItem";var List_module_default={root:"m-abbac491",item:"m-abb6bec2",itemWrapper:"m-75cd9f71",itemIcon:"m-60f83e5b"},defaultProps2={type:"unordered"},varsResolver=createVarsResolver(((_,{size:size,spacing:spacing})=>({root:{"--list-fz":getFontSize(size),"--list-lh":getLineHeight(size),"--list-spacing":getSpacing(spacing)}}))),List=factory2(((_props,ref)=>{const props=useProps2("List",defaultProps2,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,children:children,type:type,withPadding:withPadding,icon:icon,spacing:spacing,center:center,listStyleType:listStyleType}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","children","type","withPadding","icon","spacing","center","listStyleType"]),getStyles=useStyles({name:"List",classes:List_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return useStore.update((state=>{state.getStyles=getStyles,state.center=center,state.icon=icon})),React2.createElement(Box2,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{style:{listStyleType:listStyleType}})),{component:"unordered"===type?"ul":"ol",mod:{"with-padding":withPadding},ref:ref}),others),children)}));List.classes=List_module_default,List.displayName="@raikou/core/List",List.Item=ListItem;export{List,ListItem};