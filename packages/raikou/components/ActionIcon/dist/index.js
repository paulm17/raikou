"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{ActionIcon:()=>ActionIcon,ActionIconGroup:()=>ActionIconGroup}),module.exports=__toCommonJS(src_exports);var import_react76=__toESM(require("react")),import_core10=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core"),UnstyledButton_module_default={root:"m-87cf2631"},defaultProps={__staticSelector:"UnstyledButton"},UnstyledButton=(0,import_core.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core.useProps)("UnstyledButton",defaultProps,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=(0,import_core.useStyles)({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var import_react6=__toESM(require("react")),import_core6=require("@raikou/core"),import_react2=__toESM(require("react"));function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var clsx_default=clsx,import_core2=require("@raikou/core"),Loader_module_default={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},Bars=(0,import_react2.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react2.default.createElement(import_core2.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.barsLoader,className)},others),{ref:ref}),import_react2.default.createElement("span",{className:Loader_module_default.bar}),import_react2.default.createElement("span",{className:Loader_module_default.bar}),import_react2.default.createElement("span",{className:Loader_module_default.bar}))})),import_react3=__toESM(require("react")),import_core3=require("@raikou/core"),Oval=(0,import_react3.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react3.default.createElement(import_core3.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.ovalLoader,className)},others),{ref:ref}))})),import_react4=__toESM(require("react")),import_core4=require("@raikou/core"),Progress=(0,import_react4.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react4.default.createElement(import_core4.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.progressLoader,className)},others),{ref:ref}),import_react4.default.createElement("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},import_react4.default.createElement("g",{fill:"none",fillRule:"evenodd"},import_react4.default.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},import_react4.default.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),import_react4.default.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},import_react4.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"}))))))})),import_react5=__toESM(require("react")),import_core5=require("@raikou/core"),Dots=(0,import_react5.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react5.default.createElement(import_core5.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.dotsLoader,className)},others),{ref:ref}),import_react5.default.createElement("span",{className:Loader_module_default.dot}),import_react5.default.createElement("span",{className:Loader_module_default.dot}),import_react5.default.createElement("span",{className:Loader_module_default.dot}))})),Loader_module_default2={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},defaultLoaders={bars:Bars,oval:Oval,dots:Dots,progress:Progress},defaultProps2={loaders:defaultLoaders,type:"oval"},varsResolver=(0,import_core6.createVarsResolver)(((theme,{size:size,color:color})=>({root:{"--loader-size":(0,import_core6.getSize)(size,"loader-size"),"--loader-color":color?(0,import_core6.getThemeColor)(color,theme):void 0}}))),Loader=(0,import_core6.factory)(((_props,ref)=>{const props=(0,import_core6.useProps)("Loader",defaultProps2,_props),_a=props,{size:size,color:color,type:type,vars:vars,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,loaders:loaders,variant:variant,children:children}=_a,others=__objRest(_a,["size","color","type","vars","className","style","classNames","styles","unstyled","loaders","variant","children"]),getStyles=(0,import_core6.useStyles)({name:"Loader",props:props,classes:Loader_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return children?import_react6.default.createElement(import_core6.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref}),others),children):import_react6.default.createElement(import_core6.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref,component:loaders[type],variant:variant,size:size}),others))}));Loader.defaultLoaders=defaultLoaders,Loader.displayName="@raikou/core/Loader",Loader.classes=Loader_module_default2;var import_core7=require("@raikou/core"),popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${(0,import_core7.rem)(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${(0,import_core7.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core7.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core7.rem)(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core7.rem)(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})},import_react74=__toESM(require("react")),transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:transition,state:state,duration:duration,timingFunction:timingFunction}){const shared={transitionDuration:`${duration}ms`,transitionTimingFunction:timingFunction};return"string"==typeof transition?transition in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[transition].transitionProperty},shared),transitions[transition].common),transitions[transition][transitionStatuses[state]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:transition.transitionProperty},shared),transition.common),transition[transitionStatuses[state]])}var import_react73=require("react"),import_react_dom=__toESM(require("react-dom")),import_react7=require("react"),import_react8=require("react"),import_react9=require("react"),import_react10=require("react"),import_react11=require("react"),import_react12=require("react"),import_react13=require("react"),import_react14=require("react"),import_react15=require("react"),import_react16=require("react"),import_react17=require("react"),import_react18=require("react"),import_react19=require("react"),import_react20=require("react"),import_react21=require("react"),import_react22=__toESM(require("react"),1),import_react23=require("react"),import_react24=require("react"),import_react25=require("react"),import_react26=require("react"),import_react27=require("react"),import_react28=require("react"),import_react29=require("react"),import_react30=require("react"),import_react31=require("react"),import_react32=require("react"),import_react33=require("react"),import_react34=require("react"),import_react35=require("react"),import_react36=require("react"),import_react37=require("react"),import_react38=require("react"),import_react39=require("react"),import_react40=require("react"),import_react41=require("react"),import_react42=require("react"),import_react43=require("react"),import_react44=require("react"),import_react45=require("react"),import_react46=require("react"),import_react47=require("react"),import_react48=require("react"),import_react49=require("react"),import_react50=require("react"),import_react51=require("react"),import_react52=require("react"),import_react53=require("react"),import_react54=require("react"),import_react55=require("react"),import_react56=require("react"),import_react57=require("react"),import_react58=require("react"),import_react59=require("react"),import_react60=require("react"),import_react61=require("react"),import_react62=require("react"),import_react63=require("react"),import_react64=require("react"),import_react65=require("react"),import_react66=require("react"),import_react67=require("react"),import_react68=require("react"),import_react69=require("react"),import_react70=require("react"),import_react71=require("react"),import_react72=require("react");function attachMediaListener(query,callback){try{return query.addEventListener("change",callback),()=>query.removeEventListener("change",callback)}catch(e){return query.addListener(callback),()=>query.removeListener(callback)}}function getInitialValue(query,initialValue){return"boolean"==typeof initialValue?initialValue:"undefined"!=typeof window&&"matchMedia"in window&&window.matchMedia(query).matches}function useMediaQuery(query,initialValue,{getInitialValueInEffect:getInitialValueInEffect}={getInitialValueInEffect:!0}){const[matches,setMatches]=(0,import_react11.useState)(getInitialValueInEffect?initialValue:getInitialValue(query)),queryRef=(0,import_react11.useRef)();return(0,import_react11.useEffect)((()=>{if("matchMedia"in window)return queryRef.current=window.matchMedia(query),setMatches(queryRef.current.matches),attachMediaListener(queryRef.current,(event=>setMatches(event.matches)))}),[query]),matches}function useDidUpdate(fn,dependencies){const mounted=(0,import_react18.useRef)(!1);(0,import_react18.useEffect)((()=>()=>{mounted.current=!1}),[]),(0,import_react18.useEffect)((()=>{if(mounted.current)return fn();mounted.current=!0}),dependencies)}var __useId=import_react22.default["useId".toString()]||(()=>{});function deserializeJSON(value){try{return value&&JSON.parse(value)}catch(e){return value}}function createStorageHandler(type){return{getItem:key=>{try{return window[type].getItem(key)}catch(error){return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"),null}},setItem:(key,value)=>{try{window[type].setItem(key,value)}catch(error){console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked")}},removeItem:key=>{try{window[type].removeItem(key)}catch(error){console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked")}}}}function readValue(type){const{getItem:getItem}=createStorageHandler(type);return function({key:key,defaultValue:defaultValue,deserialize:deserialize=deserializeJSON}){let storageBlockedOrSkipped;try{storageBlockedOrSkipped="undefined"==typeof window||!(type in window)||null===window[type]}catch(_e){storageBlockedOrSkipped=!0}if(storageBlockedOrSkipped)return defaultValue;const storageValue=getItem(key);return null!==storageValue?deserialize(storageValue):defaultValue}}var readLocalStorageValue=readValue("localStorage"),readSessionStorageValue=readValue("sessionStorage");function useReducedMotion(initialValue,options){return useMediaQuery("(prefers-reduced-motion: reduce)",initialValue,options)}var import_core8=require("@raikou/core");function useTransition({duration:duration,exitDuration:exitDuration,timingFunction:timingFunction,mounted:mounted,onEnter:onEnter,onExit:onExit,onEntered:onEntered,onExited:onExited}){const theme=(0,import_core8.useRaikouTheme)(),shouldReduceMotion=useReducedMotion(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,[transitionDuration,setTransitionDuration]=(0,import_react73.useState)(reduceMotion?0:duration),[transitionStatus,setStatus]=(0,import_react73.useState)(mounted?"entered":"exited"),timeoutRef=(0,import_react73.useRef)(-1),rafRef=(0,import_react73.useRef)(-1);return useDidUpdate((()=>{(shouldMount=>{const preHandler=shouldMount?onEnter:onExit,handler=shouldMount?onEntered:onExited;window.clearTimeout(timeoutRef.current);const newTransitionDuration=reduceMotion?0:shouldMount?duration:exitDuration;setTransitionDuration(newTransitionDuration),0===newTransitionDuration?("function"==typeof preHandler&&preHandler(),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")):rafRef.current=requestAnimationFrame((()=>{import_react_dom.default.flushSync((()=>{setStatus(shouldMount?"pre-entering":"pre-exiting")})),rafRef.current=requestAnimationFrame((()=>{"function"==typeof preHandler&&preHandler(),setStatus(shouldMount?"entering":"exiting"),timeoutRef.current=window.setTimeout((()=>{"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")}),newTransitionDuration)}))}))})(mounted)}),[mounted]),(0,import_react73.useEffect)((()=>()=>{window.clearTimeout(timeoutRef.current),cancelAnimationFrame(rafRef.current)}),[]),{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:timingFunction||"ease"}}function Transition({keepMounted:keepMounted,transition:transition="fade",duration:duration=250,exitDuration:exitDuration=duration,mounted:mounted,children:children,timingFunction:timingFunction="ease",onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited}){const{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:transitionTimingFunction}=useTransition({mounted:mounted,exitDuration:exitDuration,duration:duration,timingFunction:timingFunction,onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited});return 0===transitionDuration?mounted?import_react74.default.createElement(import_react74.default.Fragment,null,children({})):keepMounted?children({display:"none"}):null:"exited"===transitionStatus?keepMounted?children({display:"none"}):null:import_react74.default.createElement(import_react74.default.Fragment,null,children(getTransitionStyles({transition:transition,duration:transitionDuration,state:transitionStatus,timingFunction:transitionTimingFunction})))}Transition.displayName="@raikou/core/Transition";var import_react75=__toESM(require("react")),import_core9=require("@raikou/core"),ActionIcon_module_default={root:"m-8d3f4000",icon:"m-8d3afb97",loader:"m-302b9fb1",group:"m-1a0f1b21"},defaultProps3={orientation:"horizontal"},varsResolver2=(0,import_core9.createVarsResolver)(((_,{borderWidth:borderWidth})=>({group:{"--ai-border-width":(0,import_core9.rem)(borderWidth)}}))),ActionIconGroup=(0,import_core9.factory)(((_props,ref)=>{const props=(0,import_core9.useProps)("ActionIconGroup",defaultProps3,_props),_a=(0,import_core9.useProps)("ActionIconGroup",defaultProps3,_props),{className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,orientation:orientation,vars:vars,borderWidth:borderWidth,variant:variant,mod:mod}=_a,others=__objRest(_a,["className","style","classNames","styles","unstyled","orientation","vars","borderWidth","variant","mod"]),getStyles=(0,import_core9.useStyles)({name:"ActionIconGroup",props:props,classes:ActionIcon_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2,rootSelector:"group"});return import_react75.default.createElement(import_core9.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("group")),{ref:ref,variant:variant,mod:[{"data-orientation":orientation},mod],role:"group"}),others))}));ActionIconGroup.classes=ActionIcon_module_default,ActionIconGroup.displayName="@raikou/core/ActionIconGroup";var ActionIcon_module_default2={root:"m-8d3f4000",icon:"m-8d3afb97",loader:"m-302b9fb1",group:"m-1a0f1b21"},defaultProps4={},varsResolver3=(0,import_core10.createVarsResolver)(((theme,{size:size,radius:radius,variant:variant,gradient:gradient,color:color,autoContrast:autoContrast})=>{const colors=theme.variantColorResolver({color:color||theme.primaryColor,theme:theme,gradient:gradient,variant:variant||"filled",autoContrast:autoContrast});return{root:{"--ai-size":(0,import_core10.getSize)(size,"ai-size"),"--ai-radius":void 0===radius?void 0:(0,import_core10.getRadius)(radius),"--ai-bg":color||variant?colors.background:void 0,"--ai-hover":color||variant?colors.hover:void 0,"--ai-hover-color":color||variant?colors.hoverColor:void 0,"--ai-color":color||variant?colors.color:void 0,"--ai-bd":color||variant?colors.border:void 0}}})),ActionIcon=(0,import_core10.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core10.useProps)("ActionIcon",defaultProps4,_props),_a=props,{className:className,unstyled:unstyled,variant:variant,classNames:classNames,styles:styles,style:style,loading:loading,loaderProps:loaderProps,size:size,color:color,radius:radius,__staticSelector:__staticSelector,gradient:gradient,vars:vars,children:children,disabled:disabled,"data-disabled":dataDisabled,autoContrast:autoContrast,mod:mod}=_a,others=__objRest(_a,["className","unstyled","variant","classNames","styles","style","loading","loaderProps","size","color","radius","__staticSelector","gradient","vars","children","disabled","data-disabled","autoContrast","mod"]),getStyles=(0,import_core10.useStyles)({name:["ActionIcon",__staticSelector],props:props,className:className,style:style,classes:ActionIcon_module_default2,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver3});return import_react76.default.createElement(UnstyledButton,__spreadProps(__spreadValues(__spreadValues({},getStyles("root",{active:!disabled&&!loading&&!dataDisabled})),others),{unstyled:unstyled,variant:variant,size:size,disabled:disabled||loading,ref:ref,mod:[{loading:loading,disabled:disabled||dataDisabled},mod]}),import_react76.default.createElement(Transition,{mounted:!!loading,transition:"slide-down",duration:150},(transitionStyles=>import_react76.default.createElement(import_core10.Box,__spreadProps(__spreadValues({component:"span"},getStyles("loader",{style:transitionStyles})),{"aria-hidden":!0}),import_react76.default.createElement(Loader,__spreadValues({color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)"},loaderProps))))),import_react76.default.createElement(import_core10.Box,__spreadValues({component:"span",mod:{loading:loading}},getStyles("icon")),children))}));ActionIcon.displayName="@raikou/core/ActionIcon",ActionIcon.Group=ActionIconGroup,ActionIcon.classes=ActionIcon_module_default2;