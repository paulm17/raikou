var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React15,{useEffect as useEffect3,useState as useState4}from"react";import{Box as Box9,factory as factory4,useProps as useProps7,useStyles as useStyles5,useResolvedStylesApi,getDefaultZIndex as getDefaultZIndex3}from"@raikou/core";import React,{useRef,useState,forwardRef}from"react";import{createPortal}from"react-dom";import{useIsomorphicEffect,assignRef}from"@raikou/hooks";import{useProps}from"@raikou/core";function createPortalNode(props){const node=document.createElement("div");return node.setAttribute("data-portal","true"),"string"==typeof props.className&&node.classList.add(...props.className.split(" ").filter(Boolean)),"object"==typeof props.style&&Object.assign(node.style,props.style),"string"==typeof props.id&&node.setAttribute("id",props.id),node}var defaultProps={},Portal=forwardRef(((props,ref)=>{const _a=useProps("Portal",defaultProps,props),{children:children,target:target}=_a,others=__objRest(_a,["children","target"]),[mounted,setMounted]=useState(!1),nodeRef=useRef(null);return useIsomorphicEffect((()=>(setMounted(!0),nodeRef.current=target?"string"==typeof target?document.querySelector(target):target:createPortalNode(others),assignRef(ref,nodeRef.current),!target&&nodeRef.current&&document.body.appendChild(nodeRef.current),()=>{!target&&nodeRef.current&&document.body.removeChild(nodeRef.current)})),[target]),mounted&&nodeRef.current?createPortal(React.createElement(React.Fragment,null,children),nodeRef.current):null}));Portal.displayName="@raikou/core/Portal";import React2 from"react";function OptionalPortal(_a){var _b=_a,{withinPortal:withinPortal=!0,children:children}=_b,others=__objRest(_b,["withinPortal","children"]);return withinPortal?React2.createElement(Portal,__spreadValues({},others),children):React2.createElement(React2.Fragment,null,children)}OptionalPortal.displayName="@raikou/core/OptionalPortal";import{useDisclosure}from"@raikou/hooks";import React14 from"react";import{useDropzone}from"react-dropzone";import{Box as Box8,factory as factory3,useProps as useProps6,useStyles as useStyles4,createVarsResolver as createVarsResolver4,getRadius as getRadius2}from"@raikou/core";import React10 from"react";import{Box as Box7,factory as factory2,useProps as useProps4,useStyles as useStyles3,createVarsResolver as createVarsResolver3,useRaikouTheme as useRaikouTheme2,getDefaultZIndex as getDefaultZIndex2}from"@raikou/core";import{rem}from"@raikou/core";var popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${rem(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${rem(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})};import React3 from"react";var transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:transition,state:state,duration:duration,timingFunction:timingFunction}){const shared={transitionDuration:`${duration}ms`,transitionTimingFunction:timingFunction};return"string"==typeof transition?transition in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[transition].transitionProperty},shared),transitions[transition].common),transitions[transition][transitionStatuses[state]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:transition.transitionProperty},shared),transition.common),transition[transitionStatuses[state]])}import{useState as useState2,useEffect,useRef as useRef2}from"react";import ReactDOM from"react-dom";import{useReducedMotion,useDidUpdate}from"@raikou/hooks";import{useRaikouTheme}from"@raikou/core";function useTransition({duration:duration,exitDuration:exitDuration,timingFunction:timingFunction,mounted:mounted,onEnter:onEnter,onExit:onExit,onEntered:onEntered,onExited:onExited}){const theme=useRaikouTheme(),shouldReduceMotion=useReducedMotion(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,[transitionDuration,setTransitionDuration]=useState2(reduceMotion?0:duration),[transitionStatus,setStatus]=useState2(mounted?"entered":"exited"),timeoutRef=useRef2(-1),rafRef=useRef2(-1);return useDidUpdate((()=>{(shouldMount=>{const preHandler=shouldMount?onEnter:onExit,handler=shouldMount?onEntered:onExited;window.clearTimeout(timeoutRef.current);const newTransitionDuration=reduceMotion?0:shouldMount?duration:exitDuration;setTransitionDuration(newTransitionDuration),0===newTransitionDuration?("function"==typeof preHandler&&preHandler(),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")):rafRef.current=requestAnimationFrame((()=>{ReactDOM.flushSync((()=>{setStatus(shouldMount?"pre-entering":"pre-exiting")})),rafRef.current=requestAnimationFrame((()=>{"function"==typeof preHandler&&preHandler(),setStatus(shouldMount?"entering":"exiting"),timeoutRef.current=window.setTimeout((()=>{"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")}),newTransitionDuration)}))}))})(mounted)}),[mounted]),useEffect((()=>()=>{window.clearTimeout(timeoutRef.current),cancelAnimationFrame(rafRef.current)}),[]),{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:timingFunction||"ease"}}function Transition({keepMounted:keepMounted,transition:transition="fade",duration:duration=250,exitDuration:exitDuration=duration,mounted:mounted,children:children,timingFunction:timingFunction="ease",onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited}){const{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:transitionTimingFunction}=useTransition({mounted:mounted,exitDuration:exitDuration,duration:duration,timingFunction:timingFunction,onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited});return 0===transitionDuration?mounted?React3.createElement(React3.Fragment,null,children({})):keepMounted?children({display:"none"}):null:"exited"===transitionStatus?keepMounted?children({display:"none"}):null:React3.createElement(React3.Fragment,null,children(getTransitionStyles({transition:transition,duration:transitionDuration,state:transitionStatus,timingFunction:transitionTimingFunction})))}Transition.displayName="@raikou/core/Transition";import React8 from"react";import{Box as Box5,useProps as useProps2,getThemeColor,useStyles,factory,getSize,createVarsResolver}from"@raikou/core";import React4,{forwardRef as forwardRef2}from"react";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var clsx_default=clsx;import{Box}from"@raikou/core";var Loader_module_default={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},Bars=forwardRef2(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React4.createElement(Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.barsLoader,className)},others),{ref:ref}),React4.createElement("span",{className:Loader_module_default.bar}),React4.createElement("span",{className:Loader_module_default.bar}),React4.createElement("span",{className:Loader_module_default.bar}))}));import React5,{forwardRef as forwardRef3}from"react";import{Box as Box2}from"@raikou/core";var Oval=forwardRef3(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React5.createElement(Box2,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.ovalLoader,className)},others),{ref:ref}))}));import React6,{forwardRef as forwardRef4}from"react";import{Box as Box3}from"@raikou/core";var Progress=forwardRef4(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React6.createElement(Box3,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.progressLoader,className)},others),{ref:ref}),React6.createElement("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},React6.createElement("g",{fill:"none",fillRule:"evenodd"},React6.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},React6.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),React6.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},React6.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"}))))))}));import React7,{forwardRef as forwardRef5}from"react";import{Box as Box4}from"@raikou/core";var Dots=forwardRef5(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return React7.createElement(Box4,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.dotsLoader,className)},others),{ref:ref}),React7.createElement("span",{className:Loader_module_default.dot}),React7.createElement("span",{className:Loader_module_default.dot}),React7.createElement("span",{className:Loader_module_default.dot}))})),Loader_module_default2={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},defaultLoaders={bars:Bars,oval:Oval,dots:Dots,progress:Progress},defaultProps2={loaders:defaultLoaders,type:"oval"},varsResolver=createVarsResolver(((theme,{size:size,color:color})=>({root:{"--loader-size":getSize(size,"loader-size"),"--loader-color":color?getThemeColor(color,theme):void 0}}))),Loader=factory(((_props,ref)=>{const props=useProps2("Loader",defaultProps2,_props),_a=props,{size:size,color:color,type:type,vars:vars,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,loaders:loaders,variant:variant,children:children}=_a,others=__objRest(_a,["size","color","type","vars","className","style","classNames","styles","unstyled","loaders","variant","children"]),getStyles=useStyles({name:"Loader",props:props,classes:Loader_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return children?React8.createElement(Box5,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref}),others),children):React8.createElement(Box5,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref,component:loaders[type],variant:variant,size:size}),others))}));Loader.defaultLoaders=defaultLoaders,Loader.displayName="@raikou/core/Loader",Loader.classes=Loader_module_default2;import React9 from"react";import{Box as Box6,polymorphicFactory,useProps as useProps3,useStyles as useStyles2,createVarsResolver as createVarsResolver2,rgba,getDefaultZIndex,getRadius,rem as rem2}from"@raikou/core";var Overlay_module_default={root:"m-9814e45f"},defaultProps3={zIndex:getDefaultZIndex("modal")},varsResolver2=createVarsResolver2(((_,{gradient:gradient,color:color,backgroundOpacity:backgroundOpacity,blur:blur,radius:radius,zIndex:zIndex})=>({root:{"--overlay-bg":gradient||(void 0!==color||void 0!==backgroundOpacity)&&rgba(color||"#000",null!=backgroundOpacity?backgroundOpacity:.6)||void 0,"--overlay-filter":blur?`blur(${rem2(blur)})`:void 0,"--overlay-radius":void 0===radius?void 0:getRadius(radius),"--overlay-z-index":null==zIndex?void 0:zIndex.toString()}}))),Overlay=polymorphicFactory(((_props,ref)=>{const props=useProps3("Overlay",defaultProps3,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,fixed:fixed,center:center,children:children,radius:radius,zIndex:zIndex,gradient:gradient,blur:blur,color:color,backgroundOpacity:backgroundOpacity,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","fixed","center","children","radius","zIndex","gradient","blur","color","backgroundOpacity","mod"]),getStyles=useStyles2({name:"Overlay",props:props,classes:Overlay_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2});return React9.createElement(Box6,__spreadValues(__spreadProps(__spreadValues({ref:ref},getStyles("root")),{mod:[{center:center,fixed:fixed},mod]}),others),children)}));Overlay.displayName="@raikou/core/Overlay",Overlay.classes=Overlay_module_default;var LoadingOverlay_module_default={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"},defaultProps4={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:getDefaultZIndex2("overlay")},varsResolver3=createVarsResolver3(((_,{zIndex:zIndex})=>({root:{"--lo-z-index":null==zIndex?void 0:zIndex.toString()}}))),LoadingOverlay=factory2(((_props,ref)=>{const props=useProps4("LoadingOverlay",defaultProps4,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,transitionProps:transitionProps,loaderProps:loaderProps,overlayProps:overlayProps,visible:visible,zIndex:zIndex}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","transitionProps","loaderProps","overlayProps","visible","zIndex"]),theme=useRaikouTheme2(),getStyles=useStyles3({name:"LoadingOverlay",classes:LoadingOverlay_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver3}),_overlayProps=__spreadValues(__spreadValues({},defaultProps4.overlayProps),overlayProps);return React10.createElement(Transition,__spreadProps(__spreadValues({transition:"fade"},transitionProps),{mounted:!!visible}),(transitionStyles=>React10.createElement(Box7,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{style:transitionStyles})),{ref:ref}),others),React10.createElement(Loader,__spreadValues(__spreadValues({},getStyles("loader")),loaderProps)),React10.createElement(Overlay,__spreadProps(__spreadValues(__spreadValues({},_overlayProps),getStyles("overlay")),{"data-light":!0,unstyled:unstyled,color:(null==overlayProps?void 0:overlayProps.color)||theme.white})),React10.createElement(Overlay,__spreadProps(__spreadValues(__spreadValues({},_overlayProps),getStyles("overlay")),{"data-dark":!0,unstyled:unstyled,color:(null==overlayProps?void 0:overlayProps.color)||theme.colors.dark[5]})))))}));LoadingOverlay.classes=LoadingOverlay_module_default,LoadingOverlay.displayName="@raikou/core/LoadingOverlay";import{assignRef as assignRef2}from"@raikou/hooks";import React11,{createContext,useContext}from"react";function createSafeContext(errorMessage){const Context=createContext(null);return[({children:children,value:value})=>React11.createElement(Context.Provider,{value:value},children),()=>{const ctx=useContext(Context);if(null===ctx)throw new Error(errorMessage);return ctx}]}import React12,{createContext as createContext2,useContext as useContext2}from"react";import{useState as useState3}from"react";import{useEffect as useEffect2,useLayoutEffect}from"react";var[DropzoneProvider,useDropzoneContext]=createSafeContext("Dropzone component was not found in tree");import React13,{cloneElement}from"react";import{upperFirst}from"@raikou/hooks";import{isElement,useProps as useProps5}from"@raikou/core";function createDropzoneStatus(status){const Component=props=>{const _a=useProps5(`Dropzone${upperFirst(status)}`,{},props),{children:children}=_a,others=__objRest(_a,["children"]),ctx=useDropzoneContext(),_children=isElement(children)?children:React13.createElement("span",null,children);return ctx[status]?cloneElement(_children,others):null};return Component.displayName=`@raikou/dropzone/${upperFirst(status)}`,Component}var DropzoneAccept=createDropzoneStatus("accept"),DropzoneReject=createDropzoneStatus("reject"),DropzoneIdle=createDropzoneStatus("idle"),Dropzone_module_default={root:"m-d46a4834",inner:"m-b85f7144",fullScreen:"m-96f6e9ad",dropzone:"m-7946116d"},defaultProps5={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},varsResolver4=createVarsResolver4(((theme,{radius:radius,variant:variant,acceptColor:acceptColor,rejectColor:rejectColor})=>{const acceptColors=theme.variantColorResolver({color:acceptColor||theme.primaryColor,theme:theme,variant:variant}),rejectColors=theme.variantColorResolver({color:rejectColor||"red",theme:theme,variant:variant});return{root:{"--dropzone-radius":getRadius2(radius),"--dropzone-accept-color":acceptColors.color,"--dropzone-accept-bg":acceptColors.background,"--dropzone-reject-color":rejectColors.color,"--dropzone-reject-bg":rejectColors.background}}})),Dropzone=factory3(((_props,ref)=>{const props=useProps6("Dropzone",defaultProps5,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,radius:radius,disabled:disabled,loading:loading,multiple:multiple,maxSize:maxSize,accept:accept,children:children,onDropAny:onDropAny,onDrop:onDrop,onReject:onReject,openRef:openRef,name:name,maxFiles:maxFiles,autoFocus:autoFocus,activateOnClick:activateOnClick,activateOnDrag:activateOnDrag,dragEventsBubbling:dragEventsBubbling,activateOnKeyboard:activateOnKeyboard,onDragEnter:onDragEnter,onDragLeave:onDragLeave,onDragOver:onDragOver,onFileDialogCancel:onFileDialogCancel,onFileDialogOpen:onFileDialogOpen,preventDropOnDocument:preventDropOnDocument,useFsAccessApi:useFsAccessApi,getFilesFromEvent:getFilesFromEvent,validator:validator,rejectColor:rejectColor,acceptColor:acceptColor,enablePointerEvents:enablePointerEvents,loaderProps:loaderProps,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","radius","disabled","loading","multiple","maxSize","accept","children","onDropAny","onDrop","onReject","openRef","name","maxFiles","autoFocus","activateOnClick","activateOnDrag","dragEventsBubbling","activateOnKeyboard","onDragEnter","onDragLeave","onDragOver","onFileDialogCancel","onFileDialogOpen","preventDropOnDocument","useFsAccessApi","getFilesFromEvent","validator","rejectColor","acceptColor","enablePointerEvents","loaderProps","mod"]),getStyles=useStyles4({name:"Dropzone",classes:Dropzone_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver4}),{getRootProps:getRootProps,getInputProps:getInputProps,isDragAccept:isDragAccept,isDragReject:isDragReject,open:open}=useDropzone(__spreadValues({onDrop:onDropAny,onDropAccepted:onDrop,onDropRejected:onReject,disabled:disabled||loading,accept:Array.isArray(accept)?accept.reduce(((r2,key)=>__spreadProps(__spreadValues({},r2),{[key]:[]})),{}):accept,multiple:multiple,maxSize:maxSize,maxFiles:maxFiles,autoFocus:autoFocus,noClick:!activateOnClick,noDrag:!activateOnDrag,noDragEventsBubbling:!dragEventsBubbling,noKeyboard:!activateOnKeyboard,onDragEnter:onDragEnter,onDragLeave:onDragLeave,onDragOver:onDragOver,onFileDialogCancel:onFileDialogCancel,onFileDialogOpen:onFileDialogOpen,preventDropOnDocument:preventDropOnDocument,useFsAccessApi:useFsAccessApi,validator:validator},getFilesFromEvent?{getFilesFromEvent:getFilesFromEvent}:null));assignRef2(openRef,open);const isIdle=!isDragAccept&&!isDragReject;return React14.createElement(DropzoneProvider,{value:{accept:isDragAccept,reject:isDragReject,idle:isIdle}},React14.createElement(Box8,__spreadProps(__spreadValues(__spreadValues(__spreadValues({},getRootProps({ref:ref})),getStyles("root",{focusable:!0})),others),{mod:[{accept:isDragAccept,reject:isDragReject,idle:isIdle,loading:loading,"activate-on-click":activateOnClick},mod]}),React14.createElement(LoadingOverlay,{visible:loading,overlayProps:{radius:radius},unstyled:unstyled,loaderProps:loaderProps}),React14.createElement("input",__spreadProps(__spreadValues({},getInputProps()),{name:name})),React14.createElement("div",__spreadProps(__spreadValues({},getStyles("inner")),{"data-enable-pointer-events":enablePointerEvents||void 0}),children)))}));Dropzone.classes=Dropzone_module_default,Dropzone.displayName="@raikou/dropzone/Dropzone",Dropzone.Accept=DropzoneAccept,Dropzone.Idle=DropzoneIdle,Dropzone.Reject=DropzoneReject;var defaultProps6={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:getDefaultZIndex3("max"),withinPortal:!0},DropzoneFullScreen=factory4(((_props,ref)=>{const props=useProps7("DropzoneFullScreen",defaultProps6,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,active:active,onDrop:onDrop,onReject:onReject,zIndex:zIndex,withinPortal:withinPortal,portalProps:portalProps}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","active","onDrop","onReject","zIndex","withinPortal","portalProps"]),getStyles=useStyles5({name:"DropzoneFullScreen",classes:{root:"dropZone-root",fullScreen:"dropZone-fullScreen"},props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"fullScreen"}),{resolvedClassNames:resolvedClassNames,resolvedStyles:resolvedStyles}=useResolvedStylesApi({classNames:classNames,styles:styles,props:props}),[counter,setCounter]=useState4(0),[visible,{open:open,close:close}]=useDisclosure(!1),handleDragEnter=event=>{var _a2;(null==(_a2=event.dataTransfer)?void 0:_a2.types.includes("Files"))&&(setCounter((prev=>prev+1)),open())},handleDragLeave=()=>{setCounter((prev=>prev-1))};return useEffect3((()=>{0===counter&&close()}),[counter]),useEffect3((()=>{if(active)return document.addEventListener("dragenter",handleDragEnter,!1),document.addEventListener("dragleave",handleDragLeave,!1),()=>{document.removeEventListener("dragenter",handleDragEnter,!1),document.removeEventListener("dragleave",handleDragLeave,!1)}}),[active]),React15.createElement(OptionalPortal,__spreadProps(__spreadValues({},portalProps),{withinPortal:withinPortal}),React15.createElement(Box9,__spreadProps(__spreadValues({},getStyles("fullScreen",{style:{opacity:visible?1:0,pointerEvents:visible?"all":"none",zIndex:zIndex}})),{ref:ref}),React15.createElement(Dropzone,__spreadProps(__spreadValues({},others),{classNames:resolvedClassNames,styles:resolvedStyles,unstyled:unstyled,className:"dropZone-root dropZone-fullScreen",onDrop:files=>{null==onDrop||onDrop(files),close(),setCounter(0)},onReject:files=>{null==onReject||onReject(files),close(),setCounter(0)}}))))}));DropzoneFullScreen.displayName="@raikou/dropzone/DropzoneFullScreen";var MIME_TYPES={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",zip:"application/zip",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},IMAGE_MIME_TYPE=[MIME_TYPES.png,MIME_TYPES.gif,MIME_TYPES.jpeg,MIME_TYPES.svg,MIME_TYPES.webp,MIME_TYPES.avif,MIME_TYPES.heic],PDF_MIME_TYPE=[MIME_TYPES.pdf],MS_WORD_MIME_TYPE=[MIME_TYPES.doc,MIME_TYPES.docx],MS_EXCEL_MIME_TYPE=[MIME_TYPES.xls,MIME_TYPES.xlsx],MS_POWERPOINT_MIME_TYPE=[MIME_TYPES.ppt,MIME_TYPES.pptx],EXE_MIME_TYPE=[MIME_TYPES.exe];Dropzone.FullScreen=DropzoneFullScreen;var Dropzone2=Dropzone;export{Dropzone2 as Dropzone,DropzoneAccept,DropzoneFullScreen,DropzoneIdle,DropzoneReject,EXE_MIME_TYPE,IMAGE_MIME_TYPE,MIME_TYPES,MS_EXCEL_MIME_TYPE,MS_POWERPOINT_MIME_TYPE,MS_WORD_MIME_TYPE,PDF_MIME_TYPE};