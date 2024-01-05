var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React7 from"react";import{Box as Box3,factory as factory2,useProps as useProps4,useStyles as useStyles4,createVarsResolver as createVarsResolver3,getSize as getSize3,getRadius as getRadius2}from"@raikou/core";import React,{forwardRef}from"react";var CloseIcon=forwardRef(((_a,ref)=>{var _b=_a,{size:size="var(--cb-icon-size, 70%)",style:style}=_b,others=__objRest(_b,["size","style"]);return React.createElement("svg",__spreadValues({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:__spreadProps(__spreadValues({},style),{width:size,height:size}),ref:ref},others),React.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}));CloseIcon.displayName="@raikou/core/CloseIcon";import React3 from"react";import{polymorphicFactory as polymorphicFactory2,useProps as useProps2,rem,getSize,getRadius,createVarsResolver,useStyles as useStyles2}from"@raikou/core";import React2 from"react";import{Box,useProps,useStyles,polymorphicFactory}from"@raikou/core";var UnstyledButton_module_default={root:"m-87cf2631"},defaultProps={__staticSelector:"UnstyledButton"},UnstyledButton=polymorphicFactory(((_props,ref)=>{const props=useProps("UnstyledButton",defaultProps,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=useStyles({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return React2.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var CloseButton_module_default={root:"m-86a44da5","root--subtle":"m-220c80f2"},defaultProps2={variant:"subtle",size:"md"},varsResolver=createVarsResolver(((_,{size:size,radius:radius,iconSize:iconSize})=>({root:{"--cb-size":getSize(size,"cb-size"),"--cb-radius":void 0===radius?void 0:getRadius(radius),"--cb-icon-size":rem(iconSize)}}))),CloseButton=polymorphicFactory2(((_props,ref)=>{const props=useProps2("CloseButton",defaultProps2,_props),_a=props,{iconSize:iconSize,children:children,vars:vars,radius:radius,className:className,classNames:classNames,style:style,styles:styles,unstyled:unstyled,"data-disabled":dataDisabled,disabled:disabled,variant:variant}=_a,others=__objRest(_a,["iconSize","children","vars","radius","className","classNames","style","styles","unstyled","data-disabled","disabled","variant"]),getStyles=useStyles2({name:"CloseButton",props:props,className:className,style:style,classes:CloseButton_module_default,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return React3.createElement(UnstyledButton,__spreadValues(__spreadProps(__spreadValues({ref:ref},others),{unstyled:unstyled,variant:variant,disabled:disabled,mod:{disabled:disabled||dataDisabled}}),getStyles("root",{variant:variant,active:!0})),React3.createElement(CloseIcon,null),children)}));CloseButton.displayName="@raikou/core/CloseButton",CloseButton.classes=CloseButton_module_default;import React6 from"react";import{Box as Box2,factory,useProps as useProps3,useStyles as useStyles3,createVarsResolver as createVarsResolver2,getSize as getSize2}from"@raikou/core";import React4,{createContext,useContext}from"react";import React5,{createContext as createContext2,useContext as useContext2}from"react";function createOptionalContext(initialValue=null){const Context=createContext2(initialValue);return[({children:children,value:value})=>React5.createElement(Context.Provider,{value:value},children),()=>useContext2(Context)]}import{useState}from"react";import{useEffect,useLayoutEffect}from"react";var[PillGroupProvider,usePillGroupContext]=createOptionalContext(),[PillsInputProvider,usePillsInputContext]=createOptionalContext(),Pill_module_default={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"},defaultProps3={},varsResolver2=createVarsResolver2(((_,{gap:gap},{size:size})=>({group:{"--pg-gap":void 0!==gap?getSize2(gap):getSize2(size,"pg-gap")}}))),PillGroup=factory(((_props,ref)=>{const props=useProps3("PillGroup",defaultProps3,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,disabled:disabled}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","disabled"]),pillsInputCtx=usePillsInputContext(),_size=(null==pillsInputCtx?void 0:pillsInputCtx.size)||size||void 0,getStyles=useStyles3({name:"PillGroup",classes:Pill_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2,stylesCtx:{size:_size},rootSelector:"group"});return React6.createElement(PillGroupProvider,{value:{size:_size,disabled:disabled}},React6.createElement(Box2,__spreadValues(__spreadValues({ref:ref,size:_size},getStyles("group")),others)))}));PillGroup.classes=Pill_module_default,PillGroup.displayName="@raikou/core/PillGroup";var Pill_module_default2={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"},defaultProps4={variant:"default"},varsResolver3=createVarsResolver3(((_,{radius:radius},{size:size})=>({root:{"--pill-fz":getSize3(size,"pill-fz"),"--pill-height":getSize3(size,"pill-height"),"--pill-radius":void 0===radius?void 0:getRadius2(radius)}}))),Pill=factory2(((_props,ref)=>{const props=useProps4("Pill",defaultProps4,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,variant:variant,children:children,withRemoveButton:withRemoveButton,onRemove:onRemove,removeButtonProps:removeButtonProps,radius:radius,size:size,disabled:disabled}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),ctx=usePillGroupContext(),pillsInputCtx=usePillsInputContext(),_size=size||(null==ctx?void 0:ctx.size)||void 0,_variant="filled"===(null==pillsInputCtx?void 0:pillsInputCtx.variant)?"contrast":variant||"default",getStyles=useStyles4({name:"Pill",classes:Pill_module_default2,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver3,stylesCtx:{size:_size}});return React7.createElement(Box3,__spreadValues(__spreadProps(__spreadValues({component:"span",ref:ref,variant:_variant,size:_size},getStyles("root",{variant:_variant})),{mod:{"with-remove":withRemoveButton,disabled:disabled||(null==ctx?void 0:ctx.disabled)}}),others),React7.createElement("span",__spreadValues({},getStyles("label")),children),withRemoveButton&&React7.createElement(CloseButton,__spreadProps(__spreadValues(__spreadValues({variant:"transparent",radius:radius,tabIndex:-1,"aria-hidden":!0},removeButtonProps),getStyles("remove",{className:null==removeButtonProps?void 0:removeButtonProps.className,style:null==removeButtonProps?void 0:removeButtonProps.style})),{onMouseDown:event=>{var _a2;event.preventDefault(),event.stopPropagation(),null==(_a2=null==removeButtonProps?void 0:removeButtonProps.onMouseDown)||_a2.call(removeButtonProps,event)},onClick:event=>{var _a2;event.stopPropagation(),null==onRemove||onRemove(),null==(_a2=null==removeButtonProps?void 0:removeButtonProps.onClick)||_a2.call(removeButtonProps,event)}})))}));Pill.classes=Pill_module_default2,Pill.displayName="@raikou/core/Pill",Pill.Group=PillGroup;export{Pill,PillGroup};