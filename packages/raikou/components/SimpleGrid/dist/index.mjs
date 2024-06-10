var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React2 from"react";import{Box,factory,useProps,useStyles,useRandomClassName}from"@raikou/core";import React from"react";import{getSortedBreakpoints,useRaikouTheme,keys,getSpacing,filterProps,InlineStyles,getBaseValue,px}from"@raikou/core";function SimpleGridMediaVariables({spacing:spacing,verticalSpacing:verticalSpacing,cols:cols,selector:selector}){var _a;const theme=useRaikouTheme(),_verticalSpacing=void 0===verticalSpacing?spacing:verticalSpacing,baseStyles=filterProps({"--sg-spacing-x":getSpacing(getBaseValue(spacing)),"--sg-spacing-y":getSpacing(getBaseValue(_verticalSpacing)),"--sg-cols":null==(_a=getBaseValue(cols))?void 0:_a.toString()}),queries=keys(theme.breakpoints).reduce(((acc,breakpoint)=>(acc[breakpoint]||(acc[breakpoint]={}),"object"==typeof spacing&&void 0!==spacing[breakpoint]&&(acc[breakpoint]["--sg-spacing-x"]=getSpacing(spacing[breakpoint])),"object"==typeof _verticalSpacing&&void 0!==_verticalSpacing[breakpoint]&&(acc[breakpoint]["--sg-spacing-y"]=getSpacing(_verticalSpacing[breakpoint])),"object"==typeof cols&&void 0!==cols[breakpoint]&&(acc[breakpoint]["--sg-cols"]=cols[breakpoint]),acc)),{}),media=getSortedBreakpoints(keys(queries),theme).filter((breakpoint=>keys(queries[breakpoint.value]).length>0)).map((breakpoint=>({query:`(min-width: ${theme.breakpoints[breakpoint.value]})`,styles:queries[breakpoint.value]})));return React.createElement(InlineStyles,{styles:baseStyles,media:media,selector:selector})}function getBreakpoints(values){return"object"==typeof values&&null!==values?keys(values):[]}function sortBreakpoints(breakpoints){return breakpoints.sort(((a,b)=>px(a)-px(b)))}function getUniqueBreakpoints({spacing:spacing,verticalSpacing:verticalSpacing,cols:cols}){return sortBreakpoints(Array.from(new Set([...getBreakpoints(spacing),...getBreakpoints(verticalSpacing),...getBreakpoints(cols)])))}function SimpleGridContainerVariables({spacing:spacing,verticalSpacing:verticalSpacing,cols:cols,selector:selector}){var _a;const _verticalSpacing=void 0===verticalSpacing?spacing:verticalSpacing,baseStyles=filterProps({"--sg-spacing-x":getSpacing(getBaseValue(spacing)),"--sg-spacing-y":getSpacing(getBaseValue(_verticalSpacing)),"--sg-cols":null==(_a=getBaseValue(cols))?void 0:_a.toString()}),uniqueBreakpoints=getUniqueBreakpoints({spacing:spacing,verticalSpacing:verticalSpacing,cols:cols}),queries=uniqueBreakpoints.reduce(((acc,breakpoint)=>(acc[breakpoint]||(acc[breakpoint]={}),"object"==typeof spacing&&void 0!==spacing[breakpoint]&&(acc[breakpoint]["--sg-spacing-x"]=getSpacing(spacing[breakpoint])),"object"==typeof _verticalSpacing&&void 0!==_verticalSpacing[breakpoint]&&(acc[breakpoint]["--sg-spacing-y"]=getSpacing(_verticalSpacing[breakpoint])),"object"==typeof cols&&void 0!==cols[breakpoint]&&(acc[breakpoint]["--sg-cols"]=cols[breakpoint]),acc)),{}),media=uniqueBreakpoints.map((breakpoint=>({query:`simple-grid (min-width: ${breakpoint})`,styles:queries[breakpoint]})));return React.createElement(InlineStyles,{styles:baseStyles,container:media,selector:selector})}var SimpleGrid_module_default={container:"m-925c2d2c",root:"m-2415a157"},defaultProps={cols:1,spacing:"md",type:"media"},SimpleGrid=factory(((_props,ref)=>{const props=useProps("SimpleGrid",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,cols:cols,verticalSpacing:verticalSpacing,spacing:spacing,type:type}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","cols","verticalSpacing","spacing","type"]),getStyles=useStyles({name:"SimpleGrid",classes:SimpleGrid_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars}),responsiveClassName=useRandomClassName();return"container"===type?React2.createElement(React2.Fragment,null,React2.createElement("div",null,React2.createElement(SimpleGridContainerVariables,__spreadProps(__spreadValues({},props),{selector:`.${responsiveClassName}`}))),React2.createElement("div",__spreadValues({},getStyles("container")),React2.createElement(Box,__spreadValues(__spreadValues({ref:ref},getStyles("root",{className:responsiveClassName})),others)))):React2.createElement(React2.Fragment,null,React2.createElement("div",null,React2.createElement(SimpleGridMediaVariables,__spreadProps(__spreadValues({},props),{selector:`.${responsiveClassName}`}))),React2.createElement(Box,__spreadValues(__spreadValues({ref:ref},getStyles("root",{className:responsiveClassName})),others)))}));SimpleGrid.classes=SimpleGrid_module_default,SimpleGrid.displayName="@raikou/core/SimpleGrid";export{SimpleGrid};