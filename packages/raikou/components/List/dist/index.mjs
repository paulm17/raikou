var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,s)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,__spreadValues=(e,t)=>{for(var s in t=t||{})__hasOwnProp.call(t,s)&&__defNormalProp(e,s,t[s]);if(__getOwnPropSymbols)for(var s of __getOwnPropSymbols(t))__propIsEnum.call(t,s)&&__defNormalProp(e,s,t[s]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t)),__objRest=(e,t)=>{var s={};for(r in e)__hasOwnProp.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&__getOwnPropSymbols)for(var r of __getOwnPropSymbols(e))t.indexOf(r)<0&&__propIsEnum.call(e,r)&&(s[r]=e[r]);return s};import React2 from"react";import{Box as Box2,factory as factory2,useProps as useProps2,useStyles,createVarsResolver,getFontSize,getLineHeight,getSpacing}from"@raikou/core";import React from"react";import{Box,factory,useProps}from"@raikou/core";import createStore from"pure-store";var useStore=createStore({getStyles:void 0,center:void 0,icon:void 0}),defaultProps={},ListItem=factory((e,t)=>{var e=useProps("ListItem",defaultProps,e),{classNames:s,className:r,style:a,styles:o,icon:l,children:p}=e,e=__objRest(e,["classNames","className","style","styles","vars","icon","children"]),l=l||useStore.getState().icon,s={classNames:s,styles:o};return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},useStore.getState().getStyles("item",__spreadProps(__spreadValues({},s),{className:r,style:a}))),{component:"li",mod:{"with-icon":!!l,centered:useStore.getState().center},ref:t}),e),React.createElement("div",__spreadValues({},useStore.getState().getStyles("itemWrapper",s)),l&&React.createElement("span",__spreadValues({},useStore.getState().getStyles("itemIcon",s)),l),React.createElement("span",__spreadValues({},useStore.getState().getStyles("itemLabel",s)),p)))}),List_module_default=(ListItem.displayName="@raikou/core/ListItem",{root:"m-abbac491",item:"m-abb6bec2",itemWrapper:"m-75cd9f71",itemIcon:"m-60f83e5b"}),defaultProps2={type:"unordered"},varsResolver=createVarsResolver((e,{size:t,spacing:s})=>({root:{"--list-fz":getFontSize(t),"--list-lh":getLineHeight(t),"--list-spacing":getSpacing(s)}})),List=factory2((e,t)=>{e=useProps2("List",defaultProps2,e);const s=e,{classNames:r,className:a,style:o,styles:l,unstyled:p,vars:i,children:c,type:n,withPadding:_,icon:m,center:d,listStyleType:u}=s,y=__objRest(s,["classNames","className","style","styles","unstyled","vars","children","type","withPadding","icon","spacing","center","listStyleType"]),f=useStyles({name:"List",classes:List_module_default,props:e,className:a,style:o,classNames:r,styles:l,unstyled:p,vars:i,varsResolver:varsResolver});return useStore.update(e=>{e.getStyles=f,e.center=d,e.icon=m}),React2.createElement(Box2,__spreadValues(__spreadProps(__spreadValues({},f("root",{style:{listStyleType:u}})),{component:"unordered"===n?"ul":"ol",mod:{"with-padding":_},ref:t}),y),c)});List.classes=List_module_default,List.displayName="@raikou/core/List",List.Item=ListItem;export{List,ListItem};