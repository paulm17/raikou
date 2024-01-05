var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React2 from"react";import cx from"clsx";import{polymorphicFactory as polymorphicFactory2,useProps as useProps2}from"@raikou/core";import React from"react";import{Box,polymorphicFactory,useStyles,useProps,getGradient,createVarsResolver,getFontSize,getLineHeight}from"@raikou/core";var Text_module_default={root:"m-b6d8b162"};function getTextTruncate(truncate){return"start"===truncate?"start":"end"===truncate||truncate?"end":void 0}var defaultProps={inherit:!1},varsResolver=createVarsResolver(((theme,{variant:variant,lineClamp:lineClamp,gradient:gradient,size:size})=>({root:{"--text-fz":getFontSize(size),"--text-lh":getLineHeight(size),"--text-gradient":"gradient"===variant?getGradient(gradient,theme):void 0,"--text-line-clamp":"number"==typeof lineClamp?lineClamp.toString():void 0}}))),Text=polymorphicFactory(((_props,ref)=>{const props=useProps("Text",defaultProps,_props),_a=props,{lineClamp:lineClamp,truncate:truncate,inline:inline,inherit:inherit,gradient:gradient,span:span,__staticSelector:__staticSelector,vars:vars,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,variant:variant,mod:mod,size:size}=_a,others=__objRest(_a,["lineClamp","truncate","inline","inherit","gradient","span","__staticSelector","vars","className","style","classNames","styles","unstyled","variant","mod","size"]),getStyles=useStyles({name:["Text",__staticSelector],props:props,classes:Text_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{ref:ref,component:span?"span":"p",variant:variant,mod:[{"data-truncate":getTextTruncate(truncate),"data-line-clamp":"number"==typeof lineClamp,"data-inline":inline,"data-inherit":inherit},mod],size:size}),others))}));Text.classes=Text_module_default,Text.displayName="@raikou/core/Text";var Anchor_module_default={root:"m-849cf0da"},defaultProps2={underline:"hover"},Anchor=polymorphicFactory2(((props,ref)=>{const _a=useProps2("Anchor",defaultProps2,props),{underline:underline,className:className}=_a,others=__objRest(_a,["underline","className"]);return React2.createElement(Text,__spreadProps(__spreadValues({component:"a",ref:ref,className:cx(Anchor_module_default.root,className)},others),{mod:{underline:underline},__staticSelector:"Anchor"}))}));Anchor.displayName="@raikou/core/Anchor",Anchor.classes=Anchor_module_default;export{Anchor};