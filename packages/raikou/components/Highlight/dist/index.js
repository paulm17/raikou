"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r=r||{})__hasOwnProp.call(r,t)&&__defNormalProp(e,t,r[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))__propIsEnum.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var t={};for(o in e)__hasOwnProp.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))r.indexOf(o)<0&&__propIsEnum.call(e,o)&&(t[o]=e[o]);return t},__export=(e,r)=>{for(var t in r)__defProp(e,t,{get:r[t],enumerable:!0})},__copyProps=(r,t,o,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let e of __getOwnPropNames(t))__hasOwnProp.call(r,e)||e===o||__defProp(r,e,{get:()=>t[e],enumerable:!(a=__getOwnPropDesc(t,e))||a.enumerable});return r},__toESM=(e,r,t)=>(t=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?t:__defProp(t,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react3=(__export(src_exports,{Highlight:()=>Highlight}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core4=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core"),Text_module_default={root:"m-b6d8b162"};function getTextTruncate(e){return"start"===e?"start":"end"===e||e?"end":void 0}var defaultProps={inherit:!1},varsResolver=(0,import_core.createVarsResolver)((e,{variant:r,lineClamp:t,gradient:o,size:a})=>({root:{"--text-fz":(0,import_core.getFontSize)(a),"--text-lh":(0,import_core.getLineHeight)(a),"--text-gradient":"gradient"===r?(0,import_core.getGradient)(o,e):void 0,"--text-line-clamp":"number"==typeof t?t.toString():void 0}})),Text=(0,import_core.polymorphicFactory)((e,r)=>{var e=(0,import_core.useProps)("Text",defaultProps,e),{lineClamp:t,truncate:o,inline:a,inherit:s,span:l,__staticSelector:i,vars:_,className:p,style:c,classNames:n,styles:m,unstyled:u,variant:d,mod:g,size:h}=e,f=__objRest(e,["lineClamp","truncate","inline","inherit","gradient","span","__staticSelector","vars","className","style","classNames","styles","unstyled","variant","mod","size"]),i=(0,import_core.useStyles)({name:["Text",i],props:e,classes:Text_module_default,className:p,style:c,classNames:n,styles:m,unstyled:u,vars:_,varsResolver:varsResolver});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},i("root",{focusable:!0})),{ref:r,component:l?"span":"p",variant:d,mod:[{"data-truncate":getTextTruncate(o),"data-line-clamp":"number"==typeof t,"data-inline":a,"data-inherit":s},g],size:h}),f))}),import_react2=(Text.classes=Text_module_default,Text.displayName="@raikou/core/Text",__toESM(require("react"))),import_core3=require("@raikou/core"),import_core2=require("@raikou/core");function getMarkColor({color:e,theme:r,defaultShade:t}){r=(0,import_core2.parseThemeColor)({color:e,theme:r});return r.isThemeColor?void 0===r.shade?`var(--raikou-color-${r.color}-${t})`:`var(${r.variable})`:e}var Mark_module_default={root:"m-bcb3f3c2"},defaultProps2={color:"yellow"},varsResolver2=(0,import_core3.createVarsResolver)((e,{color:r})=>({root:{"--mark-bg-dark":getMarkColor({color:r,theme:e,defaultShade:5}),"--mark-bg-light":getMarkColor({color:r,theme:e,defaultShade:2})}})),Mark=(0,import_core3.factory)((e,r)=>{var e=(0,import_core3.useProps)("Mark",defaultProps2,e),{classNames:t,className:o,style:a,styles:s,unstyled:l,vars:i,variant:_}=e,p=__objRest(e,["classNames","className","style","styles","unstyled","vars","color","variant"]),e=(0,import_core3.useStyles)({name:"Mark",props:e,className:o,style:a,classes:Mark_module_default,classNames:t,styles:s,unstyled:l,vars:i,varsResolver:varsResolver2});return import_react2.default.createElement(import_core3.Box,__spreadValues(__spreadValues({component:"mark",ref:r,variant:_},e("root")),p))});function escapeRegex(e){return e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")}function highlighter(e,r){if(null==r)return[{chunk:e,highlighted:!1}];r=Array.isArray(r)?r.map(escapeRegex):escapeRegex(r);if(!(Array.isArray(r)?0<r.filter(e=>0<e.trim().length).length:""!==r.trim()))return[{chunk:e,highlighted:!1}];r="string"==typeof r?r.trim():r.filter(e=>0!==e.trim().length).map(e=>e.trim()).sort((e,r)=>r.length-e.length).join("|");const t=new RegExp(`(${r})`,"gi");return e.split(t).map(e=>({chunk:e,highlighted:t.test(e)})).filter(({chunk:e})=>e)}Mark.classes=Mark_module_default,Mark.displayName="@raikou/core/Mark";var defaultProps3={},Highlight=(0,import_core4.polymorphicFactory)((e,r)=>{const t=(0,import_core4.useProps)("Highlight",defaultProps3,e),{unstyled:o,children:a,highlight:s,highlightStyles:l,color:i}=t,_=__objRest(t,["unstyled","children","highlight","highlightStyles","color"]);e=highlighter(a,s);return import_react3.default.createElement(Text,__spreadProps(__spreadValues({unstyled:o,ref:r},_),{__staticSelector:"Highlight"}),e.map(({chunk:e,highlighted:r},t)=>r?import_react3.default.createElement(Mark,{unstyled:o,key:t,color:i,style:l,"data-highlight":e},e):import_react3.default.createElement("span",{key:t},e)))});Highlight.displayName="@raikou/core/Highlight";