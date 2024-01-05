var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React10,{useRef as useRef3,useState as useState5,useCallback}from"react";import{useId,useClickOutside}from"@raikou/hooks";import{getDefaultZIndex,useProps as useProps4,useDirection as useDirection2,useStyles,createVarsResolver,getRadius,getShadow}from"@raikou/core";import{useState,useEffect}from"react";import{autoUpdate}from"@floating-ui/react";import{useDidUpdate}from"@raikou/hooks";function useFloatingAutoUpdate({opened:opened,floating:floating,position:position,positionDependencies:positionDependencies}){const[delayedUpdate,setDelayedUpdate]=useState(0);useEffect((()=>{if(floating.refs.reference.current&&floating.refs.floating.current)return autoUpdate(floating.refs.reference.current,floating.refs.floating.current,floating.update)}),[floating.refs.reference.current,floating.refs.floating.current,opened,delayedUpdate,position]),useDidUpdate((()=>{floating.update()}),positionDependencies),useDidUpdate((()=>{setDelayedUpdate((c=>c+1))}),[opened])}function getFloatingPosition(dir,position){if("rtl"===dir&&(position.includes("right")||position.includes("left"))){const[side,placement]=position.split("-"),flippedPosition="right"===side?"left":"right";return void 0===placement?flippedPosition:`${flippedPosition}-${placement}`}return position}import React,{forwardRef}from"react";import{useDirection}from"@raikou/core";import{rem}from"@raikou/core";function horizontalSide(placement,arrowY,arrowOffset,arrowPosition){return"center"===placement||"center"===arrowPosition?{top:arrowY}:"end"===placement?{bottom:arrowOffset}:"start"===placement?{top:arrowOffset}:{}}function verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir){return"center"===placement||"center"===arrowPosition?{left:arrowX}:"end"===placement?{["ltr"===dir?"right":"left"]:arrowOffset}:"start"===placement?{["ltr"===dir?"left":"right"]:arrowOffset}:{}}var radiusByFloatingSide={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function getArrowPositionStyles({position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,arrowX:arrowX,arrowY:arrowY,dir:dir}){const[side,placement="center"]=position.split("-"),baseStyles={width:rem(arrowSize),height:rem(arrowSize),transform:"rotate(45deg)",position:"absolute",[radiusByFloatingSide[side]]:rem(arrowRadius)},arrowPlacement=rem(-arrowSize/2);return"left"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),horizontalSide(placement,arrowY,arrowOffset,arrowPosition)),{right:arrowPlacement,borderLeftColor:"transparent",borderBottomColor:"transparent"}):"right"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),horizontalSide(placement,arrowY,arrowOffset,arrowPosition)),{left:arrowPlacement,borderRightColor:"transparent",borderTopColor:"transparent"}):"top"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir)),{bottom:arrowPlacement,borderTopColor:"transparent",borderLeftColor:"transparent"}):"bottom"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir)),{top:arrowPlacement,borderBottomColor:"transparent",borderRightColor:"transparent"}):{}}var FloatingArrow=forwardRef(((_a,ref)=>{var _b=_a,{position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,visible:visible,arrowX:arrowX,arrowY:arrowY,style:style}=_b,others=__objRest(_b,["position","arrowSize","arrowOffset","arrowRadius","arrowPosition","visible","arrowX","arrowY","style"]);const{dir:dir}=useDirection();return visible?React.createElement("div",__spreadProps(__spreadValues({},others),{ref:ref,style:__spreadValues(__spreadValues({},style),getArrowPositionStyles({position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,dir:dir,arrowX:arrowX,arrowY:arrowY}))})):null}));FloatingArrow.displayName="@raikou/core/FloatingArrow";import{useDidUpdate as useDidUpdate2,useUncontrolled}from"@raikou/hooks";import{useFloating,shift,flip,arrow,offset,size,inline,limitShift}from"@floating-ui/react";function getPopoverMiddlewares(options,getFloating){var _a,_b,_c,_d;const middlewares=[offset(options.offset)];return(null==(_a=options.middlewares)?void 0:_a.shift)&&middlewares.push(shift({limiter:limitShift()})),(null==(_b=options.middlewares)?void 0:_b.flip)&&middlewares.push(flip()),(null==(_c=options.middlewares)?void 0:_c.inline)&&middlewares.push(inline()),middlewares.push(arrow({element:options.arrowRef,padding:options.arrowOffset})),((null==(_d=options.middlewares)?void 0:_d.size)||"target"===options.width)&&middlewares.push(size({apply({rects:rects,availableWidth:availableWidth,availableHeight:availableHeight}){var _a2,_b2,_c2;const styles=null!=(_b2=null==(_a2=getFloating().refs.floating.current)?void 0:_a2.style)?_b2:{};(null==(_c2=options.middlewares)?void 0:_c2.size)&&Object.assign(styles,{maxWidth:`${availableWidth}px`,maxHeight:`${availableHeight}px`}),"target"===options.width&&Object.assign(styles,{width:`${rects.reference.width}px`})}})),middlewares}function usePopover(options){const[_opened,setOpened]=useUncontrolled({value:options.opened,defaultValue:options.defaultOpened,finalValue:!1,onChange:options.onChange}),floating=useFloating({placement:options.position,middleware:getPopoverMiddlewares(options,(()=>floating))});return useFloatingAutoUpdate({opened:options.opened,position:options.position,positionDependencies:options.positionDependencies||[],floating:floating}),useDidUpdate2((()=>{var _a;null==(_a=options.onPositionChange)||_a.call(options,floating.placement)}),[floating.placement]),useDidUpdate2((()=>{var _a,_b;options.opened?null==(_b=options.onOpen)||_b.call(options):null==(_a=options.onClose)||_a.call(options)}),[options.opened]),{floating:floating,controlled:"boolean"==typeof options.opened,opened:_opened,onClose:()=>{var _a;_opened&&(null==(_a=options.onClose)||_a.call(options),setOpened(!1))},onToggle:()=>{var _a,_b;_opened?(null==(_a=options.onClose)||_a.call(options),setOpened(!1)):(null==(_b=options.onOpen)||_b.call(options),setOpened(!0))}}}import React2,{createContext,useContext}from"react";function createSafeContext(errorMessage){const Context=createContext(null);return[({children:children,value:value})=>React2.createElement(Context.Provider,{value:value},children),()=>{const ctx=useContext(Context);if(null===ctx)throw new Error(errorMessage);return ctx}]}import React3,{createContext as createContext2,useContext as useContext2}from"react";import{useState as useState2}from"react";import{useEffect as useEffect2,useLayoutEffect}from"react";var[PopoverContextProvider,usePopoverContext]=createSafeContext("Popover component was not found in the tree");import{cloneElement}from"react";import cx from"clsx";import{useMergedRef}from"@raikou/hooks";import{isElement,useProps,factory}from"@raikou/core";var defaultProps={refProp:"ref",popupType:"dialog"},PopoverTarget=factory(((props,ref)=>{const _a=useProps("PopoverTarget",defaultProps,props),{children:children,refProp:refProp,popupType:popupType}=_a,others=__objRest(_a,["children","refProp","popupType"]);if(!isElement(children))throw new Error("Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const forwardedProps=others,ctx=usePopoverContext(),targetRef=useMergedRef(ctx.reference,children.ref,ref),accessibleProps=ctx.withRoles?{"aria-haspopup":popupType,"aria-expanded":ctx.opened,"aria-controls":ctx.getDropdownId(),id:ctx.getTargetId()}:{};return cloneElement(children,__spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({},forwardedProps),accessibleProps),ctx.targetProps),{className:cx(ctx.targetProps.className,forwardedProps.className,children.props.className),[refProp]:targetRef}),ctx.controlled?null:{onClick:ctx.onToggle}))}));PopoverTarget.displayName="@raikou/core/PopoverTarget";import React9 from"react";import{useFocusReturn,useMergedRef as useMergedRef3}from"@raikou/hooks";import{Box,factory as factory2,useProps as useProps3,rem as rem3,closeOnEscape}from"@raikou/core";import React5,{useRef,useState as useState3,forwardRef as forwardRef2}from"react";import{createPortal}from"react-dom";import{useIsomorphicEffect,assignRef}from"@raikou/hooks";import{useProps as useProps2}from"@raikou/core";function createPortalNode(props){const node=document.createElement("div");return node.setAttribute("data-portal","true"),"string"==typeof props.className&&node.classList.add(...props.className.split(" ").filter(Boolean)),"object"==typeof props.style&&Object.assign(node.style,props.style),"string"==typeof props.id&&node.setAttribute("id",props.id),node}var defaultProps2={},Portal=forwardRef2(((props,ref)=>{const _a=useProps2("Portal",defaultProps2,props),{children:children,target:target}=_a,others=__objRest(_a,["children","target"]),[mounted,setMounted]=useState3(!1),nodeRef=useRef(null);return useIsomorphicEffect((()=>(setMounted(!0),nodeRef.current=target?"string"==typeof target?document.querySelector(target):target:createPortalNode(others),assignRef(ref,nodeRef.current),!target&&nodeRef.current&&document.body.appendChild(nodeRef.current),()=>{!target&&nodeRef.current&&document.body.removeChild(nodeRef.current)})),[target]),mounted&&nodeRef.current?createPortal(React5.createElement(React5.Fragment,null,children),nodeRef.current):null}));Portal.displayName="@raikou/core/Portal";import React6 from"react";function OptionalPortal(_a){var _b=_a,{withinPortal:withinPortal=!0,children:children}=_b,others=__objRest(_b,["withinPortal","children"]);return withinPortal?React6.createElement(Portal,__spreadValues({},others),children):React6.createElement(React6.Fragment,null,children)}OptionalPortal.displayName="@raikou/core/OptionalPortal";import{rem as rem2}from"@raikou/core";var popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${rem2(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${rem2(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${rem2(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem2(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem2(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})};import React7 from"react";var transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:transition,state:state,duration:duration,timingFunction:timingFunction}){const shared={transitionDuration:`${duration}ms`,transitionTimingFunction:timingFunction};return"string"==typeof transition?transition in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[transition].transitionProperty},shared),transitions[transition].common),transitions[transition][transitionStatuses[state]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:transition.transitionProperty},shared),transition.common),transition[transitionStatuses[state]])}import{useState as useState4,useEffect as useEffect3,useRef as useRef2}from"react";import{useReducedMotion,useDidUpdate as useDidUpdate3}from"@raikou/hooks";import{useRaikouTheme}from"@raikou/core";function useTransition({duration:duration,exitDuration:exitDuration,timingFunction:timingFunction,mounted:mounted,onEnter:onEnter,onExit:onExit,onEntered:onEntered,onExited:onExited}){const theme=useRaikouTheme(),shouldReduceMotion=useReducedMotion(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,[transitionDuration,setTransitionDuration]=useState4(reduceMotion?0:duration),[transitionStatus,setStatus]=useState4(mounted?"entered":"exited"),timeoutRef=useRef2(-1);return useDidUpdate3((()=>{(shouldMount=>{const preHandler=shouldMount?onEnter:onExit,handler=shouldMount?onEntered:onExited;setStatus(shouldMount?"pre-entering":"pre-exiting"),window.clearTimeout(timeoutRef.current);const newTransitionDuration=reduceMotion?0:shouldMount?duration:exitDuration;if(setTransitionDuration(newTransitionDuration),0===newTransitionDuration)"function"==typeof preHandler&&preHandler(),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited");else{const preStateTimeout=window.setTimeout((()=>{"function"==typeof preHandler&&preHandler(),setStatus(shouldMount?"entering":"exiting")}),10);timeoutRef.current=window.setTimeout((()=>{window.clearTimeout(preStateTimeout),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")}),newTransitionDuration)}})(mounted)}),[mounted]),useEffect3((()=>()=>window.clearTimeout(timeoutRef.current)),[]),{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:timingFunction||"ease"}}function Transition({keepMounted:keepMounted,transition:transition="fade",duration:duration=250,exitDuration:exitDuration=duration,mounted:mounted,children:children,timingFunction:timingFunction="ease",onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited}){const{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:transitionTimingFunction}=useTransition({mounted:mounted,exitDuration:exitDuration,duration:duration,timingFunction:timingFunction,onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited});return 0===transitionDuration?mounted?React7.createElement(React7.Fragment,null,children({})):keepMounted?children({display:"none"}):null:"exited"===transitionStatus?keepMounted?children({display:"none"}):null:React7.createElement(React7.Fragment,null,children(getTransitionStyles({transition:transition,duration:transitionDuration,state:transitionStatus,timingFunction:transitionTimingFunction})))}Transition.displayName="@raikou/core/Transition";import{cloneElement as cloneElement2}from"react";import{useFocusTrap,useMergedRef as useMergedRef2}from"@raikou/hooks";import{isElement as isElement2}from"@raikou/core";function FocusTrap({children:children,active:active=!0,refProp:refProp="ref"}){const focusTrapRef=useFocusTrap(active),ref=useMergedRef2(focusTrapRef,null==children?void 0:children.ref);return isElement2(children)?cloneElement2(children,{[refProp]:ref}):children}FocusTrap.displayName="@raikou/core/FocusTrap";var defaultProps3={},PopoverDropdown=factory2(((_props,ref)=>{var _b,_c,_d,_e,_f;const props=useProps3("PopoverDropdown",defaultProps3,_props),_a=props,{className:className,style:style,vars:vars,children:children,onKeyDownCapture:onKeyDownCapture,variant:variant,classNames:classNames,styles:styles}=_a,others=__objRest(_a,["className","style","vars","children","onKeyDownCapture","variant","classNames","styles"]),ctx=usePopoverContext(),returnFocus=useFocusReturn({opened:ctx.opened,shouldReturnFocus:ctx.returnFocus}),accessibleProps=ctx.withRoles?{"aria-labelledby":ctx.getTargetId(),id:ctx.getDropdownId(),role:"dialog",tabIndex:-1}:{},mergedRef=useMergedRef3(ref,ctx.floating);return ctx.disabled?null:React9.createElement(OptionalPortal,__spreadProps(__spreadValues({},ctx.portalProps),{withinPortal:ctx.withinPortal}),React9.createElement(Transition,__spreadProps(__spreadValues({mounted:ctx.opened},ctx.transitionProps),{transition:(null==(_b=ctx.transitionProps)?void 0:_b.transition)||"fade",duration:null!=(_d=null==(_c=ctx.transitionProps)?void 0:_c.duration)?_d:150,keepMounted:ctx.keepMounted,exitDuration:"number"==typeof(null==(_e=ctx.transitionProps)?void 0:_e.exitDuration)?ctx.transitionProps.exitDuration:null==(_f=ctx.transitionProps)?void 0:_f.duration}),(transitionStyles=>{var _a2,_b2;return React9.createElement(FocusTrap,{active:ctx.trapFocus},React9.createElement(Box,__spreadValues(__spreadProps(__spreadValues(__spreadValues({},accessibleProps),others),{variant:variant,ref:mergedRef,onKeyDownCapture:closeOnEscape(ctx.onClose,{active:ctx.closeOnEscape,onTrigger:returnFocus,onKeyDown:onKeyDownCapture}),"data-position":ctx.placement}),ctx.getStyles("dropdown",{className:className,props:props,classNames:classNames,styles:styles,style:[__spreadProps(__spreadValues({},transitionStyles),{zIndex:ctx.zIndex,top:null!=(_a2=ctx.y)?_a2:0,left:null!=(_b2=ctx.x)?_b2:0,width:"target"===ctx.width?void 0:rem3(ctx.width)}),style]})),children,React9.createElement(FloatingArrow,__spreadValues({ref:ctx.arrowRef,arrowX:ctx.arrowX,arrowY:ctx.arrowY,visible:ctx.withArrow,position:ctx.placement,arrowSize:ctx.arrowSize,arrowRadius:ctx.arrowRadius,arrowOffset:ctx.arrowOffset,arrowPosition:ctx.arrowPosition},ctx.getStyles("arrow",{props:props,classNames:classNames,styles:styles})))))})))}));PopoverDropdown.displayName="@raikou/core/PopoverDropdown";var Popover_module_default={dropdown:"m-38a85659",arrow:"m-a31dc6c1"},defaultProps4={position:"bottom",offset:8,positionDependencies:[],transitionProps:{transition:"fade",duration:150},middlewares:{flip:!0,shift:!0,inline:!1},arrowSize:7,arrowOffset:5,arrowRadius:0,arrowPosition:"side",closeOnClickOutside:!0,withinPortal:!0,closeOnEscape:!0,trapFocus:!1,withRoles:!0,returnFocus:!1,clickOutsideEvents:["mousedown","touchstart"],zIndex:getDefaultZIndex("popover"),__staticSelector:"Popover",width:"max-content"},varsResolver=createVarsResolver(((_,{radius:radius,shadow:shadow})=>({dropdown:{"--popover-radius":void 0===radius?void 0:getRadius(radius),"--popover-shadow":getShadow(shadow)}})));function Popover(_props){var _b,_c,_d,_e,_f,_g;const props=useProps4("Popover",defaultProps4,_props),_a=props,{children:children,position:position,offset:offset2,onPositionChange:onPositionChange,positionDependencies:positionDependencies,opened:opened,transitionProps:transitionProps,width:width,middlewares:middlewares,withArrow:withArrow,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,unstyled:unstyled,classNames:classNames,styles:styles,closeOnClickOutside:closeOnClickOutside,withinPortal:withinPortal,portalProps:portalProps,closeOnEscape:closeOnEscape2,clickOutsideEvents:clickOutsideEvents,trapFocus:trapFocus,onClose:onClose,onOpen:onOpen,onChange:onChange,zIndex:zIndex,radius:radius,shadow:shadow,id:id,defaultOpened:defaultOpened,__staticSelector:__staticSelector,withRoles:withRoles,disabled:disabled,returnFocus:returnFocus,variant:variant,keepMounted:keepMounted,vars:vars}=_a,others=__objRest(_a,["children","position","offset","onPositionChange","positionDependencies","opened","transitionProps","width","middlewares","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","unstyled","classNames","styles","closeOnClickOutside","withinPortal","portalProps","closeOnEscape","clickOutsideEvents","trapFocus","onClose","onOpen","onChange","zIndex","radius","shadow","id","defaultOpened","__staticSelector","withRoles","disabled","returnFocus","variant","keepMounted","vars"]),getStyles=useStyles({name:__staticSelector,props:props,classes:Popover_module_default,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"dropdown",vars:vars,varsResolver:varsResolver}),arrowRef=useRef3(null),[targetNode,setTargetNode]=useState5(null),[dropdownNode,setDropdownNode]=useState5(null),{dir:dir}=useDirection2(),uid=useId(id),popover=usePopover({middlewares:middlewares,width:width,position:getFloatingPosition(dir,position),offset:"number"==typeof offset2?offset2+(withArrow?arrowSize/2:0):offset2,arrowRef:arrowRef,arrowOffset:arrowOffset,onPositionChange:onPositionChange,positionDependencies:positionDependencies,opened:opened,defaultOpened:defaultOpened,onChange:onChange,onOpen:onOpen,onClose:onClose});useClickOutside((()=>closeOnClickOutside&&popover.onClose()),clickOutsideEvents,[targetNode,dropdownNode]);const reference=useCallback((node=>{setTargetNode(node),popover.floating.reference(node)}),[popover.floating.reference]),floating=useCallback((node=>{setDropdownNode(node),popover.floating.floating(node)}),[popover.floating.floating]);return React10.createElement(PopoverContextProvider,{value:{returnFocus:returnFocus,disabled:disabled,controlled:popover.controlled,reference:reference,floating:floating,x:popover.floating.x,y:popover.floating.y,arrowX:null==(_d=null==(_c=null==(_b=popover.floating)?void 0:_b.middlewareData)?void 0:_c.arrow)?void 0:_d.x,arrowY:null==(_g=null==(_f=null==(_e=popover.floating)?void 0:_e.middlewareData)?void 0:_f.arrow)?void 0:_g.y,opened:popover.opened,arrowRef:arrowRef,transitionProps:transitionProps,width:width,withArrow:withArrow,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,placement:popover.floating.placement,trapFocus:trapFocus,withinPortal:withinPortal,portalProps:portalProps,zIndex:zIndex,radius:radius,shadow:shadow,closeOnEscape:closeOnEscape2,onClose:popover.onClose,onToggle:popover.onToggle,getTargetId:()=>`${uid}-target`,getDropdownId:()=>`${uid}-dropdown`,withRoles:withRoles,targetProps:others,__staticSelector:__staticSelector,classNames:classNames,styles:styles,unstyled:unstyled,variant:variant,keepMounted:keepMounted,getStyles:getStyles}},children)}Popover.Target=PopoverTarget,Popover.Dropdown=PopoverDropdown,Popover.displayName="@raikou/core/Popover",Popover.extend=input=>input;export{Popover,PopoverDropdown,PopoverTarget};