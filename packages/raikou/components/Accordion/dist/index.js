"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__pow=Math.pow,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Accordion:()=>Accordion,AccordionChevron:()=>AccordionChevron,AccordionControl:()=>AccordionControl,AccordionItem:()=>AccordionItem,AccordionPanel:()=>AccordionPanel}),module.exports=__toCommonJS(src_exports);var import_react12=__toESM(require("react")),import_hooks3=require("@raikou/hooks"),import_core7=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core");function AccordionChevron(_a){var _b=_a,{style:style,size:size=16}=_b,others=__objRest(_b,["style","size"]);return import_react.default.createElement("svg",__spreadValues({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:__spreadProps(__spreadValues({},style),{width:(0,import_core.rem)(size),height:(0,import_core.rem)(size),display:"block"})},others),import_react.default.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}AccordionChevron.displayName="@raikou/core/AccordionChevron";var import_react6=__toESM(require("react")),import_core2=require("@raikou/core"),import_react2=__toESM(require("react"));function createSafeContext(errorMessage){const Context=(0,import_react2.createContext)(null);return[({children:children,value:value})=>import_react2.default.createElement(Context.Provider,{value:value},children),()=>{const ctx=(0,import_react2.useContext)(Context);if(null===ctx)throw new Error(errorMessage);return ctx}]}var import_react3=__toESM(require("react")),import_react4=require("react"),import_react5=require("react"),[AccordionProvider,useAccordionContext]=createSafeContext("Accordion component was not found in the tree"),[AccordionItemProvider,useAccordionItemContext]=createSafeContext("Accordion.Item component was not found in the tree"),Accordion_module_default={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"},defaultProps={},AccordionItem=(0,import_core2.factory)(((props,ref)=>{const _a=(0,import_core2.useProps)("AccordionItem",defaultProps,props),{classNames:classNames,className:className,style:style,styles:styles,vars:vars,value:value,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","value","mod"]),ctx=useAccordionContext();return import_react6.default.createElement(AccordionItemProvider,{value:{value:value}},import_react6.default.createElement(import_core2.Box,__spreadValues(__spreadValues({ref:ref,mod:[{active:ctx.isItemActive(value)},mod]},ctx.getStyles("item",{className:className,classNames:classNames,styles:styles,style:style,variant:ctx.variant})),others)))}));AccordionItem.displayName="@raikou/core/AccordionItem",AccordionItem.classes=Accordion_module_default;var import_react9=__toESM(require("react")),import_core4=require("@raikou/core"),import_react8=__toESM(require("react")),import_hooks2=require("@raikou/hooks"),import_core3=require("@raikou/core"),import_react7=require("react"),import_react_dom=require("react-dom"),import_hooks=require("@raikou/hooks");function getAutoHeightDuration(height){if(!height||"string"==typeof height)return 0;const constant=height/36;return Math.round(10*(4+15*__pow(constant,.25)+constant/5))}function getElementHeight(el){return(null==el?void 0:el.current)?el.current.scrollHeight:"auto"}var raf="undefined"!=typeof window&&window.requestAnimationFrame;function useCollapse({transitionDuration:transitionDuration,transitionTimingFunction:transitionTimingFunction="ease",onTransitionEnd:onTransitionEnd=(()=>{}),opened:opened}){const el=(0,import_react7.useRef)(null),collapsedStyles={display:"none",height:0,overflow:"hidden"},[styles,setStylesRaw]=(0,import_react7.useState)(opened?{}:collapsedStyles),setStyles=newStyles=>{(0,import_react_dom.flushSync)((()=>setStylesRaw(newStyles)))},mergeStyles=newStyles=>{setStyles((oldStyles=>__spreadValues(__spreadValues({},oldStyles),newStyles)))};function getTransitionStyles(height){return{transition:`height ${transitionDuration||getAutoHeightDuration(height)}ms ${transitionTimingFunction}`}}(0,import_hooks.useDidUpdate)((()=>{"function"==typeof raf&&raf(opened?()=>{mergeStyles({willChange:"height",display:"block",overflow:"hidden"}),raf((()=>{const height=getElementHeight(el);mergeStyles(__spreadProps(__spreadValues({},getTransitionStyles(height)),{height:height}))}))}:()=>{const height=getElementHeight(el);mergeStyles(__spreadProps(__spreadValues({},getTransitionStyles(height)),{willChange:"height",height:height})),raf((()=>mergeStyles({height:0,overflow:"hidden"})))})}),[opened]);const handleTransitionEnd=e=>{if(e.target===el.current&&"height"===e.propertyName)if(opened){const height=getElementHeight(el);height===styles.height?setStyles({}):mergeStyles({height:height}),onTransitionEnd()}else 0===styles.height&&(setStyles(collapsedStyles),onTransitionEnd())};return function(_a={}){var _b=_a,{style:style={},refKey:refKey="ref"}=_b,rest=__objRest(_b,["style","refKey"]);const theirRef=rest[refKey];return __spreadProps(__spreadValues({"aria-hidden":!opened},rest),{[refKey]:(0,import_hooks.mergeRefs)(el,theirRef),onTransitionEnd:handleTransitionEnd,style:__spreadValues(__spreadValues({boxSizing:"border-box"},style),styles)})}}var defaultProps2={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},Collapse=(0,import_core3.factory)(((props,ref)=>{const _a=(0,import_core3.useProps)("Collapse",defaultProps2,props),{children:children,in:opened,transitionDuration:transitionDuration,transitionTimingFunction:transitionTimingFunction,style:style,onTransitionEnd:onTransitionEnd,animateOpacity:animateOpacity}=_a,others=__objRest(_a,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),theme=(0,import_core3.useRaikouTheme)(),shouldReduceMotion=(0,import_hooks2.useReducedMotion)(),duration=!!theme.respectReducedMotion&&shouldReduceMotion?0:transitionDuration,getCollapseProps=useCollapse({opened:opened,transitionDuration:duration,transitionTimingFunction:transitionTimingFunction,onTransitionEnd:onTransitionEnd});return 0===duration?opened?import_react8.default.createElement(import_core3.Box,__spreadValues({},others),children):null:import_react8.default.createElement(import_core3.Box,__spreadValues({},getCollapseProps(__spreadValues({style:__spreadValues({opacity:opened||!animateOpacity?1:0,transition:animateOpacity?`opacity ${duration}ms ${transitionTimingFunction}`:"none"},(0,import_core3.getStyleObject)(style,theme)),ref:ref},others))),children)}));Collapse.displayName="@raikou/core/Collapse";var defaultProps3={},AccordionPanel=(0,import_core4.factory)(((props,ref)=>{var _b;const _a=(0,import_core4.useProps)("AccordionPanel",defaultProps3,props),{classNames:classNames,className:className,style:style,styles:styles,vars:vars,children:children}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","children"]),{value:value}=useAccordionItemContext(),ctx=useAccordionContext();return import_react9.default.createElement(Collapse,__spreadProps(__spreadValues(__spreadValues({ref:ref},ctx.getStyles("panel",{className:className,classNames:classNames,style:style,styles:styles})),others),{in:ctx.isItemActive(value),transitionDuration:null!=(_b=ctx.transitionDuration)?_b:200,role:"region",id:ctx.getRegionId(value),"aria-labelledby":ctx.getControlId(value)}),import_react9.default.createElement("div",__spreadValues({},ctx.getStyles("content",{classNames:classNames,styles:styles})),children))}));AccordionPanel.displayName="@raikou/core/AccordionPanel",AccordionPanel.classes=Accordion_module_default;var import_react11=__toESM(require("react")),import_core6=require("@raikou/core"),import_react10=__toESM(require("react")),import_core5=require("@raikou/core"),UnstyledButton_module_default={root:"m-87cf2631"},defaultProps4={__staticSelector:"UnstyledButton"},UnstyledButton=(0,import_core5.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core5.useProps)("UnstyledButton",defaultProps4,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=(0,import_core5.useStyles)({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return import_react10.default.createElement(import_core5.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var defaultProps5={},AccordionControl=(0,import_core6.factory)(((props,ref)=>{const _a=(0,import_core6.useProps)("AccordionControl",defaultProps5,props),{classNames:classNames,className:className,style:style,styles:styles,vars:vars,chevron:chevron,icon:icon,onClick:onClick,onKeyDown:onKeyDown,children:children,disabled:disabled,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","vars","chevron","icon","onClick","onKeyDown","children","disabled","mod"]),{value:value}=useAccordionItemContext(),ctx=useAccordionContext(),isActive=ctx.isItemActive(value),shouldWrapWithHeading="number"==typeof ctx.order,Heading=`h${ctx.order}`,content=import_react11.default.createElement(UnstyledButton,__spreadProps(__spreadValues(__spreadValues({},others),ctx.getStyles("control",{className:className,classNames:classNames,style:style,styles:styles,variant:ctx.variant})),{mod:["accordion-control",{active:isActive,"chevron-position":ctx.chevronPosition,disabled:disabled},mod],ref:ref,onClick:event=>{null==onClick||onClick(event),ctx.onChange(value)},type:"button",disabled:disabled,"aria-expanded":isActive,"aria-controls":ctx.getRegionId(value),id:ctx.getControlId(value),onKeyDown:(0,import_core6.createScopedKeydownHandler)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:ctx.loop,orientation:"vertical",onKeyDown:onKeyDown})}),import_react11.default.createElement(import_core6.Box,__spreadValues({component:"span",mod:{rotate:!ctx.disableChevronRotation&&isActive,position:ctx.chevronPosition}},ctx.getStyles("chevron",{classNames:classNames,styles:styles})),chevron||ctx.chevron),import_react11.default.createElement("span",__spreadValues({},ctx.getStyles("label",{classNames:classNames,styles:styles})),children),icon&&import_react11.default.createElement(import_core6.Box,__spreadValues({component:"span",mod:{"chevron-position":ctx.chevronPosition}},ctx.getStyles("icon",{classNames:classNames,styles:styles})),icon));return shouldWrapWithHeading?import_react11.default.createElement(Heading,__spreadValues({},ctx.getStyles("itemTitle",{classNames:classNames,styles:styles})),content):content}));AccordionControl.displayName="@raikou/core/AccordionControl",AccordionControl.classes=Accordion_module_default;var Accordion_module_default2={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"},defaultProps6={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:import_react12.default.createElement(AccordionChevron,null)},varsResolver=(0,import_core7.createVarsResolver)(((_,{transitionDuration:transitionDuration,chevronSize:chevronSize,radius:radius})=>({root:{"--accordion-transition-duration":void 0===transitionDuration?void 0:`${transitionDuration}ms`,"--accordion-chevron-size":void 0===chevronSize?void 0:(0,import_core7.rem)(chevronSize),"--accordion-radius":void 0===radius?void 0:(0,import_core7.getRadius)(radius)}})));function Accordion(_props){const props=(0,import_core7.useProps)("Accordion",defaultProps6,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,children:children,multiple:multiple,value:value,defaultValue:defaultValue,onChange:onChange,id:id,loop:loop,transitionDuration:transitionDuration,disableChevronRotation:disableChevronRotation,chevronPosition:chevronPosition,chevronSize:chevronSize,order:order,chevron:chevron,variant:variant,radius:radius}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","children","multiple","value","defaultValue","onChange","id","loop","transitionDuration","disableChevronRotation","chevronPosition","chevronSize","order","chevron","variant","radius"]),uid=(0,import_hooks3.useId)(id),[_value,handleChange]=(0,import_hooks3.useUncontrolled)({value:value,defaultValue:defaultValue,finalValue:multiple?[]:null,onChange:onChange}),getStyles=(0,import_core7.useStyles)({name:"Accordion",classes:Accordion_module_default2,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return import_react12.default.createElement(AccordionProvider,{value:{isItemActive:itemValue=>Array.isArray(_value)?_value.includes(itemValue):itemValue===_value,onChange:itemValue=>{const nextValue=Array.isArray(_value)?_value.includes(itemValue)?_value.filter((selectedValue=>selectedValue!==itemValue)):[..._value,itemValue]:itemValue===_value?null:itemValue;handleChange(nextValue)},getControlId:(0,import_core7.getSafeId)(`${uid}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,import_core7.getSafeId)(`${uid}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:transitionDuration,disableChevronRotation:disableChevronRotation,chevronPosition:chevronPosition,order:order,chevron:chevron,loop:loop,getStyles:getStyles,variant:variant}},import_react12.default.createElement(import_core7.Box,__spreadProps(__spreadValues(__spreadValues({},getStyles("root")),others),{variant:variant,"data-accordion":!0}),children))}var extendAccordion=c=>c;Accordion.extend=extendAccordion,Accordion.displayName="@raikou/core/Accordion",Accordion.Item=AccordionItem,Accordion.Panel=AccordionPanel,Accordion.Control=AccordionControl,Accordion.Chevron=AccordionChevron;