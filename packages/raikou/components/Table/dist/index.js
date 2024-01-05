"use strict";var __create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Table:()=>Table,TableCaption:()=>TableCaption,TableTbody:()=>TableTbody,TableTd:()=>TableTd,TableTfoot:()=>TableTfoot,TableTh:()=>TableTh,TableThead:()=>TableThead,TableTr:()=>TableTr}),module.exports=__toCommonJS(src_exports);var import_react3=__toESM(require("react")),import_core2=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core"),import_pure_store=__toESM(require("pure-store")),useStore=(0,import_pure_store.default)({getStyles:void 0,striped:void 0,highlightOnHover:void 0,withColumnBorders:void 0,withRowBorders:void 0,captionSide:"top"});function getDataAttributes(ctx,options){if(!options)return;const data={};return options.columnBorder&&ctx.withColumnBorders&&(data["data-with-column-border"]=!0),options.rowBorder&&ctx.withRowBorders&&(data["data-with-row-border"]=!0),options.striped&&ctx.striped&&(data["data-striped"]=ctx.striped),options.highlightOnHover&&ctx.highlightOnHover&&(data["data-hover"]=!0),options.captionSide&&ctx.captionSide&&(data["data-side"]=ctx.captionSide),data}function tableElement(element,options){const name=`Table${element.charAt(0).toUpperCase()}${element.slice(1)}`,Component=(0,import_core.factory)(((_props,ref)=>{const props=(0,import_core.useProps)(name,{},_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles}=_a,others=__objRest(_a,["classNames","className","style","styles"]),ctx=useStore.getState();return import_react.default.createElement(import_core.Box,__spreadValues(__spreadValues(__spreadValues({component:element,ref:ref},getDataAttributes(ctx,options)),ctx.getStyles(element,{className:className,classNames:classNames,style:style,styles:styles,props:props})),others))}));return Component.displayName=`@raikou/core/${name}`,Component}var TableTh=tableElement("th",{columnBorder:!0}),TableTd=tableElement("td",{columnBorder:!0}),TableTr=tableElement("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),TableThead=tableElement("thead"),TableTbody=tableElement("tbody"),TableTfoot=tableElement("tfoot"),TableCaption=tableElement("caption",{captionSide:!0}),import_react2=__toESM(require("react"));function TableDataRenderer({data:data}){return import_react2.default.createElement(import_react2.default.Fragment,null,data.caption&&import_react2.default.createElement(TableCaption,null,data.caption),data.head&&import_react2.default.createElement(TableThead,null,import_react2.default.createElement(TableTr,null,data.head.map(((item,index)=>import_react2.default.createElement(TableTh,{key:index},item))))),data.body&&import_react2.default.createElement(TableTbody,null,data.body.map(((row,rowIndex)=>import_react2.default.createElement(TableTr,{key:rowIndex},row.map(((item,index)=>import_react2.default.createElement(TableTd,{key:index},item))))))),data.foot&&import_react2.default.createElement(TableTfoot,null,import_react2.default.createElement(TableTr,null,data.foot.map(((item,index)=>import_react2.default.createElement(TableTh,{key:index},item))))))}TableDataRenderer.displayName="@mantine/core/TableDataRenderer";var Table_module_default={table:"m-b23fa0ef",th:"m-4e7aa4f3",tr:"m-4e7aa4fd",td:"m-4e7aa4ef",tbody:"m-b2404537",thead:"m-b242d975",caption:"m-9e5a3ac7",scrollContainer:"m-a100c15",scrollContainerInner:"m-62259741"},defaultProps={withRowBorders:!0,verticalSpacing:7},varsResolver=(0,import_core2.createVarsResolver)(((theme,{layout:layout,captionSide:captionSide,horizontalSpacing:horizontalSpacing,verticalSpacing:verticalSpacing,borderColor:borderColor,stripedColor:stripedColor,highlightOnHoverColor:highlightOnHoverColor,striped:striped,highlightOnHover:highlightOnHover})=>({table:{"--table-layout":layout,"--table-caption-side":captionSide,"--table-horizontal-spacing":(0,import_core2.getSpacing)(horizontalSpacing),"--table-vertical-spacing":(0,import_core2.getSpacing)(verticalSpacing),"--table-border-color":borderColor?(0,import_core2.getThemeColor)(borderColor,theme):void 0,"--table-striped-color":striped&&stripedColor?(0,import_core2.getThemeColor)(stripedColor,theme):void 0,"--table-highlight-on-hover-color":highlightOnHover&&highlightOnHoverColor?(0,import_core2.getThemeColor)(highlightOnHoverColor,theme):void 0}}))),Table=(0,import_core2.factory)(((_props,ref)=>{const props=(0,import_core2.useProps)("Table",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,horizontalSpacing:horizontalSpacing,verticalSpacing:verticalSpacing,captionSide:captionSide,stripedColor:stripedColor,highlightOnHoverColor:highlightOnHoverColor,striped:striped,highlightOnHover:highlightOnHover,withColumnBorders:withColumnBorders,withRowBorders:withRowBorders,withTableBorder:withTableBorder,borderColor:borderColor,layout:layout,variant:variant,data:data,children:children}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","horizontalSpacing","verticalSpacing","captionSide","stripedColor","highlightOnHoverColor","striped","highlightOnHover","withColumnBorders","withRowBorders","withTableBorder","borderColor","layout","variant","data","children"]),getStyles=(0,import_core2.useStyles)({name:"Table",props:props,className:className,style:style,classes:Table_module_default,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"table",vars:vars,varsResolver:varsResolver});return useStore.update((state=>{state.getStyles=getStyles,state.striped=!0===striped?"odd":striped||void 0,state.highlightOnHover=highlightOnHover,state.withColumnBorders=withColumnBorders,state.withRowBorders=withRowBorders,state.captionSide=captionSide||"bottom"})),import_react3.default.createElement(import_core2.Box,__spreadValues(__spreadValues({component:"table",variant:variant,ref:ref,mod:{"data-with-table-border":withTableBorder}},getStyles("table")),others),children||!!data&&import_react3.default.createElement(TableDataRenderer,{data:data}))}));Table.classes=Table_module_default,Table.displayName="@raikou/core/Table",Table.Td=TableTd,Table.Th=TableTh,Table.Tr=TableTr,Table.Thead=TableThead,Table.Tbody=TableTbody,Table.Tfoot=TableTfoot,Table.Caption=TableCaption,Table.DataRenderer=TableDataRenderer;