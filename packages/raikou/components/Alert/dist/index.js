"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Alert:()=>Alert}),module.exports=__toCommonJS(src_exports);var import_react4=__toESM(require("react")),import_core3=require("@raikou/core"),import_react=__toESM(require("react")),CloseIcon=(0,import_react.forwardRef)(((_a,ref)=>{var _b=_a,{size:size="var(--cb-icon-size, 70%)",style:style}=_b,others=__objRest(_b,["size","style"]);return import_react.default.createElement("svg",__spreadValues({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:__spreadProps(__spreadValues({},style),{width:size,height:size}),ref:ref},others),import_react.default.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}));CloseIcon.displayName="@raikou/core/CloseIcon";var import_react3=__toESM(require("react")),import_core2=require("@raikou/core"),import_react2=__toESM(require("react")),import_core=require("@raikou/core"),UnstyledButton_module_default={root:"m-87cf2631"},defaultProps={__staticSelector:"UnstyledButton"},UnstyledButton=(0,import_core.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core.useProps)("UnstyledButton",defaultProps,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=(0,import_core.useStyles)({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return import_react2.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var CloseButton_module_default={root:"m-86a44da5","root--subtle":"m-220c80f2"},defaultProps2={variant:"subtle",size:"md"},varsResolver=(0,import_core2.createVarsResolver)(((_,{size:size,radius:radius,iconSize:iconSize})=>({root:{"--cb-size":(0,import_core2.getSize)(size,"cb-size"),"--cb-radius":void 0===radius?void 0:(0,import_core2.getRadius)(radius),"--cb-icon-size":(0,import_core2.rem)(iconSize)}}))),CloseButton=(0,import_core2.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core2.useProps)("CloseButton",defaultProps2,_props),_a=props,{iconSize:iconSize,children:children,vars:vars,radius:radius,className:className,classNames:classNames,style:style,styles:styles,unstyled:unstyled,"data-disabled":dataDisabled,disabled:disabled,variant:variant}=_a,others=__objRest(_a,["iconSize","children","vars","radius","className","classNames","style","styles","unstyled","data-disabled","disabled","variant"]),getStyles=(0,import_core2.useStyles)({name:"CloseButton",props:props,className:className,style:style,classes:CloseButton_module_default,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return import_react3.default.createElement(UnstyledButton,__spreadValues(__spreadProps(__spreadValues({ref:ref},others),{unstyled:unstyled,variant:variant,disabled:disabled,mod:{disabled:disabled||dataDisabled}}),getStyles("root",{variant:variant,active:!0})),import_react3.default.createElement(CloseIcon,null),children)}));CloseButton.displayName="@raikou/core/CloseButton",CloseButton.classes=CloseButton_module_default;var Alert_module_default={root:"m-66836ed3","root--filled":"m-12b2e6d5","root--white":"m-cffd1856",wrapper:"m-a5d60502",body:"m-667c2793",title:"m-6a03f287",label:"m-698f4f23",icon:"m-667f2a6a",message:"m-7fa78076",closeButton:"m-87f54839"},defaultProps3={},varsResolver2=(0,import_core3.createVarsResolver)(((theme,{radius:radius,color:color,variant:variant})=>{const colors=theme.variantColorResolver({color:color||theme.primaryColor,theme:theme,variant:variant||"light"});return{root:{"--alert-radius":void 0===radius?void 0:(0,import_core3.getRadius)(radius),"--alert-bg":color||variant?colors.background:void 0,"--alert-color":color||variant?colors.color:void 0,"--alert-bd":color||variant?colors.border:void 0}}})),Alert=(0,import_core3.factory)(((_props,ref)=>{const props=(0,import_core3.useProps)("Alert",defaultProps3,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,radius:radius,color:color,title:title,children:children,id:id,icon:icon,withCloseButton:withCloseButton,onClose:onClose,closeButtonLabel:closeButtonLabel,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","radius","color","title","children","id","icon","withCloseButton","onClose","closeButtonLabel","variant"]),getStyles=(0,import_core3.useStyles)({name:"Alert",classes:Alert_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2}),rootId=`${id}-${(0,import_core3.useRandomClassName)()}`,titleId=title&&`${rootId}-title`||void 0,bodyId=`${rootId}-body`;return import_react4.default.createElement(import_core3.Box,__spreadProps(__spreadValues(__spreadProps(__spreadValues({id:rootId},getStyles("root",{variant:variant})),{variant:variant,ref:ref}),others),{role:"alert","aria-describedby":bodyId,"aria-labelledby":titleId}),import_react4.default.createElement("div",__spreadValues({},getStyles("wrapper")),icon&&import_react4.default.createElement("div",__spreadValues({},getStyles("icon")),icon),import_react4.default.createElement("div",__spreadValues({},getStyles("body")),title&&import_react4.default.createElement("div",__spreadProps(__spreadValues({},getStyles("title")),{"data-with-close-button":withCloseButton||void 0}),import_react4.default.createElement("span",__spreadValues({id:titleId},getStyles("label")),title)),children&&import_react4.default.createElement("div",__spreadValues({id:bodyId},getStyles("message")),children)),withCloseButton&&import_react4.default.createElement(CloseButton,__spreadProps(__spreadValues({},getStyles("closeButton")),{onClick:onClose,variant:"transparent",size:16,iconSize:16,"aria-label":closeButtonLabel}))))}));Alert.displayName="@raikou/core/Alert",Alert.classes=Alert_module_default;