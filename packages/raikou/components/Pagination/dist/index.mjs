var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,a,t)=>a in e?__defProp(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,__spreadValues=(e,a)=>{for(var t in a=a||{})__hasOwnProp.call(a,t)&&__defNormalProp(e,t,a[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(a))__propIsEnum.call(a,t)&&__defNormalProp(e,t,a[t]);return e},__spreadProps=(e,a)=>__defProps(e,__getOwnPropDescs(a)),__objRest=(e,a)=>{var t={};for(o in e)__hasOwnProp.call(e,o)&&a.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))a.indexOf(o)<0&&__propIsEnum.call(e,o)&&(t[o]=e[o]);return t};import React11 from"react";import{factory as factory5,useProps as useProps7}from"@raikou/core";import React from"react";import{Box,factory,useProps,useStyles,getSpacing,createVarsResolver}from"@raikou/core";import{Children}from"react";function filterFalsyChildren(e){return Children.toArray(e).filter(Boolean)}var Group_module_default={root:"m-4081bf90"},defaultProps={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},varsResolver=createVarsResolver((e,{grow:a,preventGrowOverflow:t,gap:o,align:s,justify:r,wrap:n},{childWidth:i})=>({root:{"--group-child-width":a&&t?i:void 0,"--group-gap":getSpacing(o),"--group-align":s,"--group-justify":r,"--group-wrap":n}})),Group=factory((e,a)=>{var e=useProps("Group",defaultProps,e),{classNames:t,className:o,style:s,styles:r,unstyled:n,children:i,gap:l,grow:c,vars:p,variant:u,__size:d}=e,g=__objRest(e,["classNames","className","style","styles","unstyled","children","gap","align","justify","wrap","grow","preventGrowOverflow","vars","variant","__size"]),i=filterFalsyChildren(i),P=i.length,l=getSpacing(null!=l?l:"md"),e=useStyles({name:"Group",props:e,stylesCtx:{childWidth:`calc(${100/P}% - (${l} - ${l} / ${P}))`},className:o,style:s,classes:Group_module_default,classNames:t,styles:r,unstyled:n,vars:p,varsResolver:varsResolver});return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},e("root")),{ref:a,variant:u,mod:{grow:c},size:d}),g),i)});Group.displayName="@raikou/core/Group",Group.classes=Group_module_default;import React4 from"react";import{usePagination}from"@raikou/hooks";import{Box as Box2,factory as factory2,useProps as useProps2,useStyles as useStyles2,createVarsResolver as createVarsResolver2,createEventHandler,getRadius,getSize,getFontSize,getThemeColor}from"@raikou/core";import React2,{createContext,useContext}from"react";function createSafeContext(a){const t=createContext(null);return[({children:e,value:a})=>React2.createElement(t.Provider,{value:a},e),()=>{var e=useContext(t);if(null===e)throw new Error(a);return e}]}import React3,{createContext as createContext2,useContext as useContext2}from"react";import{useState}from"react";import{useEffect,useLayoutEffect}from"react";var[PaginationProvider,usePaginationContext]=createSafeContext("Pagination.Root component was not found in tree"),Pagination_module_default={root:"m-4addd315",control:"m-326d024a",dots:"m-4ad7767d"},defaultProps2={siblings:1,boundaries:1,size:"md"},varsResolver2=createVarsResolver2((e,{size:a,radius:t,color:o})=>({root:{"--pagination-control-radius":void 0===t?void 0:getRadius(t),"--pagination-control-size":getSize(a,"pagination-control-size"),"--pagination-control-fz":getFontSize(a),"--pagination-active-bg":o?getThemeColor(o,e):void 0}})),PaginationRoot=factory2((e,a)=>{var e=useProps2("PaginationRoot",defaultProps2,e),{classNames:t,className:o,style:s,styles:r,unstyled:n,vars:i,total:l,value:c,defaultValue:p,onChange:u,disabled:d,siblings:g,boundaries:P,onNextPage:m,onPreviousPage:_,onFirstPage:f,onLastPage:y,getItemProps:v}=e,C=__objRest(e,["classNames","className","style","styles","unstyled","vars","total","value","defaultValue","onChange","disabled","siblings","boundaries","color","radius","onNextPage","onPreviousPage","onFirstPage","onLastPage","getItemProps"]),e=useStyles2({name:"Pagination",classes:Pagination_module_default,props:e,className:o,style:s,classNames:t,styles:r,unstyled:n,vars:i,varsResolver:varsResolver2}),{range:o,setPage:s,next:t,previous:r,active:n,first:i,last:c}=usePagination({page:c,initialPage:p,onChange:u,total:l,siblings:g,boundaries:P}),p=createEventHandler(m,t),u=createEventHandler(_,r),g=createEventHandler(f,i),P=createEventHandler(y,c);return React4.createElement(PaginationProvider,{value:{total:l,range:o,active:n,disabled:d,getItemProps:v,onChange:s,onNext:p,onPrevious:u,onFirst:g,onLast:P,getStyles:e}},React4.createElement(Box2,__spreadValues(__spreadValues({ref:a},e("root")),C)))});PaginationRoot.classes=Pagination_module_default,PaginationRoot.displayName="@raikou/core/PaginationRoot";import React6 from"react";import{factory as factory3,useProps as useProps4}from"@raikou/core";import React5 from"react";import{Box as Box3,useProps as useProps3,useStyles as useStyles3,polymorphicFactory}from"@raikou/core";var UnstyledButton_module_default={root:"m-87cf2631"},defaultProps3={__staticSelector:"UnstyledButton"},UnstyledButton=polymorphicFactory((e,a)=>{var e=useProps3("UnstyledButton",defaultProps3,e),{className:t,component:o="button",__staticSelector:s,unstyled:r,classNames:n,styles:i,style:l}=e,c=__objRest(e,["className","component","__staticSelector","unstyled","classNames","styles","style"]),s=useStyles3({name:s,props:e,classes:UnstyledButton_module_default,className:t,style:l,classNames:n,styles:i,unstyled:r});return React5.createElement(Box3,__spreadValues(__spreadProps(__spreadValues({},s("root",{focusable:!0})),{component:o,ref:a,type:"button"===o?"button":void 0}),c))}),defaultProps4=(UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default,{withPadding:!0}),PaginationControl=factory3((e,a)=>{var e=useProps4("PaginationControl",defaultProps4,e),{classNames:t,className:o,style:s,styles:r,active:n,disabled:i,withPadding:l}=e,e=__objRest(e,["classNames","className","style","styles","vars","active","disabled","withPadding"]),c=usePaginationContext(),i=i||c.disabled;return React6.createElement(UnstyledButton,__spreadValues(__spreadValues({ref:a,disabled:i,mod:{active:n,disabled:i,"with-padding":l}},c.getStyles("control",{className:o,style:s,classNames:t,styles:r,active:!i})),e))});PaginationControl.displayName="@raikou/core/PaginationControl";import React8 from"react";import{Box as Box4,factory as factory4,useProps as useProps5}from"@raikou/core";import React7 from"react";function PaginationIcon(e){var{style:a,path:t}=e,e=__objRest(e,["style","children","path"]);return React7.createElement("svg",__spreadValues({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:__spreadValues({width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"},a)},e),React7.createElement("path",{d:t,fill:"currentColor"}))}var PaginationNextIcon=e=>React7.createElement(PaginationIcon,__spreadProps(__spreadValues({},e),{path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"})),PaginationPreviousIcon=e=>React7.createElement(PaginationIcon,__spreadProps(__spreadValues({},e),{path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"})),PaginationFirstIcon=e=>React7.createElement(PaginationIcon,__spreadProps(__spreadValues({},e),{path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"})),PaginationLastIcon=e=>React7.createElement(PaginationIcon,__spreadProps(__spreadValues({},e),{path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"})),PaginationDotsIcon=e=>React7.createElement(PaginationIcon,__spreadProps(__spreadValues({},e),{path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"})),defaultProps5={icon:PaginationDotsIcon},PaginationDots=factory4((e,a)=>{var e=useProps5("PaginationDots",defaultProps5,e),{classNames:t,className:o,style:s,styles:r,icon:n}=e,e=__objRest(e,["classNames","className","style","styles","vars","icon"]),i=usePaginationContext();return React8.createElement(Box4,__spreadValues(__spreadValues({ref:a},i.getStyles("dots",{className:o,style:s,styles:r,classNames:t})),e),React8.createElement(n,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});PaginationDots.displayName="@raikou/core/PaginationDots";import React9,{forwardRef}from"react";import{createPolymorphicComponent,useProps as useProps6}from"@raikou/core";function createEdgeComponent({icon:e,name:r,action:n,type:i}){const l={icon:e};e=forwardRef((e,a)=>{var e=useProps6(r,l,e),t=e["icon"],e=__objRest(e,["icon"]),o=usePaginationContext(),s="next"===i?o.active===o.total:1===o.active;return React9.createElement(PaginationControl,__spreadValues({disabled:o.disabled||s,ref:a,onClick:o[n],withPadding:!1},e),React9.createElement(t,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});return e.displayName="@raikou/core/"+r,createPolymorphicComponent(e)}var PaginationNext=createEdgeComponent({icon:PaginationNextIcon,name:"PaginationNext",action:"onNext",type:"next"}),PaginationPrevious=createEdgeComponent({icon:PaginationPreviousIcon,name:"PaginationPrevious",action:"onPrevious",type:"previous"}),PaginationFirst=createEdgeComponent({icon:PaginationFirstIcon,name:"PaginationFirst",action:"onFirst",type:"previous"}),PaginationLast=createEdgeComponent({icon:PaginationLastIcon,name:"PaginationLast",action:"onLast",type:"next"});import React10 from"react";function PaginationItems({dotsIcon:t}){const o=usePaginationContext();var e=o.range.map((e,a)=>{return"dots"===e?React10.createElement(PaginationDots,{icon:t,key:a}):React10.createElement(PaginationControl,__spreadValues({key:a,active:e===o.active,"aria-current":e===o.active?"page":void 0,onClick:()=>o.onChange(e),disabled:o.disabled},null==(a=o.getItemProps)?void 0:a.call(o,e)),e)});return React10.createElement(React10.Fragment,null,e)}PaginationItems.displayName="@raikou/core/PaginationItems";var defaultProps6={withControls:!0,siblings:1,boundaries:1,gap:8},Pagination=factory5((e,a)=>{var e=useProps7("Pagination",defaultProps6,e),{withEdges:t,withControls:o,getControlProps:s,nextIcon:r,previousIcon:n,lastIcon:i,firstIcon:l,dotsIcon:c,total:p,gap:u}=e,e=__objRest(e,["withEdges","withControls","getControlProps","nextIcon","previousIcon","lastIcon","firstIcon","dotsIcon","total","gap"]);return p<=0?null:React11.createElement(PaginationRoot,__spreadValues({ref:a,total:p},e),React11.createElement(Group,{gap:u},t&&React11.createElement(PaginationFirst,__spreadValues({icon:l},null==s?void 0:s("first"))),o&&React11.createElement(PaginationPrevious,__spreadValues({icon:n},null==s?void 0:s("previous"))),React11.createElement(PaginationItems,{dotsIcon:c}),o&&React11.createElement(PaginationNext,__spreadValues({icon:r},null==s?void 0:s("next"))),t&&React11.createElement(PaginationLast,__spreadValues({icon:i},null==s?void 0:s("last")))))});Pagination.displayName="@raikou/core/Pagination",Pagination.Root=PaginationRoot,Pagination.Control=PaginationControl,Pagination.Dots=PaginationDots,Pagination.First=PaginationFirst,Pagination.Last=PaginationLast,Pagination.Next=PaginationNext,Pagination.Previous=PaginationPrevious,Pagination.Items=PaginationItems;export{Pagination,PaginationControl,PaginationDots,PaginationFirst,PaginationItems,PaginationLast,PaginationNext,PaginationPrevious,PaginationRoot};