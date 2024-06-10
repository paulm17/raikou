var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};import React6,{useRef,useState as useState2}from"react";import{clamp,useId,useMergedRef,useUncontrolled}from"@raikou/hooks";import{Box as Box2,factory,useProps,useStyles,createVarsResolver,useDirection as useDirection2,getSize,getThemeColor}from"@raikou/core";import React,{createContext,useContext}from"react";function createSafeContext(errorMessage){const Context=createContext(null);return[({children:children,value:value})=>React.createElement(Context.Provider,{value:value},children),()=>{const ctx=useContext(Context);if(null===ctx)throw new Error(errorMessage);return ctx}]}import React2,{createContext as createContext2,useContext as useContext2}from"react";import{useState}from"react";import{useEffect,useLayoutEffect}from"react";var[RatingProvider,useRatingContext]=createSafeContext("Rating was not found in tree");import React5 from"react";import{Box,useDirection}from"@raikou/core";import React4 from"react";import React3 from"react";function StarIcon(props){const _a=props,{width:width,height:height,style:style}=_a,others=__objRest(_a,["width","height","style"]);return React3.createElement("svg",__spreadValues({viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:__spreadValues({width:width,height:height},style)},others),React3.createElement("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"}))}function StarSymbol({type:type}){const ctx=useRatingContext();return React4.createElement(StarIcon,__spreadProps(__spreadValues({},ctx.getStyles("starSymbol")),{"data-filled":"full"===type||void 0}))}function RatingItem(_a){var _a2,_b=_a,{getSymbolLabel:getSymbolLabel,emptyIcon:emptyIcon,fullIcon:fullIcon,full:full,active:active,value:value,readOnly:readOnly,fractionValue:fractionValue,color:color,id:id,onBlur:onBlur,onChange:onChange,onInputChange:onInputChange,style:style}=_b,others=__objRest(_b,["getSymbolLabel","emptyIcon","fullIcon","full","active","value","readOnly","fractionValue","color","id","onBlur","onChange","onInputChange","style"]);const ctx=useRatingContext(),_fullIcon="function"==typeof fullIcon?fullIcon(value):fullIcon,_emptyIcon="function"==typeof emptyIcon?emptyIcon(value):emptyIcon,{dir:dir}=useDirection();return React5.createElement(React5.Fragment,null,!readOnly&&React5.createElement("input",__spreadValues(__spreadProps(__spreadValues({},ctx.getStyles("input")),{onKeyDown:event=>" "===event.key&&onChange(value),id:id,type:"radio","data-active":active||void 0,"aria-label":null==getSymbolLabel?void 0:getSymbolLabel(value),value:value,onBlur:onBlur,onChange:onInputChange}),others)),React5.createElement(Box,__spreadProps(__spreadValues({component:readOnly?"div":"label"},ctx.getStyles("label")),{"data-read-only":readOnly||void 0,htmlFor:id,onClick:()=>onChange(value),__vars:{"--rating-item-z-index":null==(_a2=1===fractionValue?void 0:active?2:0)?void 0:_a2.toString()}}),React5.createElement(Box,__spreadProps(__spreadValues({},ctx.getStyles("symbolBody")),{__vars:{"--rating-symbol-clip-path":1===fractionValue?void 0:"ltr"===dir?`inset(0 ${active?100-100*fractionValue:100}% 0 0)`:`inset(0 0 0 ${active?100-100*fractionValue:100}% )`}}),full?_fullIcon||React5.createElement(StarSymbol,{type:"full"}):_emptyIcon||React5.createElement(StarSymbol,{type:"empty"}))))}StarIcon.displayName="@raikou/core/StarIcon",StarSymbol.displayName="@raikou/core/StarSymbol",RatingItem.displayName="@raikou/core/RatingItem";var Rating_module_default={root:"m-f8d312f2",symbolGroup:"m-61734bb7",starSymbol:"m-5662a89a",input:"m-211007ba",label:"m-21342ee4",symbolBody:"m-fae05d6a"};function roundValueTo(value,to){var _a;const rounded=Math.round(value/to)*to,precision=(null==(_a=`${to}`.split(".")[1])?void 0:_a.length)||0;return Number(rounded.toFixed(precision))}var defaultProps={size:"sm",getSymbolLabel:value=>`${value}`,count:5,fractions:1,color:"yellow"},varsResolver=createVarsResolver(((theme,{size:size,color:color})=>({root:{"--rating-size":getSize(size,"rating-size"),"--rating-color":getThemeColor(color,theme)}}))),Rating=factory(((_props,ref)=>{const props=useProps("Rating",defaultProps,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,name:name,id:id,value:value,defaultValue:defaultValue,onChange:onChange,fractions:fractions,count:count,onMouseEnter:onMouseEnter,readOnly:readOnly,onMouseMove:onMouseMove,onHover:onHover,onMouseLeave:onMouseLeave,onTouchStart:onTouchStart,onTouchEnd:onTouchEnd,size:size,variant:variant,getSymbolLabel:getSymbolLabel,color:color,emptySymbol:emptySymbol,fullSymbol:fullSymbol,highlightSelectedOnly:highlightSelectedOnly}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","name","id","value","defaultValue","onChange","fractions","count","onMouseEnter","readOnly","onMouseMove","onHover","onMouseLeave","onTouchStart","onTouchEnd","size","variant","getSymbolLabel","color","emptySymbol","fullSymbol","highlightSelectedOnly"]),getStyles=useStyles({name:"Rating",classes:Rating_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver}),{dir:dir}=useDirection2(),_name=useId(name),_id=useId(id),rootRef=useRef(null),[_value,setValue]=useUncontrolled({value:value,defaultValue:defaultValue,finalValue:0,onChange:onChange}),[hovered,setHovered]=useState2(-1),[isOutside,setOutside]=useState2(!0),_fractions=Math.floor(fractions),_count=Math.floor(count),decimalUnit=1/_fractions,stableValueRounded=roundValueTo(_value,decimalUnit),finalValue=-1!==hovered?hovered:stableValueRounded,getRatingFromCoordinates=x=>{const{left:left,right:right,width:width}=rootRef.current.getBoundingClientRect();return clamp(roundValueTo(("rtl"===dir?right-x:x-left)/(width/_count)+decimalUnit/2,decimalUnit),decimalUnit,_count)},handleItemBlur=()=>isOutside&&setHovered(-1),handleInputChange=event=>{readOnly||setHovered("number"==typeof event?event:parseFloat(event.target.value))},handleChange=event=>{readOnly||setValue("number"==typeof event?event:parseFloat(event.target.value))},items=Array(_count).fill(0).map(((_,index)=>{const integerValue=index+1,fractionItems=Array.from(new Array(0===index?_fractions+1:_fractions)),isGroupActive=!readOnly&&Math.ceil(hovered)===integerValue;return React6.createElement("div",__spreadValues({key:integerValue,"data-active":isGroupActive||void 0},getStyles("symbolGroup")),fractionItems.map(((__,fractionIndex)=>{const fractionValue=decimalUnit*(0===index?fractionIndex:fractionIndex+1),symbolValue=roundValueTo(integerValue-1+fractionValue,decimalUnit);return React6.createElement(RatingItem,{key:`${integerValue}-${symbolValue}`,getSymbolLabel:getSymbolLabel,emptyIcon:emptySymbol,fullIcon:fullSymbol,full:highlightSelectedOnly?symbolValue===finalValue:symbolValue<=finalValue,active:symbolValue===finalValue,checked:symbolValue===stableValueRounded,readOnly:readOnly,fractionValue:fractionValue,value:symbolValue,name:_name,onChange:handleChange,onBlur:handleItemBlur,onInputChange:handleInputChange,id:`${_id}-${index}-${fractionIndex}`})})))}));return React6.createElement(RatingProvider,{value:{getStyles:getStyles}},React6.createElement(Box2,__spreadValues(__spreadProps(__spreadValues({ref:useMergedRef(rootRef,ref)},getStyles("root")),{onMouseMove:event=>{if(null==onMouseMove||onMouseMove(event),readOnly)return;const rounded=getRatingFromCoordinates(event.clientX);setHovered(rounded),rounded!==hovered&&(null==onHover||onHover(rounded))},onMouseEnter:event=>{null==onMouseEnter||onMouseEnter(event),!readOnly&&setOutside(!1)},onMouseLeave:event=>{null==onMouseLeave||onMouseLeave(event),readOnly||(setHovered(-1),setOutside(!0),-1!==hovered&&(null==onHover||onHover(-1)))},onTouchStart:event=>{event.preventDefault();const{touches:touches}=event;if(1!==touches.length)return;const touch=touches[0];setValue(getRatingFromCoordinates(touch.clientX)),null==onTouchStart||onTouchStart(event)},onTouchEnd:event=>{event.preventDefault(),null==onTouchEnd||onTouchEnd(event)},variant:variant,size:size,id:_id}),others),items))}));Rating.displayName="@raikou/core/Rating";export{Rating};