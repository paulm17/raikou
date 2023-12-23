"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __defProps=Object.defineProperties;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropDescs=Object.getOwnPropertyDescriptors;var __getOwnPropNames=Object.getOwnPropertyNames;var __getOwnPropSymbols=Object.getOwnPropertySymbols;var __getProtoOf=Object.getPrototypeOf;var __hasOwnProp=Object.prototype.hasOwnProperty;var __propIsEnum=Object.prototype.propertyIsEnumerable;var __defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:true,configurable:true,writable:true,value}):obj[key]=value;var __spreadValues=(a,b)=>{for(var prop in b||(b={}))
if(__hasOwnProp.call(b,prop))
__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(b)){if(__propIsEnum.call(b,prop))
__defNormalProp(a,prop,b[prop]);}
return a;};var __spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b));var __objRest=(source,exclude)=>{var target={};for(var prop in source)
if(__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0)
target[prop]=source[prop];if(source!=null&&__getOwnPropSymbols)
for(var prop of __getOwnPropSymbols(source)){if(exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop))
target[prop]=source[prop];}
return target;};var __export=(target,all)=>{for(var name in all)
__defProp(target,name,{get:all[name],enumerable:true});};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from==="object"||typeof from==="function"){for(let key of __getOwnPropNames(from))
if(!__hasOwnProp.call(to,key)&&key!==except)
__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});}
return to;};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:true}):target,mod));var __toCommonJS=(mod)=>__copyProps(__defProp({},"__esModule",{value:true}),mod);var src_exports={};__export(src_exports,{Progress:()=>Progress,ProgressLabel:()=>ProgressLabel,ProgressRoot:()=>ProgressRoot,ProgressSection:()=>ProgressSection});module.exports=__toCommonJS(src_exports);var import_react8=__toESM(require("react"));var import_core4=require("@raikou/core");var import_react5=__toESM(require("react"));var import_core=require("@raikou/core");var import_react=__toESM(require("react"));function createSafeContext(errorMessage){const Context=(0,import_react.createContext)(null);const useSafeContext=()=>{const ctx=(0,import_react.useContext)(Context);if(ctx===null){throw new Error(errorMessage);}
return ctx;};const Provider=({children,value})=>import_react.default.createElement(Context.Provider,{value},children);return[Provider,useSafeContext];}
var import_react2=__toESM(require("react"));var import_react3=require("react");var import_react4=require("react");var[ProgressProvider,useProgressContext]=createSafeContext("Progress.Root component was not found in tree");var Progress_module_default={"root":"m-db6d6462","section":"m-2242eb65","stripes-animation":"m-81a374bd","label":"m-91e40b74"};var defaultProps={};var varsResolver=(0,import_core.createVarsResolver)((_,{size,radius})=>({root:{"--progress-size":(0,import_core.getSize)(size,"progress-size"),"--progress-radius":radius===void 0?void 0:(0,import_core.getRadius)(radius)}}));var ProgressRoot=(0,import_core.factory)((_props,ref)=>{const props=(0,import_core.useProps)("ProgressRoot",defaultProps,_props);const _a=props,{classNames,className,style,styles,unstyled,vars}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars"]);const getStyles=(0,import_core.useStyles)({name:"Progress",classes:Progress_module_default,props,className,style,classNames,styles,unstyled,vars,varsResolver});return import_react5.default.createElement(ProgressProvider,{value:{getStyles}},import_react5.default.createElement(import_core.Box,__spreadValues(__spreadValues({ref},getStyles("root")),others)));});ProgressRoot.classes=Progress_module_default;ProgressRoot.displayName="@raikou/core/ProgressRoot";var import_react6=__toESM(require("react"));var import_core2=require("@raikou/core");var defaultProps2={withAria:true};var ProgressSection=(0,import_core2.factory)((props,ref)=>{const _a=(0,import_core2.useProps)("ProgressSection",defaultProps2,props),{classNames,className,style,styles,vars,value,withAria,color,striped,animated}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","value","withAria","color","striped","animated"]);const ctx=useProgressContext();const theme=(0,import_core2.useRaikouTheme)();const ariaAttributes=withAria?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":value,"aria-valuetext":`${value}%`}:{};return import_react6.default.createElement(import_core2.Box,__spreadProps(__spreadValues(__spreadValues(__spreadValues({ref},ctx.getStyles("section",{className,classNames,styles,style})),others),ariaAttributes),{mod:{striped:striped||animated,animated},__vars:{"--progress-section-width":`${value}%`,"--progress-section-color":(0,import_core2.getThemeColor)(color,theme)}}));});ProgressSection.displayName="@raikou/core/ProgressSection";var import_react7=__toESM(require("react"));var import_core3=require("@raikou/core");var defaultProps3={};var ProgressLabel=(0,import_core3.factory)((props,ref)=>{const _a=(0,import_core3.useProps)("ProgressLabel",defaultProps3,props),{classNames,className,style,styles,vars}=_a,others=__objRest(_a,["classNames","className","style","styles","vars"]);const ctx=useProgressContext();return import_react7.default.createElement(import_core3.Box,__spreadValues(__spreadValues({ref},ctx.getStyles("label",{className,style,classNames,styles})),others));});ProgressLabel.displayName="@raikou/core/ProgressLabel";var defaultProps4={};var Progress=(0,import_core4.factory)((_props,ref)=>{const props=(0,import_core4.useProps)("Progress",defaultProps4,_props);const _a=props,{value,classNames,styles,vars,color,striped,animated,"aria-label":label}=_a,others=__objRest(_a,["value","classNames","styles","vars","color","striped","animated","aria-label"]);const{resolvedClassNames,resolvedStyles}=(0,import_core4.useResolvedStylesApi)({classNames,styles,props});return import_react8.default.createElement(ProgressRoot,__spreadValues({ref,classNames:resolvedClassNames,styles:resolvedStyles,vars},others),import_react8.default.createElement(ProgressSection,{value,color,striped,animated,"aria-label":label}));});Progress.displayName="@raikou/core/Progress";Progress.Section=ProgressSection;Progress.Root=ProgressRoot;Progress.Label=ProgressLabel;0&&(module.exports={Progress,ProgressLabel,ProgressRoot,ProgressSection});