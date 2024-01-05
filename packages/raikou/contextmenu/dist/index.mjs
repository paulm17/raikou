var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React from"react";import{Box}from"@raikou/core";import clsx from"clsx";var ContextMenuDivider_module_default={root:"m-8e23fdc4"};function ContextMenuDivider({className:className,style:style}){return React.createElement(Box,{className:clsx(ContextMenuDivider_module_default.root,className),style:style})}import{Box as Box4,parseThemeColor,rgba}from"@raikou/core";import React2 from"react";import{Box as Box2,useProps,useStyles,polymorphicFactory}from"@raikou/core";var UnstyledButton_module_default={root:"m-87cf2631"},defaultProps={__staticSelector:"UnstyledButton"},UnstyledButton=polymorphicFactory(((_props,ref)=>{const props=useProps("UnstyledButton",defaultProps,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=useStyles({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return React2.createElement(Box2,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;import{useTimeout}from"@raikou/hooks";import clsx3 from"clsx";import React9,{useContext as useContext3,useRef as useRef2,useState as useState3}from"react";import React8,{useContext as useContext2}from"react";import{px,useDirection}from"@raikou/core";import React3 from"react";import{Box as Box3,polymorphicFactory as polymorphicFactory2,useProps as useProps2,useStyles as useStyles2,getRadius,getShadow,createVarsResolver}from"@raikou/core";var Paper_module_default={root:"m-1b7284a3"},defaultProps2={},varsResolver=createVarsResolver(((_,{radius:radius,shadow:shadow})=>({root:{"--paper-radius":void 0===radius?void 0:getRadius(radius),"--paper-shadow":getShadow(shadow)}}))),Paper=polymorphicFactory2(((_props,ref)=>{const props=useProps2("Paper",defaultProps2,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,withBorder:withBorder,vars:vars,radius:radius,shadow:shadow,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","withBorder","vars","radius","shadow","variant"]),getStyles=useStyles2({name:"Paper",props:props,classes:Paper_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return React3.createElement(Box3,__spreadValues(__spreadProps(__spreadValues({ref:ref,mod:{"data-with-border":withBorder}},getStyles("root")),{variant:variant}),others))}));Paper.displayName="@raikou/core/Paper",Paper.classes=Paper_module_default;import{useResizeObserver}from"@raikou/hooks";import clsx2 from"clsx";import React7,{createContext,useContext,useState as useState2}from"react";import React6 from"react";import React4,{useRef,useState,forwardRef}from"react";import{createPortal}from"react-dom";import{useIsomorphicEffect,assignRef}from"@raikou/hooks";import{useProps as useProps3}from"@raikou/core";function createPortalNode(props){const node=document.createElement("div");return node.setAttribute("data-portal","true"),"string"==typeof props.className&&node.classList.add(...props.className.split(" ").filter(Boolean)),"object"==typeof props.style&&Object.assign(node.style,props.style),"string"==typeof props.id&&node.setAttribute("id",props.id),node}var defaultProps3={},Portal=forwardRef(((props,ref)=>{const _a=useProps3("Portal",defaultProps3,props),{children:children,target:target}=_a,others=__objRest(_a,["children","target"]),[mounted,setMounted]=useState(!1),nodeRef=useRef(null);return useIsomorphicEffect((()=>(setMounted(!0),nodeRef.current=target?"string"==typeof target?document.querySelector(target):target:createPortalNode(others),assignRef(ref,nodeRef.current),!target&&nodeRef.current&&document.body.appendChild(nodeRef.current),()=>{!target&&nodeRef.current&&document.body.removeChild(nodeRef.current)})),[target]),mounted&&nodeRef.current?createPortal(React4.createElement(React4.Fragment,null,children),nodeRef.current):null}));Portal.displayName="@raikou/core/Portal";import{useHotkeys,useWindowEvent}from"@raikou/hooks";import React5 from"react";var ContextMenuOverlay_module_default={root:"m-e74cf6ed"};function ContextMenuOverlay({zIndex:zIndex,children:children,onHide:onHide}){const handleHide=e=>{e.preventDefault(),onHide()};return React5.createElement("div",{className:ContextMenuOverlay_module_default.root,style:{zIndex:zIndex},onClick:handleHide,onContextMenu:handleHide},children)}function ContextMenuPortal(_a){var _b=_a,{onHide:onHide,zIndex:zIndex}=_b,otherProps=__objRest(_b,["onHide","zIndex"]);return useWindowEvent("resize",onHide),useWindowEvent("scroll",onHide),useHotkeys([["Escape",onHide]]),React6.createElement(Portal,null,React6.createElement(ContextMenuOverlay,{zIndex:zIndex,onHide:onHide},React6.createElement(ContextMenu,__spreadProps(__spreadValues({},otherProps),{onHide:onHide}))))}var DEFAULT_SETTINGS={shadow:"sm",borderRadius:"xs",submenuDelay:500},ContextMenuSettingsCtx=createContext(DEFAULT_SETTINGS),ContextMenuCtx=createContext({showContextMenu:()=>()=>{},hideContextMenu:()=>{},isContextMenuVisible:!1});function ContextMenuProvider({zIndex:zIndex=9999,shadow:shadow=DEFAULT_SETTINGS.shadow,borderRadius:borderRadius=DEFAULT_SETTINGS.borderRadius,submenuDelay:submenuDelay=DEFAULT_SETTINGS.submenuDelay,children:children}){const[data,setData]=useState2(null),hideContextMenu=()=>{setData(null)};return React7.createElement(ContextMenuSettingsCtx.Provider,{value:{shadow:shadow,borderRadius:borderRadius,submenuDelay:submenuDelay}},React7.createElement(ContextMenuCtx.Provider,{value:{showContextMenu:(content,options)=>e=>{e.preventDefault(),e.stopPropagation(),setData({x:e.clientX,y:e.clientY,content:content,zIndex:(null==options?void 0:options.zIndex)||zIndex,className:null==options?void 0:options.className,style:null==options?void 0:options.style,classNames:null==options?void 0:options.classNames,styles:null==options?void 0:options.styles})},hideContextMenu:hideContextMenu,isContextMenuVisible:!!data}},children,data&&React7.createElement(ContextMenuPortal,__spreadValues({onHide:hideContextMenu},data))))}function useContextMenu(){return useContext(ContextMenuCtx)}function humanize(value){const str=value.replace(/([a-z\d])([A-Z]+)/g,"$1 $2").replace(/\W|_/g," ").trim().toLowerCase();return`${str.charAt(0).toUpperCase()}${str.slice(1)}`}var ContextMenu_module_default={root:"m-3f3d33c1"};function ContextMenu({x:x,y:y,content:content,zIndex:zIndex,onHide:onHide,className:className,style:style,classNames:classNames,styles:styles}){var _a;const{shadow:shadow,borderRadius:borderRadius}=useContext2(ContextMenuSettingsCtx),[paperRef]=useResizeObserver(),{width:width,height:height}=(null==(_a=paperRef.current)?void 0:_a.getBoundingClientRect())||{width:0,height:0};let windowWidth=0,windowHeight=0;"undefined"!=typeof window&&({innerWidth:windowWidth,innerHeight:windowHeight}=window);const{dir:dir}=useDirection();return React8.createElement(Paper,{ref:paperRef,shadow:shadow,radius:borderRadius,className:clsx2(ContextMenu_module_default.root,className,null==classNames?void 0:classNames.root),style:[({spacing:{md:md}})=>{const mdSpacing=px(md);return{zIndex:zIndex,top:y+height+mdSpacing>windowHeight?windowHeight-height-mdSpacing:y,left:"ltr"===dir?x+width+mdSpacing>windowWidth?windowWidth-width-mdSpacing:x:windowWidth-mdSpacing-(x-width-mdSpacing<0?width+mdSpacing:x)}},style,null==styles?void 0:styles.root]},Array.isArray(content)?content.map((_b=>{var _c=_b,{key:key,hidden:hidden,className:className2,style:style2,onClick:onClick,items:items,title:title}=_c,otherOptions=__objRest(_c,["key","hidden","className","style","onClick","items","title"]);return hidden?null:onClick||items?React8.createElement(ContextMenuItem,__spreadValues({key:key,className:clsx2(null==classNames?void 0:classNames.item,className2),style:[null==styles?void 0:styles.item,style2],title:null!=title?title:humanize(key),onClick:onClick,onHide:onHide,items:items},otherOptions)):React8.createElement(ContextMenuDivider,{key:key,className:clsx2(null==classNames?void 0:classNames.divider,className2),style:[null==styles?void 0:styles.divider,style2]})})):content(onHide))}var ContextMenuItem_module_default={"item-button":"m-fe87f320","button-title":"m-57a2c689"};function ContextMenuItem({className:className,style:style,icon:icon,title:title,color:color,disabled:disabled,onClick:onClick,onHide:onHide,items:items}){const ref=useRef2(null),{submenuDelay:submenuDelay}=useContext3(ContextMenuSettingsCtx),[submenuPosition,setSubmenuPosition]=useState3(null),handleClick=onClick?e=>{onHide(),onClick(e)}:void 0,{start:startShowingSubmenu,clear:stopShowingSubmenu}=useTimeout((()=>{const{top:y,right:x}=ref.current.getBoundingClientRect();setSubmenuPosition({x:x,y:y})}),submenuDelay),{start:startHidingSubmenu,clear:stopHidingSubmenu}=useTimeout((()=>{setSubmenuPosition(null)}),submenuDelay),hasItemsAndIsNotDisabled=items&&!disabled;return React9.createElement("div",{onMouseEnter:hasItemsAndIsNotDisabled?()=>{stopHidingSubmenu(),startShowingSubmenu()}:void 0,onMouseLeave:hasItemsAndIsNotDisabled?()=>{stopShowingSubmenu(),startHidingSubmenu()}:void 0},React9.createElement(UnstyledButton,{ref:ref,style:[theme=>{const parsedColor=color?parseThemeColor({color:color,theme:theme}).value:void 0;return{"--raikou-contextmenu-item-button-color":parsedColor||"var(--raikou-color-text)","--raikou-contextmenu-item-button-hover-bg-color-light":parsedColor?rgba(parsedColor,.08):rgba("#ced4da",.25),"--raikou-contextmenu-item-button-hover-bg-color-dark":parsedColor?rgba(parsedColor,.15):rgba("#5c5f66",.25),"--raikou-contextmenu-item-button-pressed-bg-color-light":parsedColor?rgba(parsedColor,.2):rgba("#ced4da",.5),"--raikou-contextmenu-item-button-pressed-bg-color-dark":parsedColor?rgba(parsedColor,.3):rgba("#5c5f66",.5)}},style],className:clsx3(ContextMenuItem_module_default["item-button"],className),disabled:disabled,onClick:handleClick},icon&&React9.createElement(Box4,{fz:0,mr:"xs",mt:-2},icon),React9.createElement("div",{className:ContextMenuItem_module_default["button-title"]},title),items&&React9.createElement(Box4,{fz:10,mt:-2,ml:"xs"},"▶")),submenuPosition&&React9.createElement(ContextMenu,__spreadValues({content:items,onHide:onHide},submenuPosition)))}export{ContextMenuCtx,ContextMenuDivider,ContextMenuItem,ContextMenuPortal,ContextMenuProvider,ContextMenuSettingsCtx,humanize,useContextMenu};