var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,s,r)=>s in e?__defProp(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,__spreadValues=(e,s)=>{for(var r in s=s||{})__hasOwnProp.call(s,r)&&__defNormalProp(e,r,s[r]);if(__getOwnPropSymbols)for(var r of __getOwnPropSymbols(s))__propIsEnum.call(s,r)&&__defNormalProp(e,r,s[r]);return e},__spreadProps=(e,s)=>__defProps(e,__getOwnPropDescs(s)),__objRest=(e,s)=>{var r={};for(o in e)__hasOwnProp.call(e,o)&&s.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))s.indexOf(o)<0&&__propIsEnum.call(e,o)&&(r[o]=e[o]);return r};import React6 from"react";import{factory as factory4,useProps as useProps4,useResolvedStylesApi}from"@raikou/core";import React3 from"react";import{Box,factory,useProps,useStyles,createVarsResolver,getSize,getRadius}from"@raikou/core";import React,{createContext,useContext}from"react";function createSafeContext(s){const r=createContext(null);return[({children:e,value:s})=>React.createElement(r.Provider,{value:s},e),()=>{var e=useContext(r);if(null===e)throw new Error(s);return e}]}import React2,{createContext as createContext2,useContext as useContext2}from"react";import{useState}from"react";import{useEffect,useLayoutEffect}from"react";var[ProgressProvider,useProgressContext]=createSafeContext("Progress.Root component was not found in tree"),Progress_module_default={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"},defaultProps={},varsResolver=createVarsResolver((e,{size:s,radius:r})=>({root:{"--progress-size":getSize(s,"progress-size"),"--progress-radius":void 0===r?void 0:getRadius(r)}})),ProgressRoot=factory((e,s)=>{var e=useProps("ProgressRoot",defaultProps,e),{classNames:r,className:o,style:a,styles:t,unstyled:l,vars:c}=e,p=__objRest(e,["classNames","className","style","styles","unstyled","vars"]),e=useStyles({name:"Progress",classes:Progress_module_default,props:e,className:o,style:a,classNames:r,styles:t,unstyled:l,vars:c,varsResolver:varsResolver});return React3.createElement(ProgressProvider,{value:{getStyles:e}},React3.createElement(Box,__spreadValues(__spreadValues({ref:s},e("root")),p)))});ProgressRoot.classes=Progress_module_default,ProgressRoot.displayName="@raikou/core/ProgressRoot";import React4 from"react";import{Box as Box2,factory as factory2,useProps as useProps2,useRaikouTheme,getThemeColor}from"@raikou/core";var defaultProps2={withAria:!0},ProgressSection=factory2((e,s)=>{var e=useProps2("ProgressSection",defaultProps2,e),{classNames:r,className:o,style:a,styles:t,value:l,withAria:c,color:p,striped:i,animated:u}=e,e=__objRest(e,["classNames","className","style","styles","vars","value","withAria","color","striped","animated"]),m=useProgressContext(),n=useRaikouTheme(),c=c?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,"aria-valuetext":l+"%"}:{};return React4.createElement(Box2,__spreadProps(__spreadValues(__spreadValues(__spreadValues({ref:s},m.getStyles("section",{className:o,classNames:r,styles:t,style:a})),e),c),{mod:{striped:i||u,animated:u},__vars:{"--progress-section-width":l+"%","--progress-section-color":getThemeColor(p,n)}}))});ProgressSection.displayName="@raikou/core/ProgressSection";import React5 from"react";import{Box as Box3,factory as factory3,useProps as useProps3}from"@raikou/core";var defaultProps3={},ProgressLabel=factory3((e,s)=>{var e=useProps3("ProgressLabel",defaultProps3,e),{classNames:r,className:o,style:a,styles:t}=e,e=__objRest(e,["classNames","className","style","styles","vars"]),l=useProgressContext();return React5.createElement(Box3,__spreadValues(__spreadValues({ref:s},l.getStyles("label",{className:o,style:a,classNames:r,styles:t})),e))}),defaultProps4=(ProgressLabel.displayName="@raikou/core/ProgressLabel",{}),Progress=factory4((e,s)=>{var e=useProps4("Progress",defaultProps4,e),{value:r,classNames:o,styles:a,vars:t,color:l,striped:c,animated:p,"aria-label":i}=e,u=__objRest(e,["value","classNames","styles","vars","color","striped","animated","aria-label"]),{resolvedClassNames:o,resolvedStyles:a}=useResolvedStylesApi({classNames:o,styles:a,props:e});return React6.createElement(ProgressRoot,__spreadValues({ref:s,classNames:o,styles:a,vars:t},u),React6.createElement(ProgressSection,{value:r,color:l,striped:c,animated:p,"aria-label":i}))});Progress.displayName="@raikou/core/Progress",Progress.Section=ProgressSection,Progress.Root=ProgressRoot,Progress.Label=ProgressLabel;export{Progress,ProgressLabel,ProgressRoot,ProgressSection};