"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{Tooltip:()=>Tooltip,TooltipFloating:()=>TooltipFloating,TooltipGroup:()=>TooltipGroup}),module.exports=__toCommonJS(src_exports);var import_react16=__toESM(require("react")),import_hooks6=require("@raikou/hooks"),import_clsx=__toESM(require("clsx")),import_core8=require("@raikou/core"),import_react=require("react"),import_react2=require("@floating-ui/react"),import_hooks=require("@raikou/hooks");function useFloatingAutoUpdate({opened:opened,floating:floating,position:position,positionDependencies:positionDependencies}){const[delayedUpdate,setDelayedUpdate]=(0,import_react.useState)(0);(0,import_react.useEffect)((()=>{if(floating.refs.reference.current&&floating.refs.floating.current)return(0,import_react2.autoUpdate)(floating.refs.reference.current,floating.refs.floating.current,floating.update)}),[floating.refs.reference.current,floating.refs.floating.current,opened,delayedUpdate,position]),(0,import_hooks.useDidUpdate)((()=>{floating.update()}),positionDependencies),(0,import_hooks.useDidUpdate)((()=>{setDelayedUpdate((c=>c+1))}),[opened])}function getFloatingPosition(dir,position){if("rtl"===dir&&(position.includes("right")||position.includes("left"))){const[side,placement]=position.split("-"),flippedPosition="right"===side?"left":"right";return void 0===placement?flippedPosition:`${flippedPosition}-${placement}`}return position}var import_react3=__toESM(require("react")),import_core2=require("@raikou/core"),import_core=require("@raikou/core");function horizontalSide(placement,arrowY,arrowOffset,arrowPosition){return"center"===placement||"center"===arrowPosition?{top:arrowY}:"end"===placement?{bottom:arrowOffset}:"start"===placement?{top:arrowOffset}:{}}function verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir){return"center"===placement||"center"===arrowPosition?{left:arrowX}:"end"===placement?{["ltr"===dir?"right":"left"]:arrowOffset}:"start"===placement?{["ltr"===dir?"left":"right"]:arrowOffset}:{}}var radiusByFloatingSide={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function getArrowPositionStyles({position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,arrowX:arrowX,arrowY:arrowY,dir:dir}){const[side,placement="center"]=position.split("-"),baseStyles={width:(0,import_core.rem)(arrowSize),height:(0,import_core.rem)(arrowSize),transform:"rotate(45deg)",position:"absolute",[radiusByFloatingSide[side]]:(0,import_core.rem)(arrowRadius)},arrowPlacement=(0,import_core.rem)(-arrowSize/2);return"left"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),horizontalSide(placement,arrowY,arrowOffset,arrowPosition)),{right:arrowPlacement,borderLeftColor:"transparent",borderBottomColor:"transparent"}):"right"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),horizontalSide(placement,arrowY,arrowOffset,arrowPosition)),{left:arrowPlacement,borderRightColor:"transparent",borderTopColor:"transparent"}):"top"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir)),{bottom:arrowPlacement,borderTopColor:"transparent",borderLeftColor:"transparent"}):"bottom"===side?__spreadProps(__spreadValues(__spreadValues({},baseStyles),verticalSide(placement,arrowX,arrowOffset,arrowPosition,dir)),{top:arrowPlacement,borderBottomColor:"transparent",borderRightColor:"transparent"}):{}}var FloatingArrow=(0,import_react3.forwardRef)(((_a,ref)=>{var _b=_a,{position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,visible:visible,arrowX:arrowX,arrowY:arrowY,style:style}=_b,others=__objRest(_b,["position","arrowSize","arrowOffset","arrowRadius","arrowPosition","visible","arrowX","arrowY","style"]);const{dir:dir}=(0,import_core2.useDirection)();return visible?import_react3.default.createElement("div",__spreadProps(__spreadValues({},others),{ref:ref,style:__spreadValues(__spreadValues({},style),getArrowPositionStyles({position:position,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,dir:dir,arrowX:arrowX,arrowY:arrowY}))})):null}));FloatingArrow.displayName="@raikou/core/FloatingArrow";var import_core3=require("@raikou/core"),popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${(0,import_core3.rem)(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${(0,import_core3.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core3.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core3.rem)(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core3.rem)(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})},import_react5=__toESM(require("react")),transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:transition,state:state,duration:duration,timingFunction:timingFunction}){const shared={transitionDuration:`${duration}ms`,transitionTimingFunction:timingFunction};return"string"==typeof transition?transition in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[transition].transitionProperty},shared),transitions[transition].common),transitions[transition][transitionStatuses[state]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:transition.transitionProperty},shared),transition.common),transition[transitionStatuses[state]])}var import_react4=require("react"),import_react_dom=__toESM(require("react-dom")),import_hooks2=require("@raikou/hooks"),import_core4=require("@raikou/core");function useTransition({duration:duration,exitDuration:exitDuration,timingFunction:timingFunction,mounted:mounted,onEnter:onEnter,onExit:onExit,onEntered:onEntered,onExited:onExited}){const theme=(0,import_core4.useRaikouTheme)(),shouldReduceMotion=(0,import_hooks2.useReducedMotion)(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,[transitionDuration,setTransitionDuration]=(0,import_react4.useState)(reduceMotion?0:duration),[transitionStatus,setStatus]=(0,import_react4.useState)(mounted?"entered":"exited"),timeoutRef=(0,import_react4.useRef)(-1),rafRef=(0,import_react4.useRef)(-1);return(0,import_hooks2.useDidUpdate)((()=>{(shouldMount=>{const preHandler=shouldMount?onEnter:onExit,handler=shouldMount?onEntered:onExited;window.clearTimeout(timeoutRef.current);const newTransitionDuration=reduceMotion?0:shouldMount?duration:exitDuration;setTransitionDuration(newTransitionDuration),0===newTransitionDuration?("function"==typeof preHandler&&preHandler(),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")):rafRef.current=requestAnimationFrame((()=>{import_react_dom.default.flushSync((()=>{setStatus(shouldMount?"pre-entering":"pre-exiting")})),rafRef.current=requestAnimationFrame((()=>{"function"==typeof preHandler&&preHandler(),setStatus(shouldMount?"entering":"exiting"),timeoutRef.current=window.setTimeout((()=>{"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")}),newTransitionDuration)}))}))})(mounted)}),[mounted]),(0,import_react4.useEffect)((()=>()=>{window.clearTimeout(timeoutRef.current),cancelAnimationFrame(rafRef.current)}),[]),{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:timingFunction||"ease"}}function Transition({keepMounted:keepMounted,transition:transition="fade",duration:duration=250,exitDuration:exitDuration=duration,mounted:mounted,children:children,timingFunction:timingFunction="ease",onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited}){const{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:transitionTimingFunction}=useTransition({mounted:mounted,exitDuration:exitDuration,duration:duration,timingFunction:timingFunction,onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited});return 0===transitionDuration?mounted?import_react5.default.createElement(import_react5.default.Fragment,null,children({})):keepMounted?children({display:"none"}):null:"exited"===transitionStatus?keepMounted?children({display:"none"}):null:import_react5.default.createElement(import_react5.default.Fragment,null,children(getTransitionStyles({transition:transition,duration:transitionDuration,state:transitionStatus,timingFunction:transitionTimingFunction})))}Transition.displayName="@raikou/core/Transition";var defaultTransition={duration:100,transition:"fade"};function getTransitionProps(transitionProps,componentTransition){return __spreadValues(__spreadValues(__spreadValues({},defaultTransition),componentTransition),transitionProps)}var import_react6=__toESM(require("react")),import_react_dom2=require("react-dom"),import_hooks3=require("@raikou/hooks"),import_core5=require("@raikou/core");function createPortalNode(props){const node=document.createElement("div");return node.setAttribute("data-portal","true"),"string"==typeof props.className&&node.classList.add(...props.className.split(" ").filter(Boolean)),"object"==typeof props.style&&Object.assign(node.style,props.style),"string"==typeof props.id&&node.setAttribute("id",props.id),node}var defaultProps={},Portal=(0,import_react6.forwardRef)(((props,ref)=>{const _a=(0,import_core5.useProps)("Portal",defaultProps,props),{children:children,target:target}=_a,others=__objRest(_a,["children","target"]),[mounted,setMounted]=(0,import_react6.useState)(!1),nodeRef=(0,import_react6.useRef)(null);return(0,import_hooks3.useIsomorphicEffect)((()=>(setMounted(!0),nodeRef.current=target?"string"==typeof target?document.querySelector(target):target:createPortalNode(others),(0,import_hooks3.assignRef)(ref,nodeRef.current),!target&&nodeRef.current&&document.body.appendChild(nodeRef.current),()=>{!target&&nodeRef.current&&document.body.removeChild(nodeRef.current)})),[target]),mounted&&nodeRef.current?(0,import_react_dom2.createPortal)(import_react6.default.createElement(import_react6.default.Fragment,null,children),nodeRef.current):null}));Portal.displayName="@raikou/core/Portal";var import_react7=__toESM(require("react"));function OptionalPortal(_a){var _b=_a,{withinPortal:withinPortal=!0,children:children}=_b,others=__objRest(_b,["withinPortal","children"]);return withinPortal?import_react7.default.createElement(Portal,__spreadValues({},others),children):import_react7.default.createElement(import_react7.default.Fragment,null,children)}OptionalPortal.displayName="@raikou/core/OptionalPortal";var import_react10=__toESM(require("react")),import_hooks4=require("@raikou/hooks"),import_core6=require("@raikou/core"),import_react8=require("react"),import_react9=require("@floating-ui/react");function useFloatingTooltip({offset:offset2,position:position}){const[opened,setOpened]=(0,import_react8.useState)(!1),boundaryRef=(0,import_react8.useRef)(),{x:x,y:y,reference:reference,floating:floating,refs:refs,update:update,placement:placement}=(0,import_react9.useFloating)({placement:position,middleware:[(0,import_react9.shift)({crossAxis:!0,padding:5,rootBoundary:"document"})]}),horizontalOffset=placement.includes("right")?offset2:position.includes("left")?-1*offset2:0,verticalOffset=placement.includes("bottom")?offset2:position.includes("top")?-1*offset2:0,handleMouseMove=(0,import_react8.useCallback)((({clientX:clientX,clientY:clientY})=>{reference({getBoundingClientRect:()=>({width:0,height:0,x:clientX,y:clientY,left:clientX+horizontalOffset,top:clientY+verticalOffset,right:clientX,bottom:clientY})})}),[reference]);return(0,import_react8.useEffect)((()=>{if(refs.floating.current){const boundary=boundaryRef.current;boundary.addEventListener("mousemove",handleMouseMove);const parents=(0,import_react9.getOverflowAncestors)(refs.floating.current);return parents.forEach((parent=>{parent.addEventListener("scroll",update)})),()=>{boundary.removeEventListener("mousemove",handleMouseMove),parents.forEach((parent=>{parent.removeEventListener("scroll",update)}))}}}),[reference,refs.floating.current,update,handleMouseMove,opened]),{handleMouseMove:handleMouseMove,x:x,y:y,opened:opened,setOpened:setOpened,boundaryRef:boundaryRef,floating:floating}}var Tooltip_module_default={tooltip:"m-1b3c8819",arrow:"m-f898399f"},defaultProps2={refProp:"ref",withinPortal:!0,offset:10,position:"right",zIndex:(0,import_core6.getDefaultZIndex)("popover")},varsResolver=(0,import_core6.createVarsResolver)(((theme,{radius:radius,color:color})=>({tooltip:{"--tooltip-radius":void 0===radius?void 0:(0,import_core6.getRadius)(radius),"--tooltip-bg":color?(0,import_core6.getThemeColor)(color,theme):void 0,"--tooltip-color":color?"var(--raikou-color-white)":void 0}}))),TooltipFloating=(0,import_core6.factory)(((_props,ref)=>{var _b,_c;const props=(0,import_core6.useProps)("TooltipFloating",defaultProps2,_props),_a=props,{children:children,refProp:refProp,withinPortal:withinPortal,style:style,className:className,classNames:classNames,styles:styles,unstyled:unstyled,radius:radius,color:color,label:label,offset:offset2,position:position,multiline:multiline,zIndex:zIndex,disabled:disabled,variant:variant,vars:vars,portalProps:portalProps}=_a,others=__objRest(_a,["children","refProp","withinPortal","style","className","classNames","styles","unstyled","radius","color","label","offset","position","multiline","zIndex","disabled","variant","vars","portalProps"]),theme=(0,import_core6.useRaikouTheme)(),getStyles=(0,import_core6.useStyles)({name:"TooltipFloating",props:props,classes:Tooltip_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"tooltip",vars:vars,varsResolver:varsResolver}),{handleMouseMove:handleMouseMove,x:x,y:y,opened:opened,boundaryRef:boundaryRef,floating:floating,setOpened:setOpened}=useFloatingTooltip({offset:offset2,position:position});if(!(0,import_core6.isElement)(children))throw new Error("[@raikou/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const targetRef=(0,import_hooks4.useMergedRef)(boundaryRef,children.ref,ref);return import_react10.default.createElement(import_react10.default.Fragment,null,import_react10.default.createElement(OptionalPortal,__spreadProps(__spreadValues({},portalProps),{withinPortal:withinPortal}),import_react10.default.createElement(import_core6.Box,__spreadProps(__spreadValues(__spreadValues({},others),getStyles("tooltip",{style:__spreadProps(__spreadValues({},(0,import_core6.getStyleObject)(style,theme)),{zIndex:zIndex,display:!disabled&&opened?"block":"none",top:null!=(_b=y&&Math.round(y))?_b:"",left:null!=(_c=x&&Math.round(x))?_c:""})})),{variant:variant,ref:floating,mod:{multiline:multiline}}),label)),(0,import_react10.cloneElement)(children,__spreadProps(__spreadValues({},children.props),{[refProp]:targetRef,onMouseEnter:event=>{var _a2,_b2;null==(_b2=(_a2=children.props).onMouseEnter)||_b2.call(_a2,event),handleMouseMove(event),setOpened(!0)},onMouseLeave:event=>{var _a2,_b2;null==(_b2=(_a2=children.props).onMouseLeave)||_b2.call(_a2,event),setOpened(!1)}})))}));TooltipFloating.displayName="@raikou/core/TooltipFloating";var import_react12=__toESM(require("react")),import_react13=require("@floating-ui/react"),import_core7=require("@raikou/core"),import_react11=require("react"),TooltipGroupContext=(0,import_react11.createContext)(!1),TooltipGroupProvider=TooltipGroupContext.Provider,useTooltipGroupContext=()=>(0,import_react11.useContext)(TooltipGroupContext),defaultProps3={openDelay:0,closeDelay:0};function TooltipGroup(props){const{openDelay:openDelay,closeDelay:closeDelay,children:children}=(0,import_core7.useProps)("TooltipGroup",defaultProps3,props);return import_react12.default.createElement(TooltipGroupProvider,{value:!0},import_react12.default.createElement(import_react13.FloatingDelayGroup,{delay:{open:openDelay,close:closeDelay}},children))}TooltipGroup.displayName="@raikou/core/TooltipGroup";var import_react14=require("react"),import_react15=require("@floating-ui/react"),import_hooks5=require("@raikou/hooks");function useTooltip(settings){var _a,_b,_c;const[uncontrolledOpened,setUncontrolledOpened]=(0,import_react14.useState)(!1),opened="boolean"==typeof settings.opened?settings.opened:uncontrolledOpened,withinGroup=useTooltipGroupContext(),uid=(0,import_hooks5.useId)(),{delay:groupDelay,currentId:currentId,setCurrentId:setCurrentId}=(0,import_react15.useDelayGroupContext)(),onChange=(0,import_react14.useCallback)((_opened=>{setUncontrolledOpened(_opened),_opened&&setCurrentId(uid)}),[setCurrentId,uid]),{x:x,y:y,context:context,refs:refs,update:update,placement:placement,middlewareData:{arrow:{x:arrowX,y:arrowY}={}}}=(0,import_react15.useFloating)({strategy:settings.strategy,placement:settings.position,open:opened,onOpenChange:onChange,middleware:[(0,import_react15.offset)(settings.offset),(0,import_react15.shift)({padding:8}),(0,import_react15.flip)(),(0,import_react15.arrow)({element:settings.arrowRef,padding:settings.arrowOffset}),...settings.inline?[(0,import_react15.inline)()]:[]]}),{getReferenceProps:getReferenceProps,getFloatingProps:getFloatingProps}=(0,import_react15.useInteractions)([(0,import_react15.useHover)(context,{enabled:null==(_a=settings.events)?void 0:_a.hover,delay:withinGroup?groupDelay:{open:settings.openDelay,close:settings.closeDelay},mouseOnly:!(null==(_b=settings.events)?void 0:_b.touch)}),(0,import_react15.useFocus)(context,{enabled:null==(_c=settings.events)?void 0:_c.focus,visibleOnly:!0}),(0,import_react15.useRole)(context,{role:"tooltip"}),(0,import_react15.useDismiss)(context,{enabled:void 0===settings.opened}),(0,import_react15.useDelayGroup)(context,{id:uid})]);useFloatingAutoUpdate({opened:opened,position:settings.position,positionDependencies:settings.positionDependencies,floating:{refs:refs,update:update}}),(0,import_hooks5.useDidUpdate)((()=>{var _a2;null==(_a2=settings.onPositionChange)||_a2.call(settings,placement)}),[placement]);const isGroupPhase=opened&&currentId&&currentId!==uid;return{x:x,y:y,arrowX:arrowX,arrowY:arrowY,reference:refs.setReference,floating:refs.setFloating,getFloatingProps:getFloatingProps,getReferenceProps:getReferenceProps,isGroupPhase:isGroupPhase,opened:opened,placement:placement}}var Tooltip_module_default2={tooltip:"m-1b3c8819",arrow:"m-f898399f"},defaultProps4={position:"top",refProp:"ref",withinPortal:!0,inline:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},events:{hover:!0,focus:!1,touch:!1},zIndex:(0,import_core8.getDefaultZIndex)("popover"),positionDependencies:[]},varsResolver2=(0,import_core8.createVarsResolver)(((theme,{radius:radius,color:color})=>({tooltip:{"--tooltip-radius":void 0===radius?void 0:(0,import_core8.getRadius)(radius),"--tooltip-bg":color?(0,import_core8.getThemeColor)(color,theme):void 0,"--tooltip-color":color?"var(--raikou-color-white)":void 0}}))),Tooltip=(0,import_core8.factory)(((_props,ref)=>{const props=(0,import_core8.useProps)("Tooltip",defaultProps4,_props),_a=(0,import_core8.useProps)("Tooltip",defaultProps4,props),{children:children,position:position,refProp:refProp,label:label,openDelay:openDelay,closeDelay:closeDelay,onPositionChange:onPositionChange,opened:opened,withinPortal:withinPortal,radius:radius,color:color,classNames:classNames,styles:styles,unstyled:unstyled,style:style,className:className,withArrow:withArrow,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition,offset:offset2,transitionProps:transitionProps,multiline:multiline,events:events,zIndex:zIndex,disabled:disabled,positionDependencies:positionDependencies,onClick:onClick,onMouseEnter:onMouseEnter,onMouseLeave:onMouseLeave,inline:inline2,variant:variant,keepMounted:keepMounted,vars:vars,portalProps:portalProps,mod:mod,floatingStrategy:floatingStrategy}=_a,others=__objRest(_a,["children","position","refProp","label","openDelay","closeDelay","onPositionChange","opened","withinPortal","radius","color","classNames","styles","unstyled","style","className","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","offset","transitionProps","multiline","events","zIndex","disabled","positionDependencies","onClick","onMouseEnter","onMouseLeave","inline","variant","keepMounted","vars","portalProps","mod","floatingStrategy"]),{dir:dir}=(0,import_core8.useDirection)(),arrowRef=(0,import_react16.useRef)(null),tooltip=useTooltip({position:getFloatingPosition(dir,position),closeDelay:closeDelay,openDelay:openDelay,onPositionChange:onPositionChange,opened:opened,events:events,arrowRef:arrowRef,arrowOffset:arrowOffset,offset:"number"==typeof offset2?offset2+(withArrow?arrowSize/2:0):offset2,positionDependencies:[...positionDependencies,children],inline:inline2,strategy:floatingStrategy}),getStyles=(0,import_core8.useStyles)({name:"Tooltip",props:props,classes:Tooltip_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"tooltip",vars:vars,varsResolver:varsResolver2});if(!(0,import_core8.isElement)(children))throw new Error("[@raikou/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const targetRef=(0,import_hooks6.useMergedRef)(tooltip.reference,children.ref,ref),transition=getTransitionProps(transitionProps,{duration:100,transition:"fade"});return import_react16.default.createElement(import_react16.default.Fragment,null,import_react16.default.createElement(OptionalPortal,__spreadProps(__spreadValues({},portalProps),{withinPortal:withinPortal}),import_react16.default.createElement(Transition,__spreadProps(__spreadValues({},transition),{keepMounted:keepMounted,mounted:!disabled&&!!tooltip.opened,duration:tooltip.isGroupPhase?10:transition.duration}),(transitionStyles=>{var _a2,_b;return import_react16.default.createElement(import_core8.Box,__spreadValues(__spreadProps(__spreadValues({},others),{variant:variant,mod:[{multiline:multiline},mod]}),tooltip.getFloatingProps({ref:tooltip.floating,className:getStyles("tooltip").className,style:__spreadProps(__spreadValues(__spreadValues({},getStyles("tooltip").style),transitionStyles),{zIndex:zIndex,top:null!=(_a2=tooltip.y)?_a2:0,left:null!=(_b=tooltip.x)?_b:0})})),label,import_react16.default.createElement(FloatingArrow,__spreadValues({ref:arrowRef,arrowX:tooltip.arrowX,arrowY:tooltip.arrowY,visible:withArrow,position:tooltip.placement,arrowSize:arrowSize,arrowOffset:arrowOffset,arrowRadius:arrowRadius,arrowPosition:arrowPosition},getStyles("arrow"))))}))),(0,import_react16.cloneElement)(children,tooltip.getReferenceProps(__spreadValues({onClick:onClick,onMouseEnter:onMouseEnter,onMouseLeave:onMouseLeave,onMouseMove:props.onMouseMove,onPointerDown:props.onPointerDown,onPointerEnter:props.onPointerEnter,[refProp]:targetRef,className:(0,import_clsx.default)(className,children.props.className)},children.props))))}));Tooltip.classes=Tooltip_module_default2,Tooltip.displayName="@raikou/core/Tooltip",Tooltip.Floating=TooltipFloating,Tooltip.Group=TooltipGroup;