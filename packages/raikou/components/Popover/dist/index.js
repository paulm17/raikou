"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(r,e,o)=>e in r?__defProp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,__spreadValues=(r,e)=>{for(var o in e=e||{})__hasOwnProp.call(e,o)&&__defNormalProp(r,o,e[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))__propIsEnum.call(e,o)&&__defNormalProp(r,o,e[o]);return r},__spreadProps=(r,e)=>__defProps(r,__getOwnPropDescs(e)),__objRest=(r,e)=>{var o={};for(t in r)__hasOwnProp.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(null!=r&&__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))e.indexOf(t)<0&&__propIsEnum.call(r,t)&&(o[t]=r[t]);return o},__export=(r,e)=>{for(var o in e)__defProp(r,o,{get:e[o],enumerable:!0})},__copyProps=(e,o,t,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let r of __getOwnPropNames(o))__hasOwnProp.call(e,r)||r===t||__defProp(e,r,{get:()=>o[r],enumerable:!(a=__getOwnPropDesc(o,r))||a.enumerable});return e},__toESM=(r,e,o)=>(o=null!=r?__create(__getProtoOf(r)):{},__copyProps(!e&&r&&r.__esModule?o:__defProp(o,"default",{value:r,enumerable:!0}),r)),__toCommonJS=r=>__copyProps(__defProp({},"__esModule",{value:!0}),r),src_exports={},import_react16=(__export(src_exports,{Popover:()=>Popover,PopoverDropdown:()=>PopoverDropdown,PopoverTarget:()=>PopoverTarget}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_hooks8=require("@raikou/hooks"),import_core9=require("@raikou/core"),import_react=require("react"),import_react2=require("@floating-ui/react"),import_hooks=require("@raikou/hooks");function useFloatingAutoUpdate({opened:r,floating:e,position:o,positionDependencies:t}){const[a,i]=(0,import_react.useState)(0);(0,import_react.useEffect)(()=>{if(e.refs.reference.current&&e.refs.floating.current)return(0,import_react2.autoUpdate)(e.refs.reference.current,e.refs.floating.current,e.update)},[e.refs.reference.current,e.refs.floating.current,r,a,o]),(0,import_hooks.useDidUpdate)(()=>{e.update()},t),(0,import_hooks.useDidUpdate)(()=>{i(r=>r+1)},[r])}function getFloatingPosition(r,e){var o;return"rtl"===r&&(e.includes("right")||e.includes("left"))?([r,o]=e.split("-"),r="right"===r?"left":"right",void 0===o?r:r+"-"+o):e}var import_react3=__toESM(require("react")),import_core2=require("@raikou/core"),import_core=require("@raikou/core");function horizontalSide(r,e,o,t){return"center"===r||"center"===t?{top:e}:"end"===r?{bottom:o}:"start"===r?{top:o}:{}}function verticalSide(r,e,o,t,a){return"center"===r||"center"===t?{left:e}:"end"===r?{["ltr"===a?"right":"left"]:o}:"start"===r?{["ltr"===a?"left":"right"]:o}:{}}var radiusByFloatingSide={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function getArrowPositionStyles({position:r,arrowSize:e,arrowOffset:o,arrowRadius:t,arrowPosition:a,arrowX:i,arrowY:n,dir:s}){var[r,p="center"]=r.split("-"),t={width:(0,import_core.rem)(e),height:(0,import_core.rem)(e),transform:"rotate(45deg)",position:"absolute",[radiusByFloatingSide[r]]:(0,import_core.rem)(t)},e=(0,import_core.rem)(-e/2);return"left"===r?__spreadProps(__spreadValues(__spreadValues({},t),horizontalSide(p,n,o,a)),{right:e,borderLeftColor:"transparent",borderBottomColor:"transparent"}):"right"===r?__spreadProps(__spreadValues(__spreadValues({},t),horizontalSide(p,n,o,a)),{left:e,borderRightColor:"transparent",borderTopColor:"transparent"}):"top"===r?__spreadProps(__spreadValues(__spreadValues({},t),verticalSide(p,i,o,a,s)),{bottom:e,borderTopColor:"transparent",borderLeftColor:"transparent"}):"bottom"===r?__spreadProps(__spreadValues(__spreadValues({},t),verticalSide(p,i,o,a,s)),{top:e,borderBottomColor:"transparent",borderRightColor:"transparent"}):{}}var FloatingArrow=(0,import_react3.forwardRef)((r,e)=>{var{position:o,arrowSize:t,arrowOffset:a,arrowRadius:i,arrowPosition:n,visible:s,arrowX:p,arrowY:l,style:c}=r,r=__objRest(r,["position","arrowSize","arrowOffset","arrowRadius","arrowPosition","visible","arrowX","arrowY","style"]),u=(0,import_core2.useDirection)()["dir"];return s?import_react3.default.createElement("div",__spreadProps(__spreadValues({},r),{ref:e,style:__spreadValues(__spreadValues({},c),getArrowPositionStyles({position:o,arrowSize:t,arrowOffset:a,arrowRadius:i,arrowPosition:n,dir:u,arrowX:p,arrowY:l}))})):null}),import_hooks2=(FloatingArrow.displayName="@raikou/core/FloatingArrow",require("@raikou/hooks")),import_react4=require("@floating-ui/react");function getPopoverMiddlewares(i,n){var r,e=[(0,import_react4.offset)(i.offset)];return null!=(r=i.middlewares)&&r.shift&&e.push((0,import_react4.shift)({limiter:(0,import_react4.limitShift)()})),null!=(r=i.middlewares)&&r.flip&&e.push((0,import_react4.flip)()),null!=(r=i.middlewares)&&r.inline&&e.push((0,import_react4.inline)()),e.push((0,import_react4.arrow)({element:i.arrowRef,padding:i.arrowOffset})),(null!=(r=i.middlewares)&&r.size||"target"===i.width)&&e.push((0,import_react4.size)({apply({rects:r,availableWidth:e,availableHeight:o}){var t,a=null!=(a=null==(a=n().refs.floating.current)?void 0:a.style)?a:{};null!=(t=i.middlewares)&&t.size&&Object.assign(a,{maxWidth:e+"px",maxHeight:o+"px"}),"target"===i.width&&Object.assign(a,{width:r.reference.width+"px"})}})),e}function usePopover(e){const[o,t]=(0,import_hooks2.useUncontrolled)({value:e.opened,defaultValue:e.defaultOpened,finalValue:!1,onChange:e.onChange});const a=(0,import_react4.useFloating)({placement:e.position,middleware:getPopoverMiddlewares(e,()=>a)});return useFloatingAutoUpdate({opened:e.opened,position:e.position,positionDependencies:e.positionDependencies||[],floating:a}),(0,import_hooks2.useDidUpdate)(()=>{var r;null!=(r=e.onPositionChange)&&r.call(e,a.placement)},[a.placement]),(0,import_hooks2.useDidUpdate)(()=>{var r;e.opened?null!=(r=e.onOpen)&&r.call(e):null!=(r=e.onClose)&&r.call(e)},[e.opened]),{floating:a,controlled:"boolean"==typeof e.opened,opened:o,onClose:()=>{var r;o&&(null!=(r=e.onClose)&&r.call(e),t(!1))},onToggle:()=>{var r;o?(null!=(r=e.onClose)&&r.call(e),t(!1)):(null!=(r=e.onOpen)&&r.call(e),t(!0))}}}var import_react5=__toESM(require("react"));function createSafeContext(e){const o=(0,import_react5.createContext)(null);return[({children:r,value:e})=>import_react5.default.createElement(o.Provider,{value:e},r),()=>{var r=(0,import_react5.useContext)(o);if(null===r)throw new Error(e);return r}]}var import_react6=__toESM(require("react")),import_react7=require("react"),import_react8=require("react"),[PopoverContextProvider,usePopoverContext]=createSafeContext("Popover component was not found in the tree"),import_react9=require("react"),import_clsx=__toESM(require("clsx")),import_hooks3=require("@raikou/hooks"),import_core3=require("@raikou/core"),defaultProps={refProp:"ref",popupType:"dialog"},PopoverTarget=(0,import_core3.factory)((r,e)=>{var o,r=(0,import_core3.useProps)("PopoverTarget",defaultProps,r),{children:t,refProp:a,popupType:i}=r,r=__objRest(r,["children","refProp","popupType"]);if((0,import_core3.isElement)(t))return r=r,o=usePopoverContext(),e=(0,import_hooks3.useMergedRef)(o.reference,t.ref,e),i=o.withRoles?{"aria-haspopup":i,"aria-expanded":o.opened,"aria-controls":o.getDropdownId(),id:o.getTargetId()}:{},(0,import_react9.cloneElement)(t,__spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({},r),i),o.targetProps),{className:(0,import_clsx.default)(o.targetProps.className,r.className,t.props.className),[a]:e}),o.controlled?null:{onClick:o.onToggle}));throw new Error("Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported")}),import_react15=(PopoverTarget.displayName="@raikou/core/PopoverTarget",__toESM(require("react"))),import_hooks7=require("@raikou/hooks"),import_core8=require("@raikou/core"),import_react10=__toESM(require("react")),import_react_dom=require("react-dom"),import_hooks4=require("@raikou/hooks"),import_core4=require("@raikou/core");function createPortalNode(r){var e=document.createElement("div");return e.setAttribute("data-portal","true"),"string"==typeof r.className&&e.classList.add(...r.className.split(" ")),"object"==typeof r.style&&Object.assign(e.style,r.style),"string"==typeof r.id&&e.setAttribute("id",r.id),e}var defaultProps2={},Portal=(0,import_react10.forwardRef)((r,e)=>{const o=(0,import_core4.useProps)("Portal",defaultProps2,r),{children:t,target:a}=o,i=__objRest(o,["children","target"]),[n,s]=(0,import_react10.useState)(!1),p=(0,import_react10.useRef)(null);return(0,import_hooks4.useIsomorphicEffect)(()=>(s(!0),p.current=a?"string"==typeof a?document.querySelector(a):a:createPortalNode(i),(0,import_hooks4.assignRef)(e,p.current),!a&&p.current&&document.body.appendChild(p.current),()=>{!a&&p.current&&document.body.removeChild(p.current)}),[a]),n&&p.current?(0,import_react_dom.createPortal)(import_react10.default.createElement(import_react10.default.Fragment,null,t),p.current):null}),import_react11=(Portal.displayName="@raikou/core/Portal",__toESM(require("react")));function OptionalPortal(r){var{withinPortal:e=!0,children:o}=r,r=__objRest(r,["withinPortal","children"]);return e?import_react11.default.createElement(Portal,__spreadValues({},r),o):import_react11.default.createElement(import_react11.default.Fragment,null,o)}OptionalPortal.displayName="@raikou/core/OptionalPortal";var import_core5=require("@raikou/core"),popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${(0,import_core5.rem)(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${(0,import_core5.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core5.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core5.rem)(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core5.rem)(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})},import_react13=__toESM(require("react")),transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:r,state:e,duration:o,timingFunction:t}){o={transitionDuration:o+"ms",transitionTimingFunction:t};return"string"==typeof r?r in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[r].transitionProperty},o),transitions[r].common),transitions[r][transitionStatuses[e]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:r.transitionProperty},o),r.common),r[transitionStatuses[e]])}var import_react12=require("react"),import_hooks5=require("@raikou/hooks"),import_core6=require("@raikou/core");function useTransition({duration:i,exitDuration:n,timingFunction:r,mounted:s,onEnter:p,onExit:l,onEntered:c,onExited:u}){var e=(0,import_core6.useRaikouTheme)(),o=(0,import_hooks5.useReducedMotion)();const d=!!e.respectReducedMotion&&o,[t,m]=(0,import_react12.useState)(d?0:i),[a,_]=(0,import_react12.useState)(s?"entered":"exited"),f=(0,import_react12.useRef)(-1);return(0,import_hooks5.useDidUpdate)(()=>{{var r=s;const o=r?p:l,t=r?c:u;_(r?"pre-entering":"pre-exiting"),window.clearTimeout(f.current);var e=d?0:r?i:n;if(m(e),0===e)"function"==typeof o&&o(),"function"==typeof t&&t(),_(r?"entered":"exited");else{const a=window.setTimeout(()=>{"function"==typeof o&&o(),_(r?"entering":"exiting")},10);f.current=window.setTimeout(()=>{window.clearTimeout(a),"function"==typeof t&&t(),_(r?"entered":"exited")},e)}}},[s]),(0,import_react12.useEffect)(()=>()=>window.clearTimeout(f.current),[]),{transitionDuration:t,transitionStatus:a,transitionTimingFunction:r||"ease"}}function Transition({keepMounted:r,transition:e="fade",duration:o=250,exitDuration:t=o,mounted:a,children:i,timingFunction:n="ease",onExit:s,onEntered:p,onEnter:l,onExited:c}){var{transitionDuration:t,transitionStatus:n,transitionTimingFunction:s}=useTransition({mounted:a,exitDuration:t,duration:o,timingFunction:n,onExit:s,onEntered:p,onEnter:l,onExited:c});return 0===t?a?import_react13.default.createElement(import_react13.default.Fragment,null,i({})):r?i({display:"none"}):null:"exited"===n?r?i({display:"none"}):null:import_react13.default.createElement(import_react13.default.Fragment,null,i(getTransitionStyles({transition:e,duration:t,state:n,timingFunction:s})))}Transition.displayName="@raikou/core/Transition";var import_react14=require("react"),import_hooks6=require("@raikou/hooks"),import_core7=require("@raikou/core");function FocusTrap({children:r,active:e=!0,refProp:o="ref"}){e=(0,import_hooks6.useFocusTrap)(e),e=(0,import_hooks6.useMergedRef)(e,null==r?void 0:r.ref);return(0,import_core7.isElement)(r)?(0,import_react14.cloneElement)(r,{[o]:e}):r}FocusTrap.displayName="@raikou/core/FocusTrap";var defaultProps3={},PopoverDropdown=(0,import_core8.factory)((r,e)=>{const o=(0,import_core8.useProps)("PopoverDropdown",defaultProps3,r),t=o,{className:a,style:i,children:n,onKeyDownCapture:s,variant:p,classNames:l,styles:c}=t,u=__objRest(t,["className","style","vars","children","onKeyDownCapture","variant","classNames","styles"]),d=usePopoverContext(),m=(0,import_hooks7.useFocusReturn)({opened:d.opened,shouldReturnFocus:d.returnFocus}),_=d.withRoles?{"aria-labelledby":d.getTargetId(),id:d.getDropdownId(),role:"dialog",tabIndex:-1}:{},f=(0,import_hooks7.useMergedRef)(e,d.floating);return d.disabled?null:import_react15.default.createElement(OptionalPortal,__spreadProps(__spreadValues({},d.portalProps),{withinPortal:d.withinPortal}),import_react15.default.createElement(Transition,__spreadProps(__spreadValues({mounted:d.opened},d.transitionProps),{transition:(null==(r=d.transitionProps)?void 0:r.transition)||"fade",duration:null!=(r=null==(e=d.transitionProps)?void 0:e.duration)?r:150,keepMounted:d.keepMounted,exitDuration:"number"==typeof(null==(e=d.transitionProps)?void 0:e.exitDuration)?d.transitionProps.exitDuration:null==(r=d.transitionProps)?void 0:r.duration}),r=>{return import_react15.default.createElement(FocusTrap,{active:d.trapFocus},import_react15.default.createElement(import_core8.Box,__spreadValues(__spreadProps(__spreadValues(__spreadValues({},_),u),{variant:p,ref:f,onKeyDownCapture:(0,import_core8.closeOnEscape)(d.onClose,{active:d.closeOnEscape,onTrigger:m,onKeyDown:s}),"data-position":d.placement}),d.getStyles("dropdown",{className:a,props:o,classNames:l,styles:c,style:[__spreadProps(__spreadValues({},r),{zIndex:d.zIndex,top:null!=(r=d.y)?r:0,left:null!=(r=d.x)?r:0,width:"target"===d.width?void 0:(0,import_core8.rem)(d.width)}),i]})),n,import_react15.default.createElement(FloatingArrow,__spreadValues({ref:d.arrowRef,arrowX:d.arrowX,arrowY:d.arrowY,visible:d.withArrow,position:d.placement,arrowSize:d.arrowSize,arrowRadius:d.arrowRadius,arrowOffset:d.arrowOffset,arrowPosition:d.arrowPosition},d.getStyles("arrow",{props:o,classNames:l,styles:c})))))}))}),Popover_module_default=(PopoverDropdown.displayName="@raikou/core/PopoverDropdown",{dropdown:"m-38a85659",arrow:"m-a31dc6c1"}),defaultProps4={position:"bottom",offset:8,positionDependencies:[],transitionProps:{transition:"fade",duration:150},middlewares:{flip:!0,shift:!0,inline:!1},arrowSize:7,arrowOffset:5,arrowRadius:0,arrowPosition:"side",closeOnClickOutside:!0,withinPortal:!0,closeOnEscape:!0,trapFocus:!1,withRoles:!0,returnFocus:!1,clickOutsideEvents:["mousedown","touchstart"],zIndex:(0,import_core9.getDefaultZIndex)("popover"),__staticSelector:"Popover",width:"max-content"},varsResolver=(0,import_core9.createVarsResolver)((r,{radius:e,shadow:o})=>({dropdown:{"--popover-radius":void 0===e?void 0:(0,import_core9.getRadius)(e),"--popover-shadow":(0,import_core9.getShadow)(o)}}));function Popover(r){r=(0,import_core9.useProps)("Popover",defaultProps4,r);const e=r,{children:o,position:t,offset:a,onPositionChange:i,positionDependencies:n,opened:s,transitionProps:p,width:l,middlewares:c,withArrow:u,arrowSize:d,arrowOffset:m,arrowRadius:_,arrowPosition:f,unstyled:g,classNames:w,styles:P,closeOnClickOutside:y,withinPortal:h,portalProps:v,closeOnEscape:O,clickOutsideEvents:b,trapFocus:k,onClose:S,onOpen:x,onChange:E,zIndex:R,radius:C,shadow:I,id:M,defaultOpened:j,__staticSelector:D,withRoles:z,disabled:Y,returnFocus:A,variant:X,keepMounted:U,vars:B}=e,L=__objRest(e,["children","position","offset","onPositionChange","positionDependencies","opened","transitionProps","width","middlewares","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","unstyled","classNames","styles","closeOnClickOutside","withinPortal","portalProps","closeOnEscape","clickOutsideEvents","trapFocus","onClose","onOpen","onChange","zIndex","radius","shadow","id","defaultOpened","__staticSelector","withRoles","disabled","returnFocus","variant","keepMounted","vars"]);var r=(0,import_core9.useStyles)({name:D,props:r,classes:Popover_module_default,classNames:w,styles:P,unstyled:g,rootSelector:"dropdown",vars:B,varsResolver:varsResolver}),T=(0,import_react16.useRef)(null);const[$,K]=(0,import_react16.useState)(null),[H,J]=(0,import_react16.useState)(null);var F=(0,import_core9.useDirection)()["dir"];const V=(0,import_hooks8.useId)(M),q=usePopover({middlewares:c,width:l,position:getFloatingPosition(F,t),offset:"number"==typeof a?a+(u?d/2:0):a,arrowRef:T,arrowOffset:m,onPositionChange:i,positionDependencies:n,opened:s,defaultOpened:j,onChange:E,onOpen:x,onClose:S});(0,import_hooks8.useClickOutside)(()=>y&&q.onClose(),b,[$,H]);var F=(0,import_react16.useCallback)(r=>{K(r),q.floating.reference(r)},[q.floating.reference]),N=(0,import_react16.useCallback)(r=>{J(r),q.floating.floating(r)},[q.floating.floating]);return import_react16.default.createElement(PopoverContextProvider,{value:{returnFocus:A,disabled:Y,controlled:q.controlled,reference:F,floating:N,x:q.floating.x,y:q.floating.y,arrowX:null==(F=null==(N=null==(F=q.floating)?void 0:F.middlewareData)?void 0:N.arrow)?void 0:F.x,arrowY:null==(N=null==(F=null==(N=q.floating)?void 0:N.middlewareData)?void 0:F.arrow)?void 0:N.y,opened:q.opened,arrowRef:T,transitionProps:p,width:l,withArrow:u,arrowSize:d,arrowOffset:m,arrowRadius:_,arrowPosition:f,placement:q.floating.placement,trapFocus:k,withinPortal:h,portalProps:v,zIndex:R,radius:C,shadow:I,closeOnEscape:O,onClose:q.onClose,onToggle:q.onToggle,getTargetId:()=>V+"-target",getDropdownId:()=>V+"-dropdown",withRoles:z,targetProps:L,__staticSelector:D,classNames:w,styles:P,unstyled:g,variant:X,keepMounted:U,getStyles:r}},o)}Popover.Target=PopoverTarget,Popover.Dropdown=PopoverDropdown,Popover.displayName="@raikou/core/Popover",Popover.extend=r=>r;