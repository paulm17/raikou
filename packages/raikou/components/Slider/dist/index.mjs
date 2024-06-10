var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React8,{useCallback,useRef as useRef2,useState as useState4}from"react";import{clamp,useMergedRef,useMove,useUncontrolled}from"@raikou/hooks";import{factory,useProps,useDirection,useStyles,createVarsResolver,getSize,getThemeColor,getRadius,rem as rem2}from"@raikou/core";import React3,{forwardRef}from"react";import{Box}from"@raikou/core";import React,{createContext,useContext}from"react";function createSafeContext(errorMessage){const Context=createContext(null);return[({children:children,value:value})=>React.createElement(Context.Provider,{value:value},children),()=>{const ctx=useContext(Context);if(null===ctx)throw new Error(errorMessage);return ctx}]}import React2,{createContext as createContext2,useContext as useContext2}from"react";import{useState}from"react";import{useEffect,useLayoutEffect}from"react";var[SliderProvider,useSliderContext]=createSafeContext("SliderProvider was not found in tree"),SliderRoot=forwardRef(((_a,ref)=>{var _b=_a,{size:size,disabled:disabled,variant:variant,color:color,thumbSize:thumbSize,radius:radius}=_b,others=__objRest(_b,["size","disabled","variant","color","thumbSize","radius"]);const{getStyles:getStyles}=useSliderContext();return React3.createElement(Box,__spreadValues(__spreadValues({tabIndex:-1,variant:variant,size:size,ref:ref},getStyles("root")),others))}));SliderRoot.displayName="@raikou/core/SliderRoot";import React5 from"react";import{Box as Box3}from"@raikou/core";import React4 from"react";import{Box as Box2}from"@raikou/core";function getPosition({value:value,min:min,max:max}){const position=(value-min)/(max-min)*100;return Math.min(Math.max(position,0),100)}function isMarkFilled({mark:mark,offset:offset,value:value,inverted:inverted=!1}){return inverted?"number"==typeof offset&&mark.value<=offset||mark.value>=value:"number"==typeof offset?mark.value>=offset&&mark.value<=value:mark.value<=value}function Marks({marks:marks,min:min,max:max,disabled:disabled,value:value,offset:offset,inverted:inverted}){const{getStyles:getStyles}=useSliderContext();if(!marks)return null;const items=marks.map(((mark,index)=>React4.createElement(Box2,__spreadProps(__spreadValues({},getStyles("markWrapper")),{__vars:{"--mark-offset":`${getPosition({value:mark.value,min:min,max:max})}%`},key:index}),React4.createElement(Box2,__spreadProps(__spreadValues({},getStyles("mark")),{mod:{filled:isMarkFilled({mark:mark,value:value,offset:offset,inverted:inverted}),disabled:disabled}})),mark.label&&React4.createElement("div",__spreadValues({},getStyles("markLabel")),mark.label))));return React4.createElement("div",null,items)}function Track(_a){var _b=_a,{filled:filled,children:children,offset:offset,disabled:disabled,marksOffset:marksOffset,inverted:inverted,containerProps:containerProps}=_b,others=__objRest(_b,["filled","children","offset","disabled","marksOffset","inverted","containerProps"]);const{getStyles:getStyles}=useSliderContext();return React5.createElement(React5.Fragment,null,React5.createElement(Box3,__spreadValues(__spreadProps(__spreadValues({},getStyles("trackContainer")),{mod:{disabled:disabled}}),containerProps),React5.createElement(Box3,__spreadProps(__spreadValues({},getStyles("track")),{mod:{inverted:inverted,disabled:disabled}}),React5.createElement(Box3,__spreadValues({mod:{inverted:inverted,disabled:disabled},__vars:{"--slider-bar-width":`calc(${filled}% + var(--slider-size))`,"--slider-bar-offset":`calc(${offset}% - var(--slider-size))`}},getStyles("bar"))),children,React5.createElement(Marks,__spreadProps(__spreadValues({},others),{offset:marksOffset,disabled:disabled,inverted:inverted})))))}Marks.displayName="@raikou/core/SliderMarks",Track.displayName="@raikou/core/SliderTrack";import React7,{useState as useState3,forwardRef as forwardRef2}from"react";import{Box as Box4}from"@raikou/core";import{rem}from"@raikou/core";var popIn={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${rem(10)})`},transitionProperty:"transform, opacity"},transitions={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${rem(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${rem(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"center center"}}),"pop-bottom-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"bottom right"}}),"pop-top-left":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top left"}}),"pop-top-right":__spreadProps(__spreadValues({},popIn),{common:{transformOrigin:"top right"}})};import React6 from"react";var transitionStatuses={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function getTransitionStyles({transition:transition,state:state,duration:duration,timingFunction:timingFunction}){const shared={transitionDuration:`${duration}ms`,transitionTimingFunction:timingFunction};return"string"==typeof transition?transition in transitions?__spreadValues(__spreadValues(__spreadValues({transitionProperty:transitions[transition].transitionProperty},shared),transitions[transition].common),transitions[transition][transitionStatuses[state]]):{}:__spreadValues(__spreadValues(__spreadValues({transitionProperty:transition.transitionProperty},shared),transition.common),transition[transitionStatuses[state]])}import{useState as useState2,useEffect as useEffect2,useRef}from"react";import ReactDOM from"react-dom";import{useReducedMotion,useDidUpdate}from"@raikou/hooks";import{useRaikouTheme}from"@raikou/core";function useTransition({duration:duration,exitDuration:exitDuration,timingFunction:timingFunction,mounted:mounted,onEnter:onEnter,onExit:onExit,onEntered:onEntered,onExited:onExited}){const theme=useRaikouTheme(),shouldReduceMotion=useReducedMotion(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,[transitionDuration,setTransitionDuration]=useState2(reduceMotion?0:duration),[transitionStatus,setStatus]=useState2(mounted?"entered":"exited"),timeoutRef=useRef(-1),rafRef=useRef(-1);return useDidUpdate((()=>{(shouldMount=>{const preHandler=shouldMount?onEnter:onExit,handler=shouldMount?onEntered:onExited;window.clearTimeout(timeoutRef.current);const newTransitionDuration=reduceMotion?0:shouldMount?duration:exitDuration;setTransitionDuration(newTransitionDuration),0===newTransitionDuration?("function"==typeof preHandler&&preHandler(),"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")):rafRef.current=requestAnimationFrame((()=>{ReactDOM.flushSync((()=>{setStatus(shouldMount?"pre-entering":"pre-exiting")})),rafRef.current=requestAnimationFrame((()=>{"function"==typeof preHandler&&preHandler(),setStatus(shouldMount?"entering":"exiting"),timeoutRef.current=window.setTimeout((()=>{"function"==typeof handler&&handler(),setStatus(shouldMount?"entered":"exited")}),newTransitionDuration)}))}))})(mounted)}),[mounted]),useEffect2((()=>()=>{window.clearTimeout(timeoutRef.current),cancelAnimationFrame(rafRef.current)}),[]),{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:timingFunction||"ease"}}function Transition({keepMounted:keepMounted,transition:transition="fade",duration:duration=250,exitDuration:exitDuration=duration,mounted:mounted,children:children,timingFunction:timingFunction="ease",onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited}){const{transitionDuration:transitionDuration,transitionStatus:transitionStatus,transitionTimingFunction:transitionTimingFunction}=useTransition({mounted:mounted,exitDuration:exitDuration,duration:duration,timingFunction:timingFunction,onExit:onExit,onEntered:onEntered,onEnter:onEnter,onExited:onExited});return 0===transitionDuration?mounted?React6.createElement(React6.Fragment,null,children({})):keepMounted?children({display:"none"}):null:"exited"===transitionStatus?keepMounted?children({display:"none"}):null:React6.createElement(React6.Fragment,null,children(getTransitionStyles({transition:transition,duration:transitionDuration,state:transitionStatus,timingFunction:transitionTimingFunction})))}Transition.displayName="@raikou/core/Transition";var Thumb=forwardRef2((({max:max,min:min,value:value,position:position,label:label,dragging:dragging,onMouseDown:onMouseDown,onKeyDownCapture:onKeyDownCapture,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbLabel:thumbLabel,onFocus:onFocus,onBlur:onBlur,showLabelOnHover:showLabelOnHover,isHovered:isHovered,children:children=null,disabled:disabled},ref)=>{const{getStyles:getStyles}=useSliderContext(),[focused,setFocused]=useState3(!1),isVisible=labelAlwaysOn||dragging||focused||showLabelOnHover&&isHovered;return React7.createElement(Box4,__spreadProps(__spreadValues({tabIndex:0,role:"slider","aria-label":thumbLabel,"aria-valuemax":max,"aria-valuemin":min,"aria-valuenow":value,ref:ref,__vars:{"--slider-thumb-offset":`${position}%`}},getStyles("thumb",{focusable:!0})),{mod:{dragging:dragging,disabled:disabled},onFocus:()=>{setFocused(!0),"function"==typeof onFocus&&onFocus()},onBlur:()=>{setFocused(!1),"function"==typeof onBlur&&onBlur()},onTouchStart:onMouseDown,onMouseDown:onMouseDown,onKeyDownCapture:onKeyDownCapture,onClick:event=>event.stopPropagation()}),children,React7.createElement(Transition,__spreadValues({mounted:null!=label&&!!isVisible,transition:"fade",duration:0},labelTransitionProps),(transitionStyles=>React7.createElement("div",__spreadValues({},getStyles("label",{style:transitionStyles})),label))))}));function getChangeValue({value:value,containerWidth:containerWidth,min:min,max:max,step:step,precision:precision}){const dx=(containerWidth?Math.min(Math.max(value,0),containerWidth)/containerWidth:value)*(max-min),nextValue=(0!==dx?Math.round(dx/step)*step:0)+min,nextValueWithinStep=Math.max(nextValue,min);return void 0!==precision?Number(nextValueWithinStep.toFixed(precision)):nextValueWithinStep}function getFloatingValue(value,precision){return parseFloat(value.toFixed(precision))}function getPrecision(step){if(!step)return 0;const split=step.toString().split(".");return split.length>1?split[1].length:0}Thumb.displayName="@raikou/core/SliderThumb";var Slider_module_default={root:"m-dd36362e",label:"m-c9357328",thumb:"m-c9a9a60a",trackContainer:"m-a8645c2",track:"m-c9ade57f",bar:"m-38aeed47",markWrapper:"m-b7b0423a",mark:"m-dd33bc19",markLabel:"m-68c77a5b"},defaultProps={radius:"xl",min:0,max:100,step:1,marks:[],label:f=>f,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,thumbLabel:"",showLabelOnHover:!0,disabled:!1,scale:v=>v},varsResolver=createVarsResolver(((theme,{size:size,color:color,thumbSize:thumbSize,radius:radius})=>({root:{"--slider-size":getSize(size,"slider-size"),"--slider-color":color?getThemeColor(color,theme):void 0,"--slider-radius":void 0===radius?void 0:getRadius(radius),"--slider-thumb-size":void 0!==thumbSize?rem2(thumbSize):"calc(var(--slider-size) * 2)"}}))),Slider=factory(((_props,ref)=>{const props=useProps("Slider",defaultProps,_props),_a=props,{classNames:classNames,styles:styles,value:value,onChange:onChange,onChangeEnd:onChangeEnd,size:size,min:min,max:max,step:step,precision:_precision,defaultValue:defaultValue,name:name,marks:marks,label:label,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbLabel:thumbLabel,showLabelOnHover:showLabelOnHover,thumbChildren:thumbChildren,disabled:disabled,unstyled:unstyled,scale:scale,inverted:inverted,className:className,style:style,vars:vars,hiddenInputProps:hiddenInputProps}=_a,others=__objRest(_a,["classNames","styles","value","onChange","onChangeEnd","size","min","max","step","precision","defaultValue","name","marks","label","labelTransitionProps","labelAlwaysOn","thumbLabel","showLabelOnHover","thumbChildren","disabled","unstyled","scale","inverted","className","style","vars","hiddenInputProps"]),getStyles=useStyles({name:"Slider",props:props,classes:Slider_module_default,classNames:classNames,className:className,styles:styles,style:style,vars:vars,varsResolver:varsResolver}),{dir:dir}=useDirection(),[hovered,setHovered]=useState4(!1),[_value,setValue]=useUncontrolled({value:"number"==typeof value?clamp(value,min,max):value,defaultValue:"number"==typeof defaultValue?clamp(defaultValue,min,max):defaultValue,finalValue:clamp(0,min,max),onChange:onChange}),valueRef=useRef2(_value),root=useRef2(),thumb=useRef2(),position=getPosition({value:_value,min:min,max:max}),scaledValue=scale(_value),_label="function"==typeof label?label(scaledValue):label,precision=null!=_precision?_precision:getPrecision(step),handleChange=useCallback((({x:x})=>{if(!disabled){const nextValue=getChangeValue({value:x,min:min,max:max,step:step,precision:precision});setValue(nextValue),valueRef.current=nextValue}}),[disabled,min,max,step,precision,setValue]),{ref:container,active:active}=useMove(handleChange,{onScrubEnd:()=>null==onChangeEnd?void 0:onChangeEnd(valueRef.current)},dir);return React8.createElement(SliderProvider,{value:{getStyles:getStyles}},React8.createElement(SliderRoot,__spreadProps(__spreadValues({},others),{ref:useMergedRef(ref,root),onKeyDownCapture:event=>{var _a2,_b,_c,_d,_e,_f;if(!disabled)switch(event.key){case"ArrowUp":{event.preventDefault(),null==(_a2=thumb.current)||_a2.focus();const nextValue=getFloatingValue(Math.min(Math.max(_value+step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"ArrowRight":{event.preventDefault(),null==(_b=thumb.current)||_b.focus();const nextValue=getFloatingValue(Math.min(Math.max("rtl"===dir?_value-step:_value+step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"ArrowDown":{event.preventDefault(),null==(_c=thumb.current)||_c.focus();const nextValue=getFloatingValue(Math.min(Math.max(_value-step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"ArrowLeft":{event.preventDefault(),null==(_d=thumb.current)||_d.focus();const nextValue=getFloatingValue(Math.min(Math.max("rtl"===dir?_value+step:_value-step,min),max),precision);null==onChangeEnd||onChangeEnd(nextValue),setValue(nextValue);break}case"Home":event.preventDefault(),null==(_e=thumb.current)||_e.focus(),null==onChangeEnd||onChangeEnd(min),setValue(min);break;case"End":event.preventDefault(),null==(_f=thumb.current)||_f.focus(),null==onChangeEnd||onChangeEnd(max),setValue(max)}},onMouseDownCapture:()=>{var _a2;return null==(_a2=root.current)?void 0:_a2.focus()},size:size,disabled:disabled}),React8.createElement(Track,{inverted:inverted,offset:0,filled:position,marks:marks,min:min,max:max,value:scaledValue,disabled:disabled,containerProps:{ref:container,onMouseEnter:showLabelOnHover?()=>setHovered(!0):void 0,onMouseLeave:showLabelOnHover?()=>setHovered(!1):void 0}},React8.createElement(Thumb,{max:max,min:min,value:scaledValue,position:position,dragging:active,label:_label,ref:thumb,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbLabel:thumbLabel,showLabelOnHover:showLabelOnHover,isHovered:hovered,disabled:disabled},thumbChildren)),React8.createElement("input",__spreadValues({type:"hidden",name:name,value:scaledValue},hiddenInputProps))))}));Slider.classes=Slider_module_default,Slider.displayName="@raikou/core/Slider";import React9,{useEffect as useEffect3,useRef as useRef3,useState as useState5}from"react";import{useMove as useMove2,useUncontrolled as useUncontrolled2}from"@raikou/hooks";import{factory as factory2,useProps as useProps2,useDirection as useDirection2,createVarsResolver as createVarsResolver2,getSize as getSize2,getThemeColor as getThemeColor2,getRadius as getRadius2,rem as rem3,useStyles as useStyles2}from"@raikou/core";function getClientPosition(event){if("TouchEvent"in window&&event instanceof window.TouchEvent){return event.touches[0].clientX}return event.clientX}var varsResolver2=createVarsResolver2(((theme,{size:size,color:color,thumbSize:thumbSize,radius:radius})=>({root:{"--slider-size":getSize2(size,"slider-size"),"--slider-color":color?getThemeColor2(color,theme):void 0,"--slider-radius":void 0===radius?void 0:getRadius2(radius),"--slider-thumb-size":void 0!==thumbSize?rem3(thumbSize):"calc(var(--slider-size) * 2)"}}))),defaultProps2={min:0,max:100,minRange:10,step:1,marks:[],label:f=>f,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:v=>v},RangeSlider=factory2(((_props,ref)=>{const props=useProps2("RangeSlider",defaultProps2,_props),_a=props,{classNames:classNames,styles:styles,value:value,onChange:onChange,onChangeEnd:onChangeEnd,size:size,min:min,max:max,minRange:minRange,maxRange:maxRange,step:step,precision:_precision,defaultValue:defaultValue,name:name,marks:marks,label:label,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,thumbFromLabel:thumbFromLabel,thumbToLabel:thumbToLabel,showLabelOnHover:showLabelOnHover,thumbChildren:thumbChildren,disabled:disabled,unstyled:unstyled,scale:scale,inverted:inverted,className:className,style:style,vars:vars,hiddenInputProps:hiddenInputProps}=_a,others=__objRest(_a,["classNames","styles","value","onChange","onChangeEnd","size","min","max","minRange","maxRange","step","precision","defaultValue","name","marks","label","labelTransitionProps","labelAlwaysOn","thumbFromLabel","thumbToLabel","showLabelOnHover","thumbChildren","disabled","unstyled","scale","inverted","className","style","vars","hiddenInputProps"]),getStyles=useStyles2({name:"Slider",props:props,classes:Slider_module_default,classNames:classNames,className:className,styles:styles,style:style,vars:vars,varsResolver:varsResolver2}),{dir:dir}=useDirection2(),[focused,setFocused]=useState5(-1),[hovered,setHovered]=useState5(!1),[_value,setValue]=useUncontrolled2({value:value,defaultValue:defaultValue,finalValue:[min,max],onChange:onChange}),valueRef=useRef3(_value),thumbs=useRef3([]),thumbIndex=useRef3(void 0),positions=[getPosition({value:_value[0],min:min,max:max}),getPosition({value:_value[1],min:min,max:max})],precision=null!=_precision?_precision:getPrecision(step);useEffect3((()=>{Array.isArray(value)&&(valueRef.current=value)}),Array.isArray(value)?[value[0],value[1]]:[null,null]);const setRangedValue=(val,index,triggerChangeEnd)=>{const clone=[...valueRef.current];clone[index]=val,0===index&&(val>clone[1]-(minRange-1e-9)&&(clone[1]=Math.min(val+minRange,max)),val>(max-(minRange-1e-9)||min)&&(clone[index]=valueRef.current[index]),clone[1]-val>maxRange&&(clone[1]=val+maxRange)),1===index&&(val<clone[0]+minRange&&(clone[0]=Math.max(val-minRange,min)),val<clone[0]+minRange&&(clone[index]=valueRef.current[index]),val-clone[0]>maxRange&&(clone[0]=val-maxRange)),clone[0]=getFloatingValue(clone[0],precision),clone[1]=getFloatingValue(clone[1],precision),(val=>{setValue(val),valueRef.current=val})(clone),triggerChangeEnd&&(null==onChangeEnd||onChangeEnd(valueRef.current))},{ref:container,active:active}=useMove2((({x:x})=>(val=>{if(!disabled){const nextValue=getChangeValue({value:val,min:min,max:max,step:step,precision:precision});setRangedValue(nextValue,thumbIndex.current,!1)}})(x)),{onScrubEnd:()=>null==onChangeEnd?void 0:onChangeEnd(valueRef.current)},dir);function handleThumbMouseDown(index){thumbIndex.current=index}const handleTrackMouseDownCapture=event=>{container.current.focus();const rect=container.current.getBoundingClientRect(),changeValue=getChangeValue({value:getClientPosition(event.nativeEvent)-rect.left,max:max,min:min,step:step,containerWidth:rect.width}),nearestHandle=Math.abs(_value[0]-changeValue)>Math.abs(_value[1]-changeValue)?1:0,_nearestHandle="ltr"===dir?nearestHandle:1===nearestHandle?0:1;thumbIndex.current=_nearestHandle},getFocusedThumbIndex=()=>1!==focused&&0!==focused?(setFocused(0),0):focused,sharedThumbProps={max:max,min:min,size:size,labelTransitionProps:labelTransitionProps,labelAlwaysOn:labelAlwaysOn,onBlur:()=>setFocused(-1)},hasArrayThumbChildren=Array.isArray(thumbChildren);return React9.createElement(SliderProvider,{value:{getStyles:getStyles}},React9.createElement(SliderRoot,__spreadProps(__spreadValues({},others),{size:size,ref:ref,disabled:disabled}),React9.createElement(Track,{offset:positions[0],marksOffset:_value[0],filled:positions[1]-positions[0],marks:marks,inverted:inverted,min:min,max:max,value:_value[1],disabled:disabled,containerProps:{ref:container,onMouseEnter:showLabelOnHover?()=>setHovered(!0):void 0,onMouseLeave:showLabelOnHover?()=>setHovered(!1):void 0,onTouchStartCapture:handleTrackMouseDownCapture,onTouchEndCapture:()=>{thumbIndex.current=-1},onMouseDownCapture:handleTrackMouseDownCapture,onMouseUpCapture:()=>{thumbIndex.current=-1},onKeyDownCapture:event=>{if(!disabled)switch(event.key){case"ArrowUp":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max(valueRef.current[focusedIndex]+step,min),max),precision),focusedIndex,!0);break}case"ArrowRight":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max("rtl"===dir?valueRef.current[focusedIndex]-step:valueRef.current[focusedIndex]+step,min),max),precision),focusedIndex,!0);break}case"ArrowDown":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max(valueRef.current[focusedIndex]-step,min),max),precision),focusedIndex,!0);break}case"ArrowLeft":{event.preventDefault();const focusedIndex=getFocusedThumbIndex();thumbs.current[focusedIndex].focus(),setRangedValue(getFloatingValue(Math.min(Math.max("rtl"===dir?valueRef.current[focusedIndex]+step:valueRef.current[focusedIndex]-step,min),max),precision),focusedIndex,!0);break}}}}},React9.createElement(Thumb,__spreadProps(__spreadValues({},sharedThumbProps),{value:scale(_value[0]),position:positions[0],dragging:active,label:"function"==typeof label?label(getFloatingValue(scale(_value[0]),precision)):label,ref:node=>{thumbs.current[0]=node},thumbLabel:thumbFromLabel,onMouseDown:()=>handleThumbMouseDown(0),onFocus:()=>setFocused(0),showLabelOnHover:showLabelOnHover,isHovered:hovered,disabled:disabled}),hasArrayThumbChildren?thumbChildren[0]:thumbChildren),React9.createElement(Thumb,__spreadProps(__spreadValues({},sharedThumbProps),{thumbLabel:thumbToLabel,value:scale(_value[1]),position:positions[1],dragging:active,label:"function"==typeof label?label(getFloatingValue(scale(_value[1]),precision)):label,ref:node=>{thumbs.current[1]=node},onMouseDown:()=>handleThumbMouseDown(1),onFocus:()=>setFocused(1),showLabelOnHover:showLabelOnHover,isHovered:hovered,disabled:disabled}),hasArrayThumbChildren?thumbChildren[1]:thumbChildren)),React9.createElement("input",__spreadValues({type:"hidden",name:`${name}_from`,value:_value[0]},hiddenInputProps)),React9.createElement("input",__spreadValues({type:"hidden",name:`${name}_to`,value:_value[1]},hiddenInputProps))))}));RangeSlider.displayName="@raikou/core/RangeSlider";export{RangeSlider,Slider};