var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React9 from"react";import{Box as Box7,factory as factory2,useProps as useProps3,useStyles as useStyles3,createVarsResolver as createVarsResolver3,useRaikouTheme as useRaikouTheme2,getDefaultZIndex as getDefaultZIndex2}from"@raikou/core";import{rem}from"@raikou/core";var popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${rem(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${rem(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})};import React2 from"react";var transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:transition,state:state,duration:duration,timingFunction:timingFunction}){const shared={transitionDuration:`${duration}ms`,transitionTimingFunction:timingFunction};return"string"==typeof transition?transition in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[transition].transitionProperty},shared),transitions[transition].common),transitions[transition][transitionStatuses[state]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:transition.transitionProperty},shared),transition.common),transition[transitionStatuses[state]])}import{useState as useState32,useEffect as useEffect34,useRef as useRef26}from"react";import{useRef,useEffect,useMemo}from"react";import{useRef as useRef2,useEffect as useEffect2,useCallback}from"react";import{useEffect as useEffect3,useRef as useRef3}from"react";import{useState}from"react";import{useState as useState2,useEffect as useEffect4,useRef as useRef4}from"react";import{useState as useState3}from"react";import{useEffect as useEffect5,useRef as useRef5,useState as useState4,useCallback as useCallback2}from"react";import{useEffect as useEffect6,useState as useState5,useRef as useRef6}from"react";import{useEffect as useEffect7,useLayoutEffect}from"react";import{useEffect as useEffect8,useState as useState6}from"react";import{useRef as useRef8}from"react";import{useEffect as useEffect9,useRef as useRef7}from"react";import{useCallback as useCallback3,useEffect as useEffect10,useRef as useRef9}from"react";import{useReducer}from"react";import{useState as useState7}from"react";import React from"react";import{useState as useState8,useEffect as useEffect11,useRef as useRef10}from"react";import{useEffect as useEffect12,useRef as useRef11,useState as useState9}from"react";import{useState as useState10}from"react";import{useState as useState11,useCallback as useCallback4,useEffect as useEffect14}from"react";import{useEffect as useEffect13}from"react";import{useCallback as useCallback5}from"react";import{useEffect as useEffect15,useRef as useRef12,useState as useState12}from"react";import{useEffect as useEffect16,useState as useState13,useRef as useRef13}from"react";import{useMemo as useMemo2}from"react";import{useState as useState14}from"react";import{useState as useState15}from"react";import{useEffect as useEffect17}from"react";import{useCallback as useCallback6,useRef as useRef14,useEffect as useEffect18}from"react";import{useEffect as useEffect19,useMemo as useMemo3,useRef as useRef15,useState as useState16}from"react";import{useEffect as useEffect20,useRef as useRef16}from"react";import{useReducer as useReducer2}from"react";import{useCallback as useCallback7,useState as useState17,useEffect as useEffect21}from"react";import{useState as useState18,useEffect as useEffect22}from"react";import{useCallback as useCallback8,useRef as useRef17,useState as useState19}from"react";import{useState as useState20,useEffect as useEffect23}from"react";import{useEffect as useEffect24}from"react";import{useCallback as useCallback9,useRef as useRef18,useState as useState21,useEffect as useEffect25}from"react";import{useEffect as useEffect26}from"react";import{useState as useState22,useEffect as useEffect27,useRef as useRef19,useCallback as useCallback10}from"react";import{useState as useState23}from"react";import{useState as useState24}from"react";import{useState as useState25,useCallback as useCallback11}from"react";import{useState as useState26}from"react";import{useRef as useRef20,useEffect as useEffect28}from"react";import{useState as useState27,useCallback as useCallback12}from"react";import{useRef as useRef21,useState as useState28,useEffect as useEffect29}from"react";import{useState as useState29,useEffect as useEffect30,useCallback as useCallback13}from"react";import{useRef as useRef22,useEffect as useEffect31,useCallback as useCallback14}from"react";import{useState as useState30,useEffect as useEffect32}from"react";import{useEffect as useEffect33,useRef as useRef23}from"react";import{useRef as useRef24}from"react";import{useRef as useRef25}from"react";import{useCallback as useCallback15,useState as useState31}from"react";function attachMediaListener(query,callback){try{return query.addEventListener("change",callback),()=>query.removeEventListener("change",callback)}catch(e){return query.addListener(callback),()=>query.removeListener(callback)}}function getInitialValue(query,initialValue){return"boolean"==typeof initialValue?initialValue:"undefined"!=typeof window&&"matchMedia"in window&&window.matchMedia(query).matches}function useMediaQuery(query,initialValue,{getInitialValueInEffect:getInitialValueInEffect}={getInitialValueInEffect:!0}){const[matches,setMatches]=useState2(getInitialValueInEffect?initialValue:getInitialValue(query,initialValue)),queryRef=useRef4();return useEffect4((()=>{if("matchMedia"in window)return queryRef.current=window.matchMedia(query),setMatches(queryRef.current.matches),attachMediaListener(queryRef.current,(event=>setMatches(event.matches)))}),[query]),matches}function useDidUpdate(fn,dependencies){const mounted=useRef7(!1);useEffect9((()=>()=>{mounted.current=!1}),[]),useEffect9((()=>{if(mounted.current)return fn();mounted.current=!0}),dependencies)}var __useId=React["useId".toString()]||(()=>{});function useReducedMotion(initialValue,options){return useMediaQuery("(prefers-reduced-motion: reduce)",initialValue,options)}import{useRaikouTheme}from"@raikou/core";function useTransition({duration:duration,exitDuration:exitDuration,timingFunction:timingFunction,mounted:mounted,onEnter:onEnter,onExit:onExit,onEntered:onEntered,onExited:onExited}){const theme=useRaikouTheme(),shouldReduceMotion=useReducedMotion(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,[transitionDuration,setTransitionDuration]=useState32(reduceMotion?0:duration),[transitionStatus,setStatus]=useState32(mounted?"entered":"exited"),timeoutRef=useRef26(-1);return useDidUpdate((()=>{(shouldMount=>{const preHandler=shouldMount?onEnter:onExit,handler=shouldMount?onEntered:onExited;setStatus(shouldMount?"pre-entering":"pre-exiting"),window.clearTimeout(timeoutRef.current);const newTransitionDuration=reduceMotion?0:shouldMount?duration:exitDuration;if(setTransitionDuration(newTransitionDuration),0===newTransitionDuration)"function"==typeof preHandler&&preHandler(),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited");else{const preStateTimeout=window.setTimeout((()=>{"function"==typeof preHandler&&preHandler(),setStatus(shouldMount?"entering":"exiting")}),10);timeoutRef.current=window.setTimeout((()=>{window.clearTimeout(preStateTimeout),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")}),newTransitionDuration)}})(mounted)}),[mounted]),useEffect34((()=>()=>window.clearTimeout(timeoutRef.current)),[]),{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:timingFunction||"ease"}}function Transition({keepMounted:keepMounted,transition:transition="fade",duration:duration=250,exitDuration:exitDuration=duration,mounted:mounted,children:children,timingFunction:timingFunction="ease",onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited}){const{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:transitionTimingFunction}=useTransition({mounted:mounted,exitDuration:exitDuration,duration:duration,timingFunction:timingFunction,onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited});return 0===transitionDuration?mounted?React2.createElement(React2.Fragment,null,children({})):keepMounted?children({display:"none"}):null:"exited"===transitionStatus?keepMounted?children({display:"none"}):null:React2.createElement(React2.Fragment,null,children(getTransitionStyles({transition:transition,duration:transitionDuration,state:transitionStatus,timingFunction:transitionTimingFunction})))}Transition.displayName="@raikou/core/Transition";import React7 from"react";import{Box as Box5,useProps,getThemeColor,useStyles,factory,getSize,createVarsResolver}from"@raikou/core";import React3,{forwardRef}from"react";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var clsx_default=clsx;import{Box}from"@raikou/core";var Loader_module_default={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},Bars=forwardRef(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React3.createElement(Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.barsLoader,className)},others),{ref:ref}),React3.createElement("span",{className:Loader_module_default.bar}),React3.createElement("span",{className:Loader_module_default.bar}),React3.createElement("span",{className:Loader_module_default.bar}))}));import React4,{forwardRef as forwardRef2}from"react";import{Box as Box2}from"@raikou/core";var Oval=forwardRef2(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React4.createElement(Box2,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.ovalLoader,className)},others),{ref:ref}))}));import React5,{forwardRef as forwardRef3}from"react";import{Box as Box3}from"@raikou/core";var Progress=forwardRef3(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React5.createElement(Box3,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.progressLoader,className)},others),{ref:ref}),React5.createElement("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},React5.createElement("g",{fill:"none",fillRule:"evenodd"},React5.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},React5.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),React5.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},React5.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"}))))))}));import React6,{forwardRef as forwardRef4}from"react";import{Box as Box4}from"@raikou/core";var Dots=forwardRef4(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React6.createElement(Box4,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.dotsLoader,className)},others),{ref:ref}),React6.createElement("span",{className:Loader_module_default.dot}),React6.createElement("span",{className:Loader_module_default.dot}),React6.createElement("span",{className:Loader_module_default.dot}))})),Loader_module_default2={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},defaultLoaders={bars:Bars,oval:Oval,dots:Dots,progress:Progress},defaultProps={loaders:defaultLoaders,type:"oval"},varsResolver=createVarsResolver(((theme,{size:size,color:color})=>({root:{"--loader-size":getSize(size,"loader-size"),"--loader-color":color?getThemeColor(color,theme):void 0}}))),Loader=factory(((_props,ref)=>{const props=useProps("Loader",defaultProps,_props),_a=props,{size:size,color:color,type:type,vars:vars,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,loaders:loaders,variant:variant}=_a,others=__objRest(_a,["size","color","type","vars","className","style","classNames","styles","unstyled","loaders","variant"]),getStyles=useStyles({name:"Loader",props:props,classes:Loader_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return React7.createElement(Box5,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref,component:loaders[type],variant:variant,size:size}),others))}));Loader.defaultLoaders=defaultLoaders,Loader.displayName="@raikou/core/Loader",Loader.classes=Loader_module_default2;import React8 from"react";import{Box as Box6,polymorphicFactory,useProps as useProps2,useStyles as useStyles2,createVarsResolver as createVarsResolver2,rgba,getDefaultZIndex,getRadius,rem as rem2}from"@raikou/core";var Overlay_module_default={root:"m-9814e45f"},defaultProps2={zIndex:getDefaultZIndex("modal")},varsResolver2=createVarsResolver2(((_,{gradient:gradient,color:color,backgroundOpacity:backgroundOpacity,blur:blur,radius:radius,zIndex:zIndex})=>({root:{"--overlay-bg":gradient||(void 0!==color||void 0!==backgroundOpacity)&&rgba(color||"#000",null!=backgroundOpacity?backgroundOpacity:.6)||void 0,"--overlay-filter":blur?`blur(${rem2(blur)})`:void 0,"--overlay-radius":void 0===radius?void 0:getRadius(radius),"--overlay-z-index":null==zIndex?void 0:zIndex.toString()}}))),Overlay=polymorphicFactory(((_props,ref)=>{const props=useProps2("Overlay",defaultProps2,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,fixed:fixed,center:center,children:children,radius:radius,zIndex:zIndex,gradient:gradient,blur:blur,color:color,backgroundOpacity:backgroundOpacity}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","fixed","center","children","radius","zIndex","gradient","blur","color","backgroundOpacity"]),getStyles=useStyles2({name:"Overlay",props:props,classes:Overlay_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2});return React8.createElement(Box6,__spreadValues(__spreadProps(__spreadValues({ref:ref},getStyles("root")),{mod:{center:center,fixed:fixed}}),others),children)}));Overlay.displayName="@raikou/core/Overlay",Overlay.classes=Overlay_module_default;var LoadingOverlay_module_default={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"},defaultProps3={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:getDefaultZIndex2("overlay")},varsResolver3=createVarsResolver3(((_,{zIndex:zIndex})=>({root:{"--lo-z-index":null==zIndex?void 0:zIndex.toString()}}))),LoadingOverlay=factory2(((_props,ref)=>{const props=useProps3("LoadingOverlay",defaultProps3,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,transitionProps:transitionProps,loaderProps:loaderProps,overlayProps:overlayProps,visible:visible,zIndex:zIndex}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","transitionProps","loaderProps","overlayProps","visible","zIndex"]),theme=useRaikouTheme2(),getStyles=useStyles3({name:"LoadingOverlay",classes:LoadingOverlay_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver3}),_overlayProps=__spreadValues(__spreadValues({},defaultProps3.overlayProps),overlayProps);return React9.createElement(Transition,__spreadProps(__spreadValues({transition:"fade"},transitionProps),{mounted:!!visible}),(transitionStyles=>React9.createElement(Box7,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{style:transitionStyles})),{ref:ref}),others),React9.createElement(Loader,__spreadValues(__spreadValues({},getStyles("loader")),loaderProps)),React9.createElement(Overlay,__spreadProps(__spreadValues(__spreadValues({},_overlayProps),getStyles("overlay")),{"data-light":!0,unstyled:unstyled,color:(null==overlayProps?void 0:overlayProps.color)||theme.white})),React9.createElement(Overlay,__spreadProps(__spreadValues(__spreadValues({},_overlayProps),getStyles("overlay")),{"data-dark":!0,unstyled:unstyled,color:(null==overlayProps?void 0:overlayProps.color)||theme.colors.dark[5]})))))}));LoadingOverlay.classes=LoadingOverlay_module_default,LoadingOverlay.displayName="@raikou/core/LoadingOverlay";export{LoadingOverlay};