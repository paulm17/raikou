"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Notifications:()=>Notifications,cleanNotifications:()=>cleanNotifications,cleanNotificationsQueue:()=>cleanNotificationsQueue,createNotificationsStore:()=>createNotificationsStore,hideNotification:()=>hideNotification,notifications:()=>notifications,notificationsStore:()=>notificationsStore,showNotification:()=>showNotification,updateNotification:()=>updateNotification,updateNotificationsState:()=>updateNotificationsState,useNotifications:()=>useNotifications}),module.exports=__toCommonJS(src_exports);var import_hooks=require("@raikou/hooks"),import_react=require("react");function createStore(initialState){let state=initialState,initialized=!1;const listeners=new Set;return{getState:()=>state,updateState(value){state="function"==typeof value?value(state):value},setState(value){this.updateState(value),listeners.forEach((listener=>listener(state)))},initialize(value){initialized||(state=value,initialized=!0)},subscribe:callback=>(listeners.add(callback),()=>listeners.delete(callback))}}function useStore(store){return(0,import_react.useSyncExternalStore)(store.subscribe,(()=>store.getState()),(()=>store.getState()))}var createNotificationsStore=()=>createStore({notifications:[],queue:[],limit:5}),notificationsStore=createNotificationsStore(),useNotifications=(store=notificationsStore)=>useStore(store);function updateNotificationsState(store,update){const state=store.getState(),notifications2=update([...state.notifications,...state.queue]);store.setState({notifications:notifications2.slice(0,state.limit),queue:notifications2.slice(state.limit),limit:state.limit})}function showNotification(notification,store=notificationsStore){const id=notification.id||(0,import_hooks.randomId)();return updateNotificationsState(store,(notifications2=>notification.id&&notifications2.some((n=>n.id===notification.id))?notifications2:[...notifications2,__spreadProps(__spreadValues({},notification),{id:id})])),id}function hideNotification(id,store=notificationsStore){return updateNotificationsState(store,(notifications2=>notifications2.filter((notification=>{var _a;return notification.id!==id||(null==(_a=notification.onClose)||_a.call(notification,notification),!1)})))),id}function updateNotification(notification,store=notificationsStore){return updateNotificationsState(store,(notifications2=>notifications2.map((item=>item.id===notification.id?__spreadValues(__spreadValues({},item),notification):item)))),notification.id}function cleanNotifications(store=notificationsStore){updateNotificationsState(store,(()=>[]))}function cleanNotificationsQueue(store=notificationsStore){updateNotificationsState(store,(notifications2=>notifications2.slice(0,store.getState().limit)))}var notifications={show:showNotification,hide:hideNotification,update:updateNotification,clean:cleanNotifications,cleanQueue:cleanNotificationsQueue,updateState:updateNotificationsState},import_react14=__toESM(require("react")),import_react_transition_group=require("react-transition-group"),import_hooks3=require("@raikou/hooks"),import_core10=require("@raikou/core"),import_react2=__toESM(require("react")),import_react_dom=require("react-dom"),import_hooks2=require("@raikou/hooks"),import_core=require("@raikou/core");function createPortalNode(props){const node=document.createElement("div");return node.setAttribute("data-portal","true"),"string"==typeof props.className&&node.classList.add(...props.className.split(" ").filter(Boolean)),"object"==typeof props.style&&Object.assign(node.style,props.style),"string"==typeof props.id&&node.setAttribute("id",props.id),node}var defaultProps={},Portal=(0,import_react2.forwardRef)(((props,ref)=>{const _a=(0,import_core.useProps)("Portal",defaultProps,props),{children:children,target:target}=_a,others=__objRest(_a,["children","target"]),[mounted,setMounted]=(0,import_react2.useState)(!1),nodeRef=(0,import_react2.useRef)(null);return(0,import_hooks2.useIsomorphicEffect)((()=>(setMounted(!0),nodeRef.current=target?"string"==typeof target?document.querySelector(target):target:createPortalNode(others),(0,import_hooks2.assignRef)(ref,nodeRef.current),!target&&nodeRef.current&&document.body.appendChild(nodeRef.current),()=>{!target&&nodeRef.current&&document.body.removeChild(nodeRef.current)})),[target]),mounted&&nodeRef.current?(0,import_react_dom.createPortal)(import_react2.default.createElement(import_react2.default.Fragment,null,children),nodeRef.current):null}));Portal.displayName="@raikou/core/Portal";var import_react3=__toESM(require("react"));function OptionalPortal(_a){var _b=_a,{withinPortal:withinPortal=!0,children:children}=_b,others=__objRest(_b,["withinPortal","children"]);return withinPortal?import_react3.default.createElement(Portal,__spreadValues({},others),children):import_react3.default.createElement(import_react3.default.Fragment,null,children)}OptionalPortal.displayName="@raikou/core/OptionalPortal";var import_react13=__toESM(require("react")),import_react12=__toESM(require("react")),import_core9=require("@raikou/core"),import_react8=__toESM(require("react")),import_core6=require("@raikou/core"),import_react4=__toESM(require("react"));function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var clsx_default=clsx,import_core2=require("@raikou/core"),Loader_module_default={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},Bars=(0,import_react4.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react4.default.createElement(import_core2.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.barsLoader,className)},others),{ref:ref}),import_react4.default.createElement("span",{className:Loader_module_default.bar}),import_react4.default.createElement("span",{className:Loader_module_default.bar}),import_react4.default.createElement("span",{className:Loader_module_default.bar}))})),import_react5=__toESM(require("react")),import_core3=require("@raikou/core"),Oval=(0,import_react5.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react5.default.createElement(import_core3.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.ovalLoader,className)},others),{ref:ref}))})),import_react6=__toESM(require("react")),import_core4=require("@raikou/core"),Progress=(0,import_react6.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react6.default.createElement(import_core4.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.progressLoader,className)},others),{ref:ref}),import_react6.default.createElement("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},import_react6.default.createElement("g",{fill:"none",fillRule:"evenodd"},import_react6.default.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},import_react6.default.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),import_react6.default.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},import_react6.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"}))))))})),import_react7=__toESM(require("react")),import_core5=require("@raikou/core"),Dots=(0,import_react7.forwardRef)(((_a,ref)=>{var _b=_a,{className:className}=_b,others=__objRest(_b,["className"]);return import_react7.default.createElement(import_core5.Box,__spreadProps(__spreadValues({component:"span",className:clsx_default(Loader_module_default.dotsLoader,className)},others),{ref:ref}),import_react7.default.createElement("span",{className:Loader_module_default.dot}),import_react7.default.createElement("span",{className:Loader_module_default.dot}),import_react7.default.createElement("span",{className:Loader_module_default.dot}))})),Loader_module_default2={root:"m-5ae2e3c",barsLoader:"m-7a2bd4cd",bar:"m-870bb79","bars-loader-animation":"m-5d2b3b9d",dotsLoader:"m-4e3f22d7",dot:"m-870c4af","loader-dots-animation":"m-aac34a1",ovalLoader:"m-b34414df","oval-loader-animation":"m-f8e89c4b",progressLoader:"m-f7590d7a"},defaultLoaders={bars:Bars,oval:Oval,dots:Dots,progress:Progress},defaultProps2={loaders:defaultLoaders,type:"oval"},varsResolver=(0,import_core6.createVarsResolver)(((theme,{size:size,color:color})=>({root:{"--loader-size":(0,import_core6.getSize)(size,"loader-size"),"--loader-color":color?(0,import_core6.getThemeColor)(color,theme):void 0}}))),Loader=(0,import_core6.factory)(((_props,ref)=>{const props=(0,import_core6.useProps)("Loader",defaultProps2,_props),_a=props,{size:size,color:color,type:type,vars:vars,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,loaders:loaders,variant:variant,children:children}=_a,others=__objRest(_a,["size","color","type","vars","className","style","classNames","styles","unstyled","loaders","variant","children"]),getStyles=(0,import_core6.useStyles)({name:"Loader",props:props,classes:Loader_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver});return children?import_react8.default.createElement(import_core6.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref}),others),children):import_react8.default.createElement(import_core6.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref,component:loaders[type],variant:variant,size:size}),others))}));Loader.defaultLoaders=defaultLoaders,Loader.displayName="@raikou/core/Loader",Loader.classes=Loader_module_default2;var import_react9=__toESM(require("react")),CloseIcon=(0,import_react9.forwardRef)(((_a,ref)=>{var _b=_a,{size:size="var(--cb-icon-size, 70%)",style:style}=_b,others=__objRest(_b,["size","style"]);return import_react9.default.createElement("svg",__spreadValues({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:__spreadProps(__spreadValues({},style),{width:size,height:size}),ref:ref},others),import_react9.default.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}));CloseIcon.displayName="@raikou/core/CloseIcon";var import_react11=__toESM(require("react")),import_core8=require("@raikou/core"),import_react10=__toESM(require("react")),import_core7=require("@raikou/core"),UnstyledButton_module_default={root:"m-87cf2631"},defaultProps3={__staticSelector:"UnstyledButton"},UnstyledButton=(0,import_core7.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core7.useProps)("UnstyledButton",defaultProps3,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=(0,import_core7.useStyles)({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return import_react10.default.createElement(import_core7.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var CloseButton_module_default={root:"m-86a44da5","root--subtle":"m-220c80f2"},defaultProps4={variant:"subtle",size:"md"},varsResolver2=(0,import_core8.createVarsResolver)(((_,{size:size,radius:radius,iconSize:iconSize})=>({root:{"--cb-size":(0,import_core8.getSize)(size,"cb-size"),"--cb-radius":void 0===radius?void 0:(0,import_core8.getRadius)(radius),"--cb-icon-size":(0,import_core8.rem)(iconSize)}}))),CloseButton=(0,import_core8.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core8.useProps)("CloseButton",defaultProps4,_props),_a=props,{iconSize:iconSize,children:children,vars:vars,radius:radius,className:className,classNames:classNames,style:style,styles:styles,unstyled:unstyled,"data-disabled":dataDisabled,disabled:disabled,variant:variant,icon:icon,mod:mod}=_a,others=__objRest(_a,["iconSize","children","vars","radius","className","classNames","style","styles","unstyled","data-disabled","disabled","variant","icon","mod"]),getStyles=(0,import_core8.useStyles)({name:"CloseButton",props:props,className:className,style:style,classes:CloseButton_module_default,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver2});return import_react11.default.createElement(UnstyledButton,__spreadValues(__spreadProps(__spreadValues({ref:ref},others),{unstyled:unstyled,variant:variant,disabled:disabled,mod:[{disabled:disabled||dataDisabled},mod]}),getStyles("root",{variant:variant,active:!0})),icon||import_react11.default.createElement(CloseIcon,null),children)}));CloseButton.displayName="@raikou/core/CloseButton",CloseButton.classes=CloseButton_module_default;var Notification_module_default={root:"m-a513464",icon:"m-a4ceffb",loader:"m-b0920b15",body:"m-a49ed24",title:"m-3feedf16",description:"m-3d733a3a",closeButton:"m-919a4d88"},defaultProps5={withCloseButton:!0},varsResolver3=(0,import_core9.createVarsResolver)(((theme,{radius:radius,color:color})=>({root:{"--notification-radius":void 0===radius?void 0:(0,import_core9.getRadius)(radius),"--notification-color":color?(0,import_core9.getThemeColor)(color,theme):void 0}}))),Notification=(0,import_core9.factory)(((_props,ref)=>{const props=(0,import_core9.useProps)("Notification",defaultProps5,_props),_a=props,{className:className,color:color,radius:radius,loading:loading,withCloseButton:withCloseButton,withBorder:withBorder,title:title,icon:icon,children:children,onClose:onClose,closeButtonProps:closeButtonProps,classNames:classNames,style:style,styles:styles,unstyled:unstyled,variant:variant,vars:vars,mod:mod}=_a,others=__objRest(_a,["className","color","radius","loading","withCloseButton","withBorder","title","icon","children","onClose","closeButtonProps","classNames","style","styles","unstyled","variant","vars","mod"]),getStyles=(0,import_core9.useStyles)({name:"Notification",classes:Notification_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver3});return import_react12.default.createElement(import_core9.Box,__spreadProps(__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{mod:[{"data-with-icon":!!icon||loading,"data-with-border":withBorder},mod],ref:ref,variant:variant}),others),{role:"alert"}),icon&&!loading&&import_react12.default.createElement("div",__spreadValues({},getStyles("icon")),icon),loading&&import_react12.default.createElement(Loader,__spreadValues({size:28,color:color},getStyles("loader"))),import_react12.default.createElement("div",__spreadValues({},getStyles("body")),title&&import_react12.default.createElement("div",__spreadValues({},getStyles("title")),title),import_react12.default.createElement(import_core9.Box,__spreadProps(__spreadValues({},getStyles("description")),{mod:{"data-with-title":!!title}}),children)),withCloseButton&&import_react12.default.createElement(CloseButton,__spreadValues(__spreadProps(__spreadValues({iconSize:16,color:"gray"},closeButtonProps),{onClick:onClose}),getStyles("closeButton"))))}));function getAutoClose(autoClose,notificationAutoClose){return"number"==typeof notificationAutoClose?notificationAutoClose:!1!==notificationAutoClose&&!1!==autoClose&&autoClose}Notification.classes=Notification_module_default,Notification.displayName="@raikou/core/Notification";var NotificationContainer=(0,import_react13.forwardRef)(((_a,ref)=>{var _b=_a,{data:data,onHide:onHide,autoClose:autoClose}=_b,others=__objRest(_b,["data","onHide","autoClose"]);const _a2=data,{autoClose:_autoClose,message:message}=_a2,notificationProps=__objRest(_a2,["autoClose","message"]),autoCloseDuration=getAutoClose(autoClose,data.autoClose),autoCloseTimeout=(0,import_react13.useRef)(),cancelAutoClose=()=>window.clearTimeout(autoCloseTimeout.current),handleHide=()=>{onHide(data.id),cancelAutoClose()},handleAutoClose=()=>{"number"==typeof autoCloseDuration&&(autoCloseTimeout.current=window.setTimeout(handleHide,autoCloseDuration))};return(0,import_react13.useEffect)((()=>{var _a3;null==(_a3=data.onOpen)||_a3.call(data,data)}),[]),(0,import_react13.useEffect)((()=>(handleAutoClose(),cancelAutoClose)),[autoCloseDuration]),import_react13.default.createElement(Notification,__spreadProps(__spreadValues(__spreadValues({},others),notificationProps),{onClose:handleHide,ref:ref,onMouseEnter:cancelAutoClose,onMouseLeave:handleAutoClose}),message)}));NotificationContainer.displayName="@raikou/notifications/NotificationContainer";var transforms={left:"translateX(-100%)",right:"translateX(100%)","top-center":"translateY(-100%)","bottom-center":"translateY(100%)"},noTransform={left:"translateX(0)",right:"translateX(0)","top-center":"translateY(0)","bottom-center":"translateY(0)"};function getNotificationStateStyles({state:state,maxHeight:maxHeight,position:position,transitionDuration:transitionDuration}){const[vertical,horizontal]=position.split("-"),property="center"===horizontal?`${vertical}-center`:horizontal,commonStyles={opacity:0,maxHeight:maxHeight,transform:transforms[property],transitionDuration:`${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,transitionTimingFunction:"cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",transitionProperty:"opacity, transform, max-height"},inState={opacity:1,transform:noTransform[property]},outState={opacity:0,maxHeight:0,transform:transforms[property]},transitionStyles={entering:inState,entered:inState,exiting:outState,exited:outState};return __spreadValues(__spreadValues({},commonStyles),transitionStyles[state])}var Notifications_module_default={root:"m-b37d9ac7",notification:"m-5ed0edd0"},Transition=import_react_transition_group.Transition,defaultProps6={position:"bottom-right",autoClose:4e3,transitionDuration:250,containerWidth:440,notificationMaxHeight:200,limit:5,zIndex:(0,import_core10.getDefaultZIndex)("overlay"),store:notificationsStore,withinPortal:!0},varsResolver4=(0,import_core10.createVarsResolver)(((_,{zIndex:zIndex,position:position,containerWidth:containerWidth})=>{const[vertical,horizontal]=position.split("-");return{root:{"--notifications-z-index":null==zIndex?void 0:zIndex.toString(),"--notifications-top":"top"===vertical?"var(--raikou-spacing-md)":void 0,"--notifications-bottom":"bottom"===vertical?"var(--raikou-spacing-md)":void 0,"--notifications-left":"left"===horizontal?"var(--raikou-spacing-md)":"center"===horizontal?"50%":void 0,"--notifications-right":"right"===horizontal?"var(--raikou-spacing-md)":void 0,"--notifications-transform":"center"===horizontal?"translateX(-50%)":void 0,"--notifications-container-width":(0,import_core10.rem)(containerWidth)}}})),Notifications=(0,import_core10.factory)(((_props,ref)=>{const props=(0,import_core10.useProps)("Notifications",defaultProps6,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,position:position,autoClose:autoClose,transitionDuration:transitionDuration,containerWidth:containerWidth,notificationMaxHeight:notificationMaxHeight,limit:limit,zIndex:zIndex,store:store,portalProps:portalProps,withinPortal:withinPortal}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","position","autoClose","transitionDuration","containerWidth","notificationMaxHeight","limit","zIndex","store","portalProps","withinPortal"]),theme=(0,import_core10.useRaikouTheme)(),data=useNotifications(store),forceUpdate=(0,import_hooks3.useForceUpdate)(),shouldReduceMotion=(0,import_hooks3.useReducedMotion)(),refs=(0,import_react14.useRef)({}),previousLength=(0,import_react14.useRef)(0),duration=!!theme.respectReducedMotion&&shouldReduceMotion?1:transitionDuration,getStyles=(0,import_core10.useStyles)({name:"Notifications",classes:Notifications_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver4});(0,import_react14.useEffect)((()=>{null==store||store.updateState((current=>__spreadProps(__spreadValues({},current),{limit:limit||5})))}),[limit]),(0,import_hooks3.useDidUpdate)((()=>{data.notifications.length>previousLength.current&&setTimeout((()=>forceUpdate()),0),previousLength.current=data.notifications.length}),[data.notifications]);const items=data.notifications.map((_b=>{var _c=_b,{style:notificationStyle}=_c,notification=__objRest(_c,["style"]);return import_react14.default.createElement(Transition,{key:notification.id,timeout:duration,onEnter:()=>refs.current[notification.id].offsetHeight,nodeRef:{current:refs.current[notification.id]}},(state=>import_react14.default.createElement(NotificationContainer,__spreadValues({ref:node=>{refs.current[notification.id]=node},data:notification,onHide:id=>hideNotification(id,store),autoClose:autoClose},getStyles("notification",{style:__spreadValues(__spreadValues({},getNotificationStateStyles({state:state,position:position,transitionDuration:duration,maxHeight:notificationMaxHeight})),notificationStyle)})))))}));return import_react14.default.createElement(OptionalPortal,__spreadValues({withinPortal:withinPortal},portalProps),import_react14.default.createElement(import_core10.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref}),others),import_react14.default.createElement(import_react_transition_group.TransitionGroup,null,items)))}));Notifications.classes=Notifications_module_default,Notifications.displayName="@raikou/notifications/Notifications",Notifications.show=notifications.show,Notifications.hide=notifications.hide,Notifications.update=notifications.update,Notifications.clean=notifications.clean,Notifications.cleanQueue=notifications.cleanQueue,Notifications.updateState=notifications.updateState;