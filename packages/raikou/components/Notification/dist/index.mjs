var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React9 from"react";import{Box as Box7,factory as factory2,useProps as useProps4,useStyles as useStyles4,createVarsResolver as createVarsResolver3,getRadius as getRadius2,getThemeColor as getThemeColor2}from"@raikou/core";import React5 from"react";import{Box as Box5,useProps,getThemeColor,useStyles,factory,getSize,createVarsResolver}from"@raikou/core";import React,{forwardRef}from"react";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var clsx_default=clsx;import{Box}from"@raikou/core";var Loader_module_default={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},Bars=forwardRef(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React.createElement(Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.barsLoader,className)},others),{ref:ref}),React.createElement("span",{className:Loader_module_default.bar}),React.createElement("span",{className:Loader_module_default.bar}),React.createElement("span",{className:Loader_module_default.bar}))}));import React2,{forwardRef as forwardRef2}from"react";import{Box as Box2}from"@raikou/core";var Oval=forwardRef2(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React2.createElement(Box2,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.ovalLoader,className)},others),{ref:ref}))}));import React3,{forwardRef as forwardRef3}from"react";import{Box as Box3}from"@raikou/core";var Progress=forwardRef3(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React3.createElement(Box3,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.progressLoader,className)},others),{ref:ref}),React3.createElement("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},React3.createElement("g",{fill:"none",fillRule:"evenodd"},React3.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},React3.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),React3.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},React3.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"}))))))}));import React4,{forwardRef as forwardRef4}from"react";import{Box as Box4}from"@raikou/core";var Dots=forwardRef4(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React4.createElement(Box4,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.dotsLoader,className)},others),{ref:ref}),React4.createElement("span",{className:Loader_module_default.dot}),React4.createElement("span",{className:Loader_module_default.dot}),React4.createElement("span",{className:Loader_module_default.dot}))})),Loader_module_default2={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},defaultLoaders={bars:Bars,oval:Oval,dots:Dots,progress:Progress},defaultProps={loaders:defaultLoaders,type:"oval"},varsResolver=createVarsResolver(((theme,{size:size,color:color})=>({root:{"--loader-size":getSize(size,"loader-size"),"--loader-color":color?getThemeColor(color,theme):void 0}}))),Loader=factory(((_props,ref)=>{const props=useProps("Loader",defaultProps,_props),_a=props,{size:size,color:color,type:type,vars:vars,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,loaders:loaders,variant:variant}=_a,others=__objRest(_a,["size","color","type","vars","className","style","classNames","styles","unstyled","loaders","variant"]),getStyles=useStyles({name:"Loader",props:props,classes:Loader_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return React5.createElement(Box5,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref,component:loaders[type],variant:variant,size:size}),others))}));Loader.defaultLoaders=defaultLoaders,Loader.displayName="@raikou/core/Loader",Loader.classes=Loader_module_default2;import React6,{forwardRef as forwardRef5}from"react";var CloseIcon=forwardRef5(((_a,ref)=>{var _b=_a,{size:size="var(--cb-icon-size, 70%)",style:style}=_b,others=__objRest(_b,["size","style"]);return React6.createElement("svg",__spreadValues({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:__spreadProps(__spreadValues({},style),{width:size,height:size}),ref:ref},others),React6.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}));CloseIcon.displayName="@raikou/core/CloseIcon";import React8 from"react";import{polymorphicFactory as polymorphicFactory2,useProps as useProps3,rem,getSize as getSize2,getRadius,createVarsResolver as createVarsResolver2,useStyles as useStyles3}from"@raikou/core";import React7 from"react";import{Box as Box6,useProps as useProps2,useStyles as useStyles2,polymorphicFactory}from"@raikou/core";var UnstyledButton_module_default={root:"m-87cf2631"},defaultProps2={__staticSelector:"UnstyledButton"},UnstyledButton=polymorphicFactory(((_props,ref)=>{const props=useProps2("UnstyledButton",defaultProps2,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=useStyles2({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return React7.createElement(Box6,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var CloseButton_module_default={root:"m-86a44da5","root--subtle":"m-220c80f2"},defaultProps3={variant:"subtle",size:"md"},varsResolver2=createVarsResolver2(((_,{size:size,radius:radius,iconSize:iconSize})=>({root:{"--cb-size":getSize2(size,"cb-size"),"--cb-radius":void 0===radius?void 0:getRadius(radius),"--cb-icon-size":rem(iconSize)}}))),CloseButton=polymorphicFactory2(((_props,ref)=>{const props=useProps3("CloseButton",defaultProps3,_props),_a=props,{iconSize:iconSize,children:children,vars:vars,radius:radius,className:className,classNames:classNames,style:style,styles:styles,unstyled:unstyled,"data-disabled":dataDisabled,disabled:disabled,variant:variant}=_a,others=__objRest(_a,["iconSize","children","vars","radius","className","classNames","style","styles","unstyled","data-disabled","disabled","variant"]),getStyles=useStyles3({name:"CloseButton",props:props,className:className,style:style,classes:CloseButton_module_default,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2});return React8.createElement(UnstyledButton,__spreadValues(__spreadProps(__spreadValues({ref:ref},others),{unstyled:unstyled,variant:variant,disabled:disabled,mod:{disabled:disabled||dataDisabled}}),getStyles("root",{variant:variant,active:!0})),React8.createElement(CloseIcon,null),children)}));CloseButton.displayName="@raikou/core/CloseButton",CloseButton.classes=CloseButton_module_default;var Notification_module_default={root:"m-a513464",icon:"m-a4ceffb",loader:"m-b0920b15",body:"m-a49ed24",title:"m-3feedf16",description:"m-3d733a3a",closeButton:"m-919a4d88"},defaultProps4={withCloseButton:!0},varsResolver3=createVarsResolver3(((theme,{radius:radius,color:color})=>({root:{"--notification-radius":void 0===radius?void 0:getRadius2(radius),"--notification-color":color?getThemeColor2(color,theme):void 0}}))),Notification=factory2(((_props,ref)=>{const props=useProps4("Notification",defaultProps4,_props),_a=props,{className:className,color:color,radius:radius,loading:loading,withCloseButton:withCloseButton,withBorder:withBorder,title:title,icon:icon,children:children,onClose:onClose,closeButtonProps:closeButtonProps,classNames:classNames,style:style,styles:styles,unstyled:unstyled,variant:variant,vars:vars}=_a,others=__objRest(_a,["className","color","radius","loading","withCloseButton","withBorder","title","icon","children","onClose","closeButtonProps","classNames","style","styles","unstyled","variant","vars"]),getStyles=useStyles4({name:"Notification",classes:Notification_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver3});return React9.createElement(Box7,__spreadProps(__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{mod:{"data-with-icon":!!icon||loading,"data-with-border":withBorder},ref:ref,variant:variant}),others),{role:"alert"}),icon&&!loading&&React9.createElement("div",__spreadValues({},getStyles("icon")),icon),loading&&React9.createElement(Loader,__spreadValues({size:28,color:color},getStyles("loader"))),React9.createElement("div",__spreadValues({},getStyles("body")),React9.createElement(Box7,__spreadProps(__spreadValues({},getStyles("description")),{mod:{"data-with-title":!!title}}),children)),withCloseButton&&React9.createElement(CloseButton,__spreadValues(__spreadProps(__spreadValues({iconSize:16,color:"gray"},closeButtonProps),{onClick:onClose}),getStyles("closeButton"))))}));Notification.classes=Notification_module_default,Notification.displayName="@raikou/core/Notification";export{Notification};