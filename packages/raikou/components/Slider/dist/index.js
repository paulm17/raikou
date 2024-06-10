"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{RangeSlider:()=>RangeSlider,Slider:()=>Slider}),module.exports=__toCommonJS(src_exports);var import_react11=__toESM(require("react")),import_hooks2=require("@raikou/hooks"),import_core7=require("@raikou/core"),import_react5=__toESM(require("react")),import_core=require("@raikou/core"),import_react=__toESM(require("react"));function createSafeContext(errorMessage){const Context=(0,import_react.createContext)(null);return[({children:children,value:value})=>import_react.default.createElement(Context.Provider,{value:value},children),()=>{const ctx=(0,import_react.useContext)(Context);if(null===ctx)throw new Error(errorMessage);return ctx}]}var import_react2=__toESM(require("react")),import_react3=require("react"),import_react4=require("react"),[SliderProvider,useSliderContext]=createSafeContext("SliderProvider was not found in tree"),SliderRoot=(0,import_react5.forwardRef)(((_a,ref)=>{var _b=_a,{size:size,disabled:disabled,variant:variant,color:color,thumbSize:thumbSize,radius:radius}=_b,others=__objRest(_b,["size","disabled","variant","color","thumbSize","radius"]);const{getStyles:getStyles}=useSliderContext();return import_react5.default.createElement(import_core.Box,__spreadValues(__spreadValues({tabIndex:-1,variant:variant,size:size,ref:ref},getStyles("root")),others))}));SliderRoot.displayName="@raikou/core/SliderRoot";var import_react7=__toESM(require("react")),import_core3=require("@raikou/core"),import_react6=__toESM(require("react")),import_core2=require("@raikou/core");function getPosition({value:value,min:min,max:max}){const position=(value-min)/(max-min)*100;return Math.min(Math.max(position,0),100)}function isMarkFilled({mark:mark,offset:offset,value:value,inverted:inverted=!1}){return inverted?"number"==typeof offset&&mark.value<=offset||mark.value>=value:"number"==typeof offset?mark.value>=offset&&mark.value<=value:mark.value<=value}function Marks({marks:marks,min:min,max:max,disabled:disabled,value:value,offset:offset,inverted:inverted}){const{getStyles:getStyles}=useSliderContext();if(!marks)return null;const items=marks.map(((mark,index)=>import_react6.default.createElement(import_core2.Box,__spreadProps(__spreadValues({},getStyles("markWrapper")),{__vars:{"--mark-offset":`${getPosition({value:mark.value,min:min,max:max})}%`},key:index}),import_react6.default.createElement(import_core2.Box,__spreadProps(__spreadValues({},getStyles("mark")),{mod:{filled:isMarkFilled({mark:mark,value:value,offset:offset,inverted:inverted}),disabled:disabled}})),mark.label&&import_react6.default.createElement("div",__spreadValues({},getStyles("markLabel")),mark.label))));return import_react6.default.createElement("div",null,items)}function Track(_a){var _b=_a,{filled:filled,children:children,offset:offset,disabled:disabled,marksOffset:marksOffset,inverted:inverted,containerProps:containerProps}=_b,others=__objRest(_b,["filled","children","offset","disabled","marksOffset","inverted","containerProps"]);const{getStyles:getStyles}=useSliderContext();return import_react7.default.createElement(import_react7.default.Fragment,null,import_react7.default.createElement(import_core3.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("trackContainer")),{mod:{disabled:disabled}}),containerProps),import_react7.default.createElement(import_core3.Box,__spreadProps(__spreadValues({},getStyles("track")),{mod:{inverted:inverted,disabled:disabled}}),import_react7.default.createElement(import_core3.Box,__spreadValues({mod:{inverted:inverted,disabled:disabled},__vars:{"--slider-bar-width":`calc(${filled}% + var(--slider-size))`,"--slider-bar-offset":`calc(${offset}% - var(--slider-size))`}},getStyles("bar"))),children,import_react7.default.createElement(Marks,__spreadProps(__spreadValues({},others),{offset:marksOffset,disabled:disabled,inverted:inverted})))))}Marks.displayName="@raikou/core/SliderMarks",Track.displayName="@raikou/core/SliderTrack";var import_react10=__toESM(require("react")),import_core6=require("@raikou/core"),import_core4=require("@raikou/core"),popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${(0,import_core4.rem)(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${(0,import_core4.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core4.rem)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core4.rem)(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,import_core4.rem)(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})},import_react9=__toESM(require("react")),transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:transition,state:state,duration:duration,timingFunction:timingFunction}){const shared={transitionDuration:`${duration}ms`,transitionTimingFunction:timingFunction};return"string"==typeof transition?transition in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[transition].transitionProperty},shared),transitions[transition].common),transitions[transition][transitionStatuses[state]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:transition.transitionProperty},shared),transition.common),transition[transitionStatuses[state]])}var import_react8=require("react"),import_react_dom=__toESM(require("react-dom")),import_hooks=require("@raikou/hooks"),import_core5=require("@raikou/core");function useTransition({duration:duration,exitDuration:exitDuration,timingFunction:timingFunction,mounted:mounted,onEnter:onEnter,onExit:onExit,onEntered:onEntered,onExited:onExited}){const theme=(0,import_core5.useRaikouTheme)(),shouldReduceMotion=(0,import_hooks.useReducedMotion)(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,[transitionDuration,setTransitionDuration]=(0,import_react8.useState)(reduceMotion?0:duration),[transitionStatus,setStatus]=(0,import_react8.useState)(mounted?"entered":"exited"),timeoutRef=(0,import_react8.useRef)(-1),rafRef=(0,import_react8.useRef)(-1);return(0,import_hooks.useDidUpdate)((()=>{(shouldMount=>{const preHandler=shouldMount?onEnter:onExit,handler=shouldMount?onEntered:onExited;window.clearTimeout(timeoutRef.current);const newTransitionDuration=reduceMotion?0:shouldMount?duration:exitDuration;setTransitionDuration(newTransitionDuration),0===newTransitionDuration?("function"==typeof preHandler&&preHandler(),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")):rafRef.current=requestAnimationFrame((()=>{import_react_dom.default.flushSync((()=>{setStatus(shouldMount?"pre-entering":"pre-exiting")})),rafRef.current=requestAnimationFrame((()=>{"function"==typeof preHandler&&preHandler(),setStatus(shouldMount?"entering":"exiting"),timeoutRef.current=window.setTimeout((()=>{"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")}),newTransitionDuration)}))}))})(mounted)}),[mounted]),(0,import_react8.useEffect)((()=>()=>{window.clearTimeout(timeoutRef.current),cancelAnimationFrame(rafRef.current)}),[]),{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:timingFunction||"ease"}}function Transition({keepMounted:keepMounted,transition:transition="fade",duration:duration=250,exitDuration:exitDuration=duration,mounted:mounted,children:children,timingFunction:timingFunction="ease",onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited}){const{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:transitionTimingFunction}=useTransition({mounted:mounted,exitDuration:exitDuration,duration:duration,timingFunction:timingFunction,onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited});return 0===transitionDuration?mounted?import_react9.default.createElement(import_react9.default.Fragment,null,children({})):keepMounted?children({display:"none"}):null:"exited"===transitionStatus?keepMounted?children({display:"none"}):null:import_react9.default.createElement(import_react9.default.Fragment,null,children(getTransitionStyles({transition:transition,duration:transitionDuration,state:transitionStatus,timingFunction:transitionTimingFunction})))}Transition.displayName="@raikou/core/Transition";var Thumb=(0,import_react10.forwardRef)((({max:max,min:min,value:value,position:position,label:label,dragging:dragging,onMouseDown:onMouseDown,onKeyDownCapture:onKeyDownCapture,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbLabel:thumbLabel,onFocus:onFocus,onBlur:onBlur,showLabelOnHover:showLabelOnHover,isHovered:isHovered,children:children=null,disabled:disabled},ref)=>{const{getStyles:getStyles}=useSliderContext(),[focused,setFocused]=(0,import_react10.useState)(!1),isVisible=labelAlwaysOn||dragging||focused||showLabelOnHover&&isHovered;return import_react10.default.createElement(import_core6.Box,__spreadProps(__spreadValues({tabIndex:0,role:"slider","aria-label":thumbLabel,"aria-valuemax":max,"aria-valuemin":min,"aria-valuenow":value,ref:ref,__vars:{"--slider-thumb-offset":`${position}%`}},getStyles("thumb",{focusable:!0})),{mod:{dragging:dragging,disabled:disabled},onFocus:()=>{setFocused(!0),"function"==typeof onFocus&&onFocus()},onBlur:()=>{setFocused(!1),"function"==typeof onBlur&&onBlur()},onTouchStart:onMouseDown,onMouseDown:onMouseDown,onKeyDownCapture:onKeyDownCapture,onClick:event=>event.stopPropagation()}),children,import_react10.default.createElement(Transition,__spreadValues({mounted:null!=label&&!!isVisible,transition:"fade",duration:0},labelTransitionProps),(transitionStyles=>import_react10.default.createElement("div",__spreadValues({},getStyles("label",{style:transitionStyles})),label))))}));function getChangeValue({value:value,containerWidth:containerWidth,min:min,max:max,step:step,precision:precision}){const dx=(containerWidth?Math.min(Math.max(value,0),containerWidth)/containerWidth:value)*(max-min),nextValue=(0!==dx?Math.round(dx/step)*step:0)+min,nextValueWithinStep=Math.max(nextValue,min);return void 0!==precision?Number(nextValueWithinStep.toFixed(precision)):nextValueWithinStep}function getFloatingValue(value,precision){return parseFloat(value.toFixed(precision))}function getPrecision(step){if(!step)return 0;const split=step.toString().split(".");return split.length>1?split[1].length:0}Thumb.displayName="@raikou/core/SliderThumb";var Slider_module_default={root:"m-dd36362e",label:"m-c9357328",thumb:"m-c9a9a60a",trackContainer:"m-a8645c2",track:"m-c9ade57f",bar:"m-38aeed47",markWrapper:"m-b7b0423a",mark:"m-dd33bc19",markLabel:"m-68c77a5b"},defaultProps={radius:"xl",min:0,max:100,step:1,marks:[],label:f=>f,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,thumbLabel:"",showLabelOnHover:!0,disabled:!1,scale:v=>v},varsResolver=(0,import_core7.createVarsResolver)(((theme,{size:size,color:color,thumbSize:thumbSize,radius:radius})=>({root:{"--slider-size":(0,import_core7.getSize)(size,"slider-size"),"--slider-color":color?(0,import_core7.getThemeColor)(color,theme):void 0,"--slider-radius":void 0===radius?void 0:(0,import_core7.getRadius)(radius),"--slider-thumb-size":void 0!==thumbSize?(0,import_core7.rem)(thumbSize):"calc(var(--slider-size) * 2)"}}))),Slider=(0,import_core7.factory)(((_props,ref)=>{const props=(0,import_core7.useProps)("Slider",defaultProps,_props),_a=props,{classNames:classNames,styles:styles,value:value,onChange:onChange,onChangeEnd:onChangeEnd,size:size,min:min,max:max,step:step,precision:_precision,defaultValue:defaultValue,name:name,marks:marks,label:label,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbLabel:thumbLabel,showLabelOnHover:showLabelOnHover,thumbChildren:thumbChildren,disabled:disabled,unstyled:unstyled,scale:scale,inverted:inverted,className:className,style:style,vars:vars,hiddenInputProps:hiddenInputProps}=_a,others=__objRest(_a,["classNames","styles","value","onChange","onChangeEnd","size","min","max","step","precision","defaultValue","name","marks","label","labelTransitionProps","labelAlwaysOn","thumbLabel","showLabelOnHover","thumbChildren","disabled","unstyled","scale","inverted","className","style","vars","hiddenInputProps"]),getStyles=(0,import_core7.useStyles)({name:"Slider",props:props,classes:Slider_module_default,classNames:classNames,className:className,styles:styles,style:style,vars:vars,varsResolver:varsResolver}),{dir:dir}=(0,import_core7.useDirection)(),[hovered,setHovered]=(0,import_react11.useState)(!1),[_value,setValue]=(0,import_hooks2.useUncontrolled)({value:"number"==typeof value?(0,import_hooks2.clamp)(value,min,max):value,defaultValue:"number"==typeof defaultValue?(0,import_hooks2.clamp)(defaultValue,min,max):defaultValue,finalValue:(0,import_hooks2.clamp)(0,min,max),onChange:onChange}),valueRef=(0,import_react11.useRef)(_value),root=(0,import_react11.useRef)(),thumb=(0,import_react11.useRef)(),position=getPosition({value:_value,min:min,max:max}),scaledValue=scale(_value),_label="function"==typeof label?label(scaledValue):label,precision=null!=_precision?_precision:getPrecision(step),handleChange=(0,import_react11.useCallback)((({x:x})=>{if(!disabled){const nextValue=getChangeValue({value:x,min:min,max:max,step:step,precision:precision});setValue(nextValue),valueRef.current=nextValue}}),[disabled,min,max,step,precision,setValue]),{ref:container,active:active}=(0,import_hooks2.useMove)(handleChange,{onScrubEnd:()=>null==onChangeEnd?void 0:onChangeEnd(valueRef.current)},dir);return import_react11.default.createElement(SliderProvider,{value:{getStyles:getStyles}},import_react11.default.createElement(SliderRoot,__spreadProps(__spreadValues({},others),{ref:(0,import_hooks2.useMergedRef)(ref,root),onKeyDownCapture:event=>{var _a2,_b,_c,_d,_e,_f;if(!disabled)switch(event.key){case"ArrowUp":{event.preventDefault(),null==(_a2=thumb.current)||_a2.focus();const nextValue=getFloatingValue(Math.min(Math.max(_value+step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"ArrowRight":{event.preventDefault(),null==(_b=thumb.current)||_b.focus();const nextValue=getFloatingValue(Math.min(Math.max("rtl"===dir?_value-step:_value+step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"ArrowDown":{event.preventDefault(),null==(_c=thumb.current)||_c.focus();const nextValue=getFloatingValue(Math.min(Math.max(_value-step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"ArrowLeft":{event.preventDefault(),null==(_d=thumb.current)||_d.focus();const nextValue=getFloatingValue(Math.min(Math.max("rtl"===dir?_value+step:_value-step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"Home":event.preventDefault(),null==(_e=thumb.current)||_e.focus(),null==onChangeEnd||onChangeEnd(min),setValue(min);break;case"End":event.preventDefault(),null==(_f=thumb.current)||_f.focus(),null==onChangeEnd||onChangeEnd(max),setValue(max)}},onMouseDownCapture:()=>{var _a2;return null==(_a2=root.current)?void 0:_a2.focus()},size:size,disabled:disabled}),import_react11.default.createElement(Track,{inverted:inverted,offset:0,filled:position,marks:marks,min:min,max:max,value:scaledValue,disabled:disabled,containerProps:{ref:container,onMouseEnter:showLabelOnHover?()=>setHovered(!0):void 0,onMouseLeave:showLabelOnHover?()=>setHovered(!1):void 0}},import_react11.default.createElement(Thumb,{max:max,min:min,value:scaledValue,position:position,dragging:active,label:_label,ref:thumb,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbLabel:thumbLabel,showLabelOnHover:showLabelOnHover,isHovered:hovered,disabled:disabled},thumbChildren)),import_react11.default.createElement("input",__spreadValues({type:"hidden",name:name,value:scaledValue},hiddenInputProps))))}));Slider.classes=Slider_module_default,Slider.displayName="@raikou/core/Slider";var import_react12=__toESM(require("react")),import_hooks3=require("@raikou/hooks"),import_core8=require("@raikou/core");function getClientPosition(event){if("TouchEvent"in window&&event instanceof window.TouchEvent){return event.touches[0].clientX}return event.clientX}var varsResolver2=(0,import_core8.createVarsResolver)(((theme,{size:size,color:color,thumbSize:thumbSize,radius:radius})=>({root:{"--slider-size":(0,import_core8.getSize)(size,"slider-size"),"--slider-color":color?(0,import_core8.getThemeColor)(color,theme):void 0,"--slider-radius":void 0===radius?void 0:(0,import_core8.getRadius)(radius),"--slider-thumb-size":void 0!==thumbSize?(0,import_core8.rem)(thumbSize):"calc(var(--slider-size) * 2)"}}))),defaultProps2={min:0,max:100,minRange:10,step:1,marks:[],label:f=>f,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:v=>v},RangeSlider=(0,import_core8.factory)(((_props,ref)=>{const props=(0,import_core8.useProps)("RangeSlider",defaultProps2,_props),_a=props,{classNames:classNames,styles:styles,value:value,onChange:onChange,onChangeEnd:onChangeEnd,size:size,min:min,max:max,minRange:minRange,maxRange:maxRange,step:step,precision:_precision,defaultValue:defaultValue,name:name,marks:marks,label:label,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbFromLabel:thumbFromLabel,thumbToLabel:thumbToLabel,showLabelOnHover:showLabelOnHover,thumbChildren:thumbChildren,disabled:disabled,unstyled:unstyled,scale:scale,inverted:inverted,className:className,style:style,vars:vars,hiddenInputProps:hiddenInputProps}=_a,others=__objRest(_a,["classNames","styles","value","onChange","onChangeEnd","size","min","max","minRange","maxRange","step","precision","defaultValue","name","marks","label","labelTransitionProps","labelAlwaysOn","thumbFromLabel","thumbToLabel","showLabelOnHover","thumbChildren","disabled","unstyled","scale","inverted","className","style","vars","hiddenInputProps"]),getStyles=(0,import_core8.useStyles)({name:"Slider",props:props,classes:Slider_module_default,classNames:classNames,className:className,styles:styles,style:style,vars:vars,varsResolver:varsResolver2}),{dir:dir}=(0,import_core8.useDirection)(),[focused,setFocused]=(0,import_react12.useState)(-1),[hovered,setHovered]=(0,import_react12.useState)(!1),[_value,setValue]=(0,import_hooks3.useUncontrolled)({value:value,defaultValue:defaultValue,finalValue:[min,max],onChange:onChange}),valueRef=(0,import_react12.useRef)(_value),thumbs=(0,import_react12.useRef)([]),thumbIndex=(0,import_react12.useRef)(void 0),positions=[getPosition({value:_value[0],min:min,max:max}),getPosition({value:_value[1],min:min,max:max})],precision=null!=_precision?_precision:getPrecision(step);(0,import_react12.useEffect)((()=>{Array.isArray(value)&&(valueRef.current=value)}),Array.isArray(value)?[value[0],value[1]]:[null,null]);const setRangedValue=(val,index,triggerChangeEnd)=>{const clone=[...valueRef.current];clone[index]=val,0===index&&(val>clone[1]-(minRange-1e-9)&&(clone[1]=Math.min(val+minRange,max)),val>(max-(minRange-1e-9)||min)&&(clone[index]=valueRef.current[index]),clone[1]-val>maxRange&&(clone[1]=val+maxRange)),1===index&&(val<clone[0]+minRange&&(clone[0]=Math.max(val-minRange,min)),val<clone[0]+minRange&&(clone[index]=valueRef.current[index]),val-clone[0]>maxRange&&(clone[0]=val-maxRange)),clone[0]=getFloatingValue(clone[0],precision),clone[1]=getFloatingValue(clone[1],precision),(val=>{setValue(val),valueRef.current=val})(clone),triggerChangeEnd&&(null==onChangeEnd||onChangeEnd(valueRef.current))},{ref:container,active:active}=(0,import_hooks3.useMove)((({x:x})=>(val=>{if(!disabled){const nextValue=getChangeValue({value:val,min:min,max:max,step:step,precision:precision});setRangedValue(nextValue,thumbIndex.current,!1)}})(x)),{onScrubEnd:()=>null==onChangeEnd?void 0:onChangeEnd(valueRef.current)},dir);function handleThumbMouseDown(index){thumbIndex.current=index}const handleTrackMouseDownCapture=event=>{container.current.focus();const rect=container.current.getBoundingClientRect(),changeValue=getChangeValue({value:getClientPosition(event.nativeEvent)-rect.left,max:max,min:min,step:step,containerWidth:rect.width}),nearestHandle=Math.abs(_value[0]-changeValue)>Math.abs(_value[1]-changeValue)?1:0,_nearestHandle="ltr"===dir?nearestHandle:1===nearestHandle?0:1;thumbIndex.current=_nearestHandle},getFocusedThumbIndex=()=>1!==focused&&0!==focused?(setFocused(0),0):focused,sharedThumbProps={max:max,min:min,size:size,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,onBlur:()=>setFocused(-1)},hasArrayThumbChildren=Array.isArray(thumbChildren);return import_react12.default.createElement(SliderProvider,{value:{getStyles:getStyles}},import_react12.default.createElement(SliderRoot,__spreadProps(__spreadValues({},others),{size:size,ref:ref,disabled:disabled}),import_react12.default.createElement(Track,{offset:positions[0],marksOffset:_value[0],filled:positions[1]-positions[0],marks:marks,inverted:inverted,min:min,max:max,value:_value[1],disabled:disabled,containerProps:{ref:container,onMouseEnter:showLabelOnHover?()=>setHovered(!0):void 0,onMouseLeave:showLabelOnHover?()=>setHovered(!1):void 0,onTouchStartCapture:handleTrackMouseDownCapture,onTouchEndCapture:()=>{thumbIndex.current=-1},onMouseDownCapture:handleTrackMouseDownCapture,onMouseUpCapture:()=>{thumbIndex.current=-1},onKeyDownCapture:event=>{if(!disabled)switch(event.key){case"ArrowUp":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max(valueRef.current[focusedIndex]+step,min),max),precision),focusedIndex,!0);break}case"ArrowRight":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max("rtl"===dir?valueRef.current[focusedIndex]-step:valueRef.current[focusedIndex]+step,min),max),precision),focusedIndex,!0);break}case"ArrowDown":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max(valueRef.current[focusedIndex]-step,min),max),precision),focusedIndex,!0);break}case"ArrowLeft":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max("rtl"===dir?valueRef.current[focusedIndex]+step:valueRef.current[focusedIndex]-step,min),max),precision),focusedIndex,!0);break}}}}},import_react12.default.createElement(Thumb,__spreadProps(__spreadValues({},sharedThumbProps),{value:scale(_value[0]),position:positions[0],dragging:active,label:"function"==typeof label?label(getFloatingValue(scale(_value[0]),precision)):label,ref:node=>{thumbs.current[0]=node},thumbLabel:thumbFromLabel,onMouseDown:()=>handleThumbMouseDown(0),onFocus:()=>setFocused(0),showLabelOnHover:showLabelOnHover,isHovered:hovered,disabled:disabled}),hasArrayThumbChildren?thumbChildren[0]:thumbChildren),import_react12.default.createElement(Thumb,__spreadProps(__spreadValues({},sharedThumbProps),{thumbLabel:thumbToLabel,value:scale(_value[1]),position:positions[1],dragging:active,label:"function"==typeof label?label(getFloatingValue(scale(_value[1]),precision)):label,ref:node=>{thumbs.current[1]=node},onMouseDown:()=>handleThumbMouseDown(1),onFocus:()=>setFocused(1),showLabelOnHover:showLabelOnHover,isHovered:hovered,disabled:disabled}),hasArrayThumbChildren?thumbChildren[1]:thumbChildren)),import_react12.default.createElement("input",__spreadValues({type:"hidden",name:`${name}_from`,value:_value[0]},hiddenInputProps)),import_react12.default.createElement("input",__spreadValues({type:"hidden",name:`${name}_to`,value:_value[1]},hiddenInputProps))))}));RangeSlider.displayName="@raikou/core/RangeSlider";