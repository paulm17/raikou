"use strict";var __create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{InputsGroupFieldset:()=>InputsGroupFieldset}),module.exports=__toCommonJS(src_exports);var import_react5=__toESM(require("react")),import_react=__toESM(require("react")),import_react2=__toESM(require("react"));function createOptionalContext(initialValue=null){const Context=(0,import_react2.createContext)(initialValue);return[({children:children,value:value})=>import_react2.default.createElement(Context.Provider,{value:value},children),()=>(0,import_react2.useContext)(Context)]}var import_react3=require("react"),import_react4=require("react"),[InputWrapperProvider,useInputWrapperContext]=createOptionalContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});function InputsGroupFieldset({children:children,role:role}){const ctx=useInputWrapperContext();return ctx?import_react5.default.createElement("div",{role:role,"aria-labelledby":ctx.labelId,"aria-describedby":ctx.describedBy},children):import_react5.default.createElement(import_react5.default.Fragment,null,children)}