"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf;var __hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)
__defProp(target,name,{get:all[name],enumerable:true});};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from==="object"||typeof from==="function"){for(let key of __getOwnPropNames(from))
if(!__hasOwnProp.call(to,key)&&key!==except)
__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});}
return to;};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:true}):target,mod));var __toCommonJS=(mod)=>__copyProps(__defProp({},"__esModule",{value:true}),mod);var src_exports={};__export(src_exports,{Box:()=>Box,DEFAULT_THEME:()=>DEFAULT_THEME,FOCUS_CLASS_NAMES:()=>FOCUS_CLASS_NAMES,InlineStyles:()=>InlineStyles,STYlE_PROPS_DATA:()=>STYlE_PROPS_DATA,camelToKebabCase:()=>camelToKebabCase,closeOnEscape:()=>closeOnEscape,createEventHandler:()=>createEventHandler,createPolymorphicComponent:()=>createPolymorphicComponent,createScopedKeydownHandler:()=>createScopedKeydownHandler,createVarsResolver:()=>createVarsResolver,darken:()=>darken,deepMerge:()=>deepMerge,defaultVariantColorsResolver:()=>defaultVariantColorsResolver,em:()=>em,extractStyleProps:()=>extractStyleProps,factory:()=>factory,filterProps:()=>filterProps,findElementAncestor:()=>findElementAncestor,getBaseValue:()=>getBaseValue,getBreakpointValue:()=>getBreakpointValue,getDefaultZIndex:()=>getDefaultZIndex,getFontSize:()=>getFontSize,getGradient:()=>getGradient,getLineHeight:()=>getLineHeight,getPrimaryShade:()=>getPrimaryShade,getRadius:()=>getRadius,getSafeId:()=>getSafeId,getShadow:()=>getShadow,getSize:()=>getSize,getSortedBreakpoints:()=>getSortedBreakpoints,getSpacing:()=>getSpacing,getStyleObject:()=>getStyleObject,getThemeColor:()=>getThemeColor,isElement:()=>isElement,isLightColor:()=>isLightColor,isNumberLike:()=>isNumberLike,keys:()=>keys,lighten:()=>lighten,mergeRaikouTheme:()=>mergeRaikouTheme,noop:()=>noop,parseStyleProps:()=>parseStyleProps,parseThemeColor:()=>parseThemeColor,polymorphicFactory:()=>polymorphicFactory,px:()=>px,rem:()=>rem,resolveClassNames:()=>resolveClassNames,resolveStyles:()=>resolveStyles,rgba:()=>rgba,stylesToString:()=>stylesToString,toRgba:()=>toRgba,useDirection:()=>useDirection,useProps:()=>useProps,useRaikouTheme:()=>useRaikouTheme,useRandomClassName:()=>useRandomClassName,useResolvedStylesApi:()=>useResolvedStylesApi,useStyles:()=>useStyles,validateRaikouTheme:()=>validateRaikouTheme});module.exports=__toCommonJS(src_exports);function keys(object){return Object.keys(object);}
function isObject(item){return item&&typeof item==="object"&&!Array.isArray(item);}
function deepMerge(target,source){const result={...target};const _source=source;if(isObject(target)&&isObject(source)){Object.keys(source).forEach((key)=>{if(isObject(_source[key])){if(!(key in target)){result[key]=_source[key];}else{result[key]=deepMerge(result[key],_source[key]);}}else{result[key]=_source[key];}});}
return result;}
function camelToKebabCase(value){return value.replace(/[A-Z]/g,(letter)=>`-${letter.toLowerCase()}`);}
function getTransformedScaledValue(value){var _a;if(typeof value!=="string"||!value.includes("var(--raikou-scale)")){return value;}
return(_a=value.match(/^calc\((.*?)\)$/))==null?void 0:_a[1].split("*")[0].trim();}
function px(value){const transformedValue=getTransformedScaledValue(value);if(typeof transformedValue==="number"){return transformedValue;}
if(typeof transformedValue==="string"){if(transformedValue.includes("calc")||transformedValue.includes("var")){return transformedValue;}
if(transformedValue.includes("px")){return Number(transformedValue.replace("px",""));}
if(transformedValue.includes("rem")){return Number(transformedValue.replace("rem",""))*16;}
if(transformedValue.includes("em")){return Number(transformedValue.replace("em",""))*16;}
return Number(transformedValue);}
return NaN;}
function scaleRem(remValue){return`calc(${remValue}*var(--raikou-scale))`;}
function createConverter(units,{shouldScale=false}={}){function converter(value){if(value===0||value==="0"){return"0";}
if(typeof value==="number"){const val=`${value/16}${units}`;return shouldScale?scaleRem(val):val;}
if(typeof value==="string"){if(value.startsWith("calc(")||value.startsWith("var(")||value.startsWith("clamp(")){return value;}
if(value.includes(" ")){return value.split(" ").map((val)=>converter(val)).join(" ");}
if(value.includes(units)){return shouldScale?scaleRem(value):value;}
const replaced=value.replace("px","");if(!Number.isNaN(Number(replaced))){const val=`${Number(replaced)/16}${units}`;return shouldScale?scaleRem(val):val;}}
return value;}
return converter;}
var rem=createConverter("rem",{shouldScale:true});var em=createConverter("em");function filterProps(props){return Object.keys(props).reduce((acc,key)=>{if(props[key]!==void 0){acc[key]=props[key];}
return acc;},{});}
function isNumberLike(value){if(typeof value==="number"){return true;}
if(typeof value==="string"){if(value.startsWith("calc(")||value.startsWith("var(")||value.includes(" ")&&value.trim()!==""){return true;}
return/[0-9]/.test(value.trim().replace("-","")[0]);}
return false;}
var import_react=__toESM(require("react"));function isElement(value){if(Array.isArray(value)||value===null){return false;}
if(typeof value==="object"){if(value.type===import_react.default.Fragment){return false;}
return true;}
return false;}
function getSafeId(uid,errorMessage){return(value)=>{if(typeof value!=="string"||value.trim().length===0){throw new Error(errorMessage);}
return`${uid}-${value}`;};}
function findElementAncestor(element,selector){let _element=element;while((_element=_element.parentElement)&&!_element.matches(selector));return _element;}
function getPreviousIndex(current,elements,loop){for(let i=current-1;i>=0;i-=1){if(!elements[i].disabled){return i;}}
if(loop){for(let i=elements.length-1;i>-1;i-=1){if(!elements[i].disabled){return i;}}}
return current;}
function getNextIndex(current,elements,loop){for(let i=current+1;i<elements.length;i+=1){if(!elements[i].disabled){return i;}}
if(loop){for(let i=0;i<elements.length;i+=1){if(!elements[i].disabled){return i;}}}
return current;}
function onSameLevel(target,sibling,parentSelector){return findElementAncestor(target,parentSelector)===findElementAncestor(sibling,parentSelector);}
function createScopedKeydownHandler({parentSelector,siblingSelector,onKeyDown,loop=true,activateOnFocus=false,dir="rtl",orientation}){return(event)=>{var _a;onKeyDown==null?void 0:onKeyDown(event);const elements=Array.from(((_a=findElementAncestor(event.currentTarget,parentSelector))==null?void 0:_a.querySelectorAll(siblingSelector))||[]).filter((node)=>onSameLevel(event.currentTarget,node,parentSelector));const current=elements.findIndex((el)=>event.currentTarget===el);const _nextIndex=getNextIndex(current,elements,loop);const _previousIndex=getPreviousIndex(current,elements,loop);const nextIndex=dir==="rtl"?_previousIndex:_nextIndex;const previousIndex=dir==="rtl"?_nextIndex:_previousIndex;switch(event.key){case"ArrowRight":{if(orientation==="horizontal"){event.stopPropagation();event.preventDefault();elements[nextIndex].focus();activateOnFocus&&elements[nextIndex].click();}
break;}
case"ArrowLeft":{if(orientation==="horizontal"){event.stopPropagation();event.preventDefault();elements[previousIndex].focus();activateOnFocus&&elements[previousIndex].click();}
break;}
case"ArrowUp":{if(orientation==="vertical"){event.stopPropagation();event.preventDefault();elements[_previousIndex].focus();activateOnFocus&&elements[_previousIndex].click();}
break;}
case"ArrowDown":{if(orientation==="vertical"){event.stopPropagation();event.preventDefault();elements[_nextIndex].focus();activateOnFocus&&elements[_nextIndex].click();}
break;}
case"Home":{event.stopPropagation();event.preventDefault();!elements[0].disabled&&elements[0].focus();break;}
case"End":{event.stopPropagation();event.preventDefault();const last=elements.length-1;!elements[last].disabled&&elements[last].focus();break;}}};}
var elevations={app:100,modal:200,popover:300,overlay:400,max:9999};function getDefaultZIndex(level){return elevations[level];}
var noop=()=>{};function closeOnEscape(callback,options={active:true}){if(typeof callback!=="function"||!options.active){return options.onKeyDown||noop;}
return(event)=>{var _a;if(event.key==="Escape"){callback(event);(_a=options.onTrigger)==null?void 0:_a.call(options);}};}
function getSize(size,prefix="size",convertToRem=true){if(size===void 0){return void 0;}
return isNumberLike(size)?convertToRem?rem(size):size:`var(--${prefix}-${size})`;}
function getSpacing(size){return getSize(size,"raikou-spacing");}
function getRadius(size){if(size===void 0){return"var(--raikou-radius-default)";}
return getSize(size,"raikou-radius");}
function getFontSize(size){return getSize(size,"raikou-font-size");}
function getLineHeight(size){return getSize(size,"raikou-line-height",false);}
function getShadow(size){if(!size){return void 0;}
return getSize(size,"raikou-shadow",false);}
function createEventHandler(parentEventHandler,eventHandler){return(event)=>{parentEventHandler==null?void 0:parentEventHandler(event);eventHandler==null?void 0:eventHandler(event);};}
function getBreakpointValue(breakpoint,theme){if(breakpoint in theme.breakpoints){return px(theme.breakpoints[breakpoint]);}
return px(breakpoint);}
function getSortedBreakpoints(breakpoints,theme){const convertedBreakpoints=breakpoints.map((breakpoint)=>({value:breakpoint,px:getBreakpointValue(breakpoint,theme)}));convertedBreakpoints.sort((a,b)=>a.px-b.px);return convertedBreakpoints;}
function getBaseValue(value){if(typeof value==="object"&&value!==null){if("base"in value){return value.base;}
return void 0;}
return value;}
function createVarsResolver(resolver){return resolver;}
var import_clsx=__toESM(require("clsx"));var EMPTY_CLASS_NAMES={};function mergeClassNames(objects){const merged={};objects.forEach((obj)=>{Object.entries(obj).forEach(([key,value])=>{if(typeof value==="object"){let newValue="";Object.entries(value).forEach(([subKey,subValue])=>{newValue+=`${subKey}-${subValue}`;});value=newValue.trim();}
if(merged[key]){merged[key]=(0,import_clsx.default)(merged[key],value);}else{merged[key]=value;}});});return merged;}
function resolveClassNames({theme,classNames,props,stylesCtx}){const arrayClassNames=Array.isArray(classNames)?classNames:[classNames];const resolvedClassNames=arrayClassNames.map((item)=>typeof item==="function"?item(theme,props,stylesCtx):item||EMPTY_CLASS_NAMES);return mergeClassNames(resolvedClassNames);}
function resolveStyles({theme,styles,props,stylesCtx}){const arrayStyles=Array.isArray(styles)?styles:[styles];return arrayStyles.reduce((acc,style)=>{if(typeof style==="function"){return{...acc,...style(theme,props,stylesCtx)};}
return{...acc,...style};},{});}
function getPrimaryShade(theme,colorScheme){if(typeof theme.primaryShade==="number"){return theme.primaryShade;}
if(colorScheme==="dark"){return theme.primaryShade.dark;}
return theme.primaryShade.light;}
function parseThemeColor({color,theme,colorScheme}){if(typeof color!=="string"){throw new Error(`[@raikou/core]Failed to parse color.Instead got ${typeof color}`);}
if(color==="white"||color==="black"){return{color,value:color==="white"?theme.white:theme.black,shade:void 0,isThemeColor:false,variable:`--raikou-color-${color}`};}
const[_color,shade]=color.split(".");const colorShade=shade?Number(shade):void 0;const isThemeColor=_color in theme.colors;if(isThemeColor){return{color:_color,value:colorShade!==void 0?theme.colors[_color][colorShade]:theme.colors[_color][getPrimaryShade(theme,colorScheme||"light")],shade:colorShade,isThemeColor,variable:shade?`--raikou-color-${_color}-${colorShade}`:`--raikou-color-${_color}-filled`};}
return{color,value:color,isThemeColor,shade:colorShade,variable:void 0};}
function getThemeColor(color,theme){const parsed=parseThemeColor({color:color||theme.primaryColor,theme});return parsed.variable?`var(${parsed.variable})`:color;}
function isHexColor(hex){const HEX_REGEXP=/^#?([0-9A-F]{3}){1,2}$/i;return HEX_REGEXP.test(hex);}
function hexToRgba(color){let hexString=color.replace("#","");if(hexString.length===3){const shorthandHex=hexString.split("");hexString=[shorthandHex[0],shorthandHex[0],shorthandHex[1],shorthandHex[1],shorthandHex[2],shorthandHex[2]].join("");}
const parsed=parseInt(hexString,16);const r=parsed>>16&255;const g=parsed>>8&255;const b=parsed&255;return{r,g,b,a:1};}
function rgbStringToRgba(color){const[r,g,b,a]=color.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r,g,b,a:a||1};}
function hslStringToRgba(hslaString){const hslaRegex=/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;const matches=hslaString.match(hslaRegex);if(!matches){return{r:0,g:0,b:0,a:1};}
const h=parseInt(matches[1],10);const s=parseInt(matches[2],10)/100;const l=parseInt(matches[3],10)/100;const a=matches[5]?parseFloat(matches[5]):void 0;const chroma=(1-Math.abs(2*l-1))*s;const huePrime=h/60;const x=chroma*(1-Math.abs(huePrime%2-1));const m=l-chroma/2;let r;let g;let b;if(huePrime>=0&&huePrime<1){r=chroma;g=x;b=0;}else if(huePrime>=1&&huePrime<2){r=x;g=chroma;b=0;}else if(huePrime>=2&&huePrime<3){r=0;g=chroma;b=x;}else if(huePrime>=3&&huePrime<4){r=0;g=x;b=chroma;}else if(huePrime>=4&&huePrime<5){r=x;g=0;b=chroma;}else{r=chroma;g=0;b=x;}
return{r:Math.round((r+m)*255),g:Math.round((g+m)*255),b:Math.round((b+m)*255),a:a||1};}
function toRgba(color){if(isHexColor(color)){return hexToRgba(color);}
if(color.startsWith("rgb")){return rgbStringToRgba(color);}
if(color.startsWith("hsl")){return hslStringToRgba(color);}
return{r:0,g:0,b:0,a:1};}
function darken(color,alpha){if(color.startsWith("var(")){return color;}
const{r,g,b,a}=toRgba(color);const f=1-alpha;const dark=(input)=>Math.round(input*f);return`rgba(${dark(r)},${dark(g)},${dark(b)},${a})`;}
function rgba(color,alpha){if(typeof color!=="string"||alpha>1||alpha<0){return"rgba(0, 0, 0, 1)";}
const{r,g,b}=toRgba(color);return`rgba(${r},${g},${b},${alpha})`;}
var defaultVariantColorsResolver=({color,theme,variant,gradient})=>{const parsed=parseThemeColor({color:color||theme.primaryColor,theme});if(variant==="filled"){if(parsed.isThemeColor){if(parsed.shade===void 0){return{background:`var(--raikou-color-${color}-filled)`,hover:`var(--raikou-color-${color}-filled-hover)`,color:"var(--raikou-color-white)",border:`${rem(1)}solid transparent`};}
return{background:`var(--raikou-color-${parsed.color}-${parsed.shade})`,hover:`var(--raikou-color-${parsed.color}-${parsed.shade===9?8:parsed.shade+1})`,color:"var(--raikou-color-white)",border:`${rem(1)}solid transparent`};}
return{background:color,hover:darken(color,0.1),color:"var(--raikou-color-white)",border:`${rem(1)}solid transparent`};}
if(variant==="light"){if(parsed.isThemeColor){if(parsed.shade===void 0){return{background:`var(--raikou-color-${color}-light)`,hover:`var(--raikou-color-${color}-light-hover)`,color:`var(--raikou-color-${color}-light-color)`,border:`${rem(1)}solid transparent`};}
const parsedColor=theme.colors[parsed.color][parsed.shade];return{background:rgba(parsedColor,0.1),hover:rgba(parsedColor,0.12),color:`var(--raikou-color-${parsed.color}-${Math.min(parsed.shade,6)})`,border:`${rem(1)}solid transparent`};}
return{background:rgba(color,0.1),hover:rgba(color,0.12),color,border:`${rem(1)}solid transparent`};}
if(variant==="outline"){if(parsed.isThemeColor){if(parsed.shade===void 0){return{background:"transparent",hover:`var(--raikou-color-${color}-outline-hover)`,color:`var(--raikou-color-${color}-outline)`,border:`${rem(1)}solid var(--raikou-color-${color}-outline)`};}
return{background:"transparent",hover:rgba(theme.colors[parsed.color][parsed.shade],0.05),color:`var(--raikou-color-${parsed.color}-${parsed.shade})`,border:`${rem(1)}solid var(--raikou-color-${parsed.color}-${parsed.shade})`};}
return{background:"transparent",hover:rgba(color,0.05),color,border:`${rem(1)}solid ${color}`};}
if(variant==="subtle"){if(parsed.isThemeColor){if(parsed.shade===void 0){return{background:"transparent",hover:`var(--raikou-color-${color}-light-hover)`,color:`var(--raikou-color-${color}-light-color)`,border:`${rem(1)}solid transparent`};}
const parsedColor=theme.colors[parsed.color][parsed.shade];return{background:"transparent",hover:rgba(parsedColor,0.12),color:`var(--raikou-color-${parsed.color}-${Math.min(parsed.shade,6)})`,border:`${rem(1)}solid transparent`};}
return{background:"transparent",hover:rgba(color,0.12),color,border:`${rem(1)}solid transparent`};}
if(variant==="transparent"){if(parsed.isThemeColor){if(parsed.shade===void 0){return{background:"transparent",hover:"transparent",color:`var(--raikou-color-${color}-light-color)`,border:`${rem(1)}solid transparent`};}
return{background:"transparent",hover:"transparent",color:`var(--raikou-color-${parsed.color}-${Math.min(parsed.shade,6)})`,border:`${rem(1)}solid transparent`};}
return{background:"transparent",hover:"transparent",color,border:`${rem(1)}solid transparent`};}
if(variant==="white"){if(parsed.isThemeColor){if(parsed.shade===void 0){return{background:"var(--raikou-color-white)",hover:darken(theme.white,0.01),color:`var(--raikou-color-${color}-filled)`,border:`${rem(1)}solid transparent`};}
return{background:"var(--raikou-color-white)",hover:darken(theme.white,0.01),color:`var(--raikou-color-${parsed.color}-${parsed.shade})`,border:`${rem(1)}solid transparent`};}
return{background:"var(--raikou-color-white)",hover:darken(theme.white,0.01),color,border:`${rem(1)}solid transparent`};}
if(variant==="gradient"){const gradient2=`linear-gradient(var(--raikou-gradient-deg),var(--raikou-gradient-from)0%,var(--raikou-gradient-to)100%)`;return{background:gradient2,hover:gradient2,color:"var(--raikou-color-white)",border:"none"};}
if(variant==="default"){return{background:"var(--raikou-color-default)",hover:"var(--raikou-color-default-hover)",color:"var(--raikou-color-default-color)",border:`${rem(1)}solid var(--raikou-color-default-border)`};}
return{};};function getGradient(gradient,theme){const merged={from:(gradient==null?void 0:gradient.from)||theme.defaultGradient.from,to:(gradient==null?void 0:gradient.to)||theme.defaultGradient.to,deg:(gradient==null?void 0:gradient.deg)||theme.defaultGradient.deg||0};const fromColor=getThemeColor(merged.from,theme);const toColor=getThemeColor(merged.to,theme);return`linear-gradient(${merged.deg},${fromColor}0%,${toColor}100%)`;}
function lighten(color,alpha){if(color.startsWith("var(")){return color;}
const{r,g,b,a}=toRgba(color);const light=(input)=>Math.round(input+(255-input)*alpha);return`rgba(${light(r)},${light(g)},${light(b)},${a})`;}
function getPartLuminance(value){const x=value/255;return x<=0.03928?x/12.92:((x+0.055)/1.055)**2.4;}
function getLuminance(input){const r=getPartLuminance(input.r);const g=getPartLuminance(input.g);const b=getPartLuminance(input.b);return 0.2126*r+0.7152*g+0.0722*b;}
function isLightColor(color,luminanceThreshold=0.179){return getLuminance(toRgba(color))>luminanceThreshold;}
var DEFAULT_COLORS={rose:["","","","","","","","","",""],pink:["","","","","","","","","",""],fuchsia:["","","","","","","","","",""],purple:["","","","","","","","","",""],violet:["","","","","","","","","",""],indigo:["","","","","","","","","",""],blue:["","","","","","","","","",""],sky:["","","","","","","","","",""],cyan:["","","","","","","","","",""],teal:["","","","","","","","","",""],emerald:["","","","","","","","","",""],green:["","","","","","","","","",""],lime:["","","","","","","","","",""],yellow:["","","","","","","","","",""],amber:["","","","","","","","","",""],orange:["","","","","","","","","",""],red:["","","","","","","","","",""],gray:["","","","","","","","","",""],slate:["","","","","","","","","",""],zinc:["","","","","","","","","",""],neutral:["","","","","","","","","",""],stone:["","","","","","","","","",""],light:["","","","","","","","","",""],dark:["","","","","","","","","",""]};var DEFAULT_FONT_FAMILY="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";var DEFAULT_THEME={scale:1,fontSmoothing:true,focusRing:"auto",white:"#fff",black:"#000",colors:DEFAULT_COLORS,primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:defaultVariantColorsResolver,fontFamily:DEFAULT_FONT_FAMILY,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:false,cursorType:"default",defaultGradient:{from:"#dbe4f5",to:"#3a5791",deg:"45deg"},defaultRadius:"sm",activeClassName:"raikou-active",focusClassName:"",headings:{fontFamily:DEFAULT_FONT_FAMILY,fontWeight:"700",sizes:{h1:{fontSize:rem(34),lineHeight:"1.3"},h2:{fontSize:rem(26),lineHeight:"1.35"},h3:{fontSize:rem(22),lineHeight:"1.4"},h4:{fontSize:rem(18),lineHeight:"1.45"},h5:{fontSize:rem(16),lineHeight:"1.5"},h6:{fontSize:rem(14),lineHeight:"1.5"}}},fontSizes:{xs:rem(12),sm:rem(14),md:rem(16),lg:rem(18),xl:rem(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:rem(2),sm:rem(4),md:rem(8),lg:rem(16),xl:rem(32)},spacing:{xs:rem(10),sm:rem(12),md:rem(16),lg:rem(20),xl:rem(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${rem(1)}${rem(3)}rgba(0,0,0,0.05),0 ${rem(1)}${rem(2)}rgba(0,0,0,0.1)`,sm:`0 ${rem(1)}${rem(3)}rgba(0,0,0,0.05),rgba(0,0,0,0.05)0 ${rem(10)}${rem(15)}${rem(-5)},rgba(0,0,0,0.04)0 ${rem(7)}${rem(7)}${rem(-5)}`,md:`0 ${rem(1)}${rem(3)}rgba(0,0,0,0.05),rgba(0,0,0,0.05)0 ${rem(20)}${rem(25)}${rem(-5)},rgba(0,0,0,0.04)0 ${rem(10)}${rem(10)}${rem(-5)}`,lg:`0 ${rem(1)}${rem(3)}rgba(0,0,0,0.05),rgba(0,0,0,0.05)0 ${rem(28)}${rem(23)}${rem(-7)},rgba(0,0,0,0.04)0 ${rem(12)}${rem(12)}${rem(-7)}`,xl:`0 ${rem(1)}${rem(3)}rgba(0,0,0,0.05),rgba(0,0,0,0.05)0 ${rem(36)}${rem(28)}${rem(-7)},rgba(0,0,0,0.04)0 ${rem(17)}${rem(17)}${rem(-7)}`},other:{},components:{}};var INVALID_PRIMARY_COLOR_ERROR="[@raikou/core] RaikouProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";var INVALID_PRIMARY_SHADE_ERROR="[@raikou/core] RaikouProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";function isValidPrimaryShade(shade){if(shade<0||shade>9){return false;}
return parseInt(shade.toString(),10)===shade;}
function validateRaikouTheme(theme){if(!(theme.primaryColor in theme.colors)){throw new Error(INVALID_PRIMARY_COLOR_ERROR);}
if(typeof theme.primaryShade==="object"){if(!isValidPrimaryShade(theme.primaryShade.dark)||!isValidPrimaryShade(theme.primaryShade.light)){throw new Error(INVALID_PRIMARY_SHADE_ERROR);}}
if(typeof theme.primaryShade==="number"&&!isValidPrimaryShade(theme.primaryShade)){throw new Error(INVALID_PRIMARY_SHADE_ERROR);}}
function mergeRaikouTheme(currentTheme,themeOverride){var _a;if(!themeOverride){validateRaikouTheme(currentTheme);return currentTheme;}
const result=deepMerge(currentTheme,themeOverride);if(themeOverride.fontFamily&&!((_a=themeOverride.headings)==null?void 0:_a.fontFamily)){result.headings.fontFamily=themeOverride.fontFamily;}
validateRaikouTheme(result);return result;}
var import_global_store=require("@raikou/global-store");function useRaikouTheme(){if(typeof window!=="undefined"){const windowTheme=window["raikou_theme"];const theme=mergeRaikouTheme(DEFAULT_THEME,windowTheme);theme.variantColorResolver=defaultVariantColorsResolver;return theme;}else{const createTheme=(0,import_global_store.getState)();const theme=mergeRaikouTheme(DEFAULT_THEME,createTheme);theme.variantColorResolver=defaultVariantColorsResolver;return theme;}}
function useProps(component,defaultProps,props){var _a;const theme=useRaikouTheme();const contextPropsPayload=(_a=theme.components[component])==null?void 0:_a.defaultProps;const contextProps=typeof contextPropsPayload==="function"?contextPropsPayload(theme):contextPropsPayload;return{...defaultProps,...contextProps,...filterProps(props)};}
function useResolvedStylesApi({classNames,styles,props,stylesCtx}){const theme=useRaikouTheme();return{resolvedClassNames:resolveClassNames({theme,classNames,props,stylesCtx:stylesCtx||void 0}),resolvedStyles:resolveStyles({theme,styles,props,stylesCtx:stylesCtx||void 0})};}
var import_clsx2=__toESM(require("clsx"));var FOCUS_CLASS_NAMES={always:"raikou-focus-always",auto:"raikou-focus-auto",never:"raikou-focus-never"};function getGlobalClassNames({theme,options,unstyled}){return(0,import_clsx2.default)((options==null?void 0:options.focusable)&&!unstyled&&(theme.focusClassName||FOCUS_CLASS_NAMES[theme.focusRing]),(options==null?void 0:options.active)&&!unstyled&&theme.activeClassName);}
var import_clsx3=__toESM(require("clsx"));function getStaticClassNames({themeName,classNamesPrefix,selector}){return themeName.map((n)=>`${n.toLowerCase()}-${selector}`);}
function getThemeClassNames({themeName,theme,selector,props,stylesCtx}){return themeName.map((n)=>{var _a,_b;return(_b=resolveClassNames({theme,classNames:(_a=theme.components[n])==null?void 0:_a.classNames,props,stylesCtx}))==null?void 0:_b[selector];});}
function getVariantClassName({options,classes,selector,unstyled}){return(options==null?void 0:options.variant)&&!unstyled?classes[`${selector}--${options.variant}`]:void 0;}
function getRootClassName({rootSelector,selector,className}){return rootSelector===selector?className:void 0;}
function getSelectorClassName({selector,classes,unstyled}){return unstyled?void 0:classes[selector];}
function getResolvedClassNames({selector,stylesCtx,theme,classNames,props}){return resolveClassNames({theme,classNames,props,stylesCtx})[selector];}
function getOptionsClassNames({selector,stylesCtx,options,props,theme}){return resolveClassNames({theme,classNames:options==null?void 0:options.classNames,props:(options==null?void 0:options.props)||props,stylesCtx})[selector];}
function getClassName({theme,options,themeName,selector,classNamesPrefix,classNames,classes,unstyled,className,rootSelector,props,stylesCtx}){return(0,import_clsx3.default)(getGlobalClassNames({theme,options,unstyled}),getThemeClassNames({theme,themeName,selector,props,stylesCtx}),getVariantClassName({options,classes,selector,unstyled}),getResolvedClassNames({selector,stylesCtx,theme,classNames,props}),getOptionsClassNames({selector,stylesCtx,options,props,theme}),getRootClassName({rootSelector,selector,className}),getSelectorClassName({selector,classes,unstyled}),getStaticClassNames({themeName,classNamesPrefix,selector}),options==null?void 0:options.className);}
function getThemeStyles({theme,themeName,props,stylesCtx,selector}){return themeName.map((n)=>{var _a;return resolveStyles({theme,styles:(_a=theme.components[n])==null?void 0:_a.styles,props,stylesCtx})[selector];}).reduce((acc,val)=>({...acc,...val}),{});}
function resolveStyle({style,theme}){if(Array.isArray(style)){return[...style].reduce((acc,item)=>({...acc,...resolveStyle({style:item,theme})}),{});}
if(typeof style==="function"){return style(theme);}
if(style==null){return{};}
return style;}
function mergeVars(vars){return vars.reduce((acc,current)=>{if(current){Object.keys(current).forEach((key)=>{acc[key]={...acc[key],...filterProps(current[key])};});}
return acc;},{});}
function resolveVars({vars,varsResolver,theme,props,stylesCtx,selector,themeName}){var _a;return(_a=mergeVars([varsResolver==null?void 0:varsResolver(theme,props,stylesCtx),...themeName.map((name)=>{var _a2,_b;const vars2=new Function("theme","props","stylesCtx","rem","px","em","lighten","darken",(_b=(_a2=theme.components)==null?void 0:_a2[name])==null?void 0:_b.vars);return vars2==null?void 0:vars2(theme,props,stylesCtx,rem,px,em,lighten,darken);}),vars==null?void 0:vars(theme,props,stylesCtx)]))==null?void 0:_a[selector];}
function getStyle({theme,themeName,selector,options,props,stylesCtx,rootSelector,styles,style,vars,varsResolver}){return{...getThemeStyles({theme,themeName,props,stylesCtx,selector}),...resolveStyles({theme,styles,props,stylesCtx})[selector],...resolveStyles({theme,styles:options==null?void 0:options.styles,props:(options==null?void 0:options.props)||props,stylesCtx})[selector],...resolveVars({theme,props,stylesCtx,vars,varsResolver,selector,themeName}),...rootSelector===selector?resolveStyle({style,theme}):null,...resolveStyle({style:options==null?void 0:options.style,theme})};}
function useStyles({name,classes,props,stylesCtx,className,style,rootSelector="root",unstyled,classNames,styles,vars,varsResolver}){const theme=useRaikouTheme();const classNamesPrefix="raikou";const themeName=(Array.isArray(name)?name:[name]).filter((n)=>n);return(selector,options)=>({className:getClassName({theme,options,themeName,selector,classNamesPrefix,classNames,classes,unstyled,className,rootSelector,props,stylesCtx}),style:getStyle({theme,themeName,selector,options,props,stylesCtx,rootSelector,styles,style,vars,varsResolver})});}
var import_react2=__toESM(require("react"));function cssObjectToString(css){return keys(css).reduce((acc,rule)=>css[rule]!==void 0?`${acc}
${camelToKebabCase(rule)}:${css[rule]};`:acc,"").trim();}
function stylesToString({selector,styles,media}){const baseStyles=styles?cssObjectToString(styles):"";const mediaQueryStyles=!Array.isArray(media)?[]:media.map((item)=>`@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);return`${baseStyles?`${selector}{${baseStyles}}`:""}${mediaQueryStyles.join("")}`.trim();}
function InlineStyles({selector,styles,media}){return import_react2.default.createElement("style",{"data-raikou-styles":"inline",dangerouslySetInnerHTML:{__html:stylesToString({selector,styles,media})}});}
function extractStyleProps(others){const{m,mx,my,mt,mb,ml,mr,p,px:px2,py,pt,pb,pl,pr,bg,c,opacity,ff,fz,fw,lts,ta,lh,fs,tt,td,w,miw,maw,h,mih,mah,bgsz,bgp,bgr,bga,pos,top,left,bottom,right,inset,display,hiddenFrom,visibleFrom,lightHidden,darkHidden,...rest}=others;const styleProps=filterProps({m,mx,my,mt,mb,ml,mr,p,px:px2,py,pt,pb,pl,pr,bg,c,opacity,ff,fz,fw,lts,ta,lh,fs,tt,td,w,miw,maw,h,mih,mah,bgsz,bgp,bgr,bga,pos,top,left,bottom,right,inset,display,hiddenFrom,visibleFrom,lightHidden,darkHidden});return{styleProps,rest};}
var STYlE_PROPS_DATA={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"bg"},c:{type:"color",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"identity",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"}};function colorResolver(color,theme){const parsedColor=parseThemeColor({color,theme});if(parsedColor.color==="dimmed"){return"var(--raikou-color-dimmed)";}
if(parsedColor.color==="bright"){return"var(--raikou-color-bright)";}
return parsedColor.variable?`var(${parsedColor.variable})`:parsedColor.color;}
function fontSizeResolver(value,theme){if(typeof value==="string"&&value in theme.fontSizes){return`var(--raikou-font-size-${value})`;}
if(typeof value==="number"){return rem(value);}
if(typeof value==="string"){return rem(value);}
return value;}
function spacingResolver(value,theme){if(typeof value==="number"){return rem(value);}
if(typeof value==="string"){const mod=value.replace("-","");if(!(mod in theme.spacing)){return rem(value);}
const variable=`--raikou-spacing-${mod}`;return value.startsWith("-")?`calc(var(${variable})*-1)`:`var(${variable})`;}
return value;}
function identityResolver(value){return value;}
function sizeResolver(value){if(typeof value==="number"){return rem(value);}
return value;}
function lineHeightResolver(value,theme){if(typeof value==="string"&&value in theme.lineHeights){return`var(--raikou-line-height-${value})`;}
return value;}
var resolvers={color:colorResolver,fontSize:fontSizeResolver,spacing:spacingResolver,identity:identityResolver,size:sizeResolver,lineHeight:lineHeightResolver};function replaceMediaQuery(query){return query.replace("(min-width: ","").replace("em)","");}
function sortMediaQueries({media,...props}){const breakpoints=Object.keys(media);const sortedMedia=breakpoints.sort((a,b)=>Number(replaceMediaQuery(a))-Number(replaceMediaQuery(b))).map((query)=>({query,styles:media[query]}));return{...props,media:sortedMedia};}
function hasResponsiveStyles(styleProp){if(typeof styleProp!=="object"||styleProp===null){return false;}
const breakpoints=Object.keys(styleProp);if(breakpoints.length===1&&breakpoints[0]==="base"){return false;}
return true;}
function getBaseValue2(value){if(typeof value==="object"&&value!==null){if("base"in value){return value.base;}
return void 0;}
return value;}
function getBreakpointKeys(value){if(typeof value==="object"&&value!==null){return keys(value).filter((key)=>key!=="base");}
return[];}
function getBreakpointValue2(value,breakpoint){if(typeof value==="object"&&value!==null&&breakpoint in value){return value[breakpoint];}
return value;}
function parseStyleProps({styleProps,data,theme}){return sortMediaQueries(keys(styleProps).reduce((acc,styleProp)=>{if(styleProp==="hiddenFrom"||styleProp==="visibleFrom"){return acc;}
const propertyData=data[styleProp];const properties=Array.isArray(propertyData.property)?propertyData.property:[propertyData.property];const baseValue=getBaseValue2(styleProps[styleProp]);if(!hasResponsiveStyles(styleProps[styleProp])){properties.forEach((property)=>{acc.inlineStyles[property]=resolvers[propertyData.type](baseValue,theme);});return acc;}
acc.hasResponsiveStyles=true;const breakpoints=getBreakpointKeys(styleProps[styleProp]);properties.forEach((property)=>{if(baseValue){acc.styles[property]=resolvers[propertyData.type](baseValue,theme);}
breakpoints.forEach((breakpoint)=>{const bp=`(min-width:${theme.breakpoints[breakpoint]})`;acc.media[bp]={...acc.media[bp],[property]:resolvers[propertyData.type](getBreakpointValue2(styleProps[styleProp],breakpoint),theme)};});});return acc;},{hasResponsiveStyles:false,styles:{},inlineStyles:{},media:{}}));}
var import_react3=require("react");function useRandomClassName(){const id=(0,import_react3.useId)().replace(/:/g,"");return`__m__-${id}`;}
function getStyleObject(style,theme){if(Array.isArray(style)){return[...style].reduce((acc,item)=>({...acc,...getStyleObject(item,theme)}),{});}
if(typeof style==="function"){return style(theme);}
if(style==null){return{};}
return style;}
var import_react6=__toESM(require("react"));var import_clsx4=__toESM(require("clsx"));var import_react4=require("react");function identity(value){return value;}
function factory(ui){const Component=(0,import_react4.forwardRef)(ui);Component.extend=identity;return Component;}
var import_react5=require("react");function polymorphicFactory(ui){const Component=(0,import_react5.forwardRef)(ui);Component.extend=identity;return Component;}
function createPolymorphicComponent(component){return component;}
function mergeStyles(styles,theme){if(Array.isArray(styles)){return[...styles].reduce((acc,item)=>({...acc,...mergeStyles(item,theme)}),{});}
if(typeof styles==="function"){return styles(theme);}
if(styles==null){return{};}
return styles;}
function getBoxStyle({theme,style,vars,styleProps}){const _style=mergeStyles(style,theme);const _vars=mergeStyles(vars,theme);return{..._style,..._vars,...styleProps};}
function transformModKey(key){return key.startsWith("data-")?key:`data-${key}`;}
function getMod(props){return Object.keys(props).reduce((acc,key)=>{const value=props[key];if(value===void 0||value===""||value===false||value===null){return acc;}
acc[transformModKey(key)]=props[key];return acc;},{});}
function getBoxMod(mod){if(!mod){return null;}
if(typeof mod==="string"){return{[transformModKey(mod)]:true};}
if(Array.isArray(mod)){return[...mod].reduce((acc,value)=>({...acc,...getBoxMod(value)}),{});}
return getMod(mod);}
var _Box=(0,import_react6.forwardRef)(({component,style,__vars,className,variant,mod,size,hiddenFrom,visibleFrom,lightHidden,darkHidden,renderRoot,...others},ref)=>{const theme=useRaikouTheme();const Element=component||"div";const{styleProps,rest}=extractStyleProps(others);const responsiveClassName=useRandomClassName();const parsedStyleProps=parseStyleProps({styleProps,theme,data:STYlE_PROPS_DATA});const props={ref,style:getBoxStyle({theme,style,vars:__vars,styleProps:parsedStyleProps.inlineStyles}),className:(0,import_clsx4.default)(className,{[responsiveClassName]:parsedStyleProps.hasResponsiveStyles,"raikou-light-hidden":lightHidden,"raikou-dark-hidden":darkHidden,[`raikou-hidden-from-${hiddenFrom}`]:hiddenFrom,[`raikou-visible-from-${visibleFrom}`]:visibleFrom}),"data-variant":variant,"data-size":isNumberLike(size)?void 0:size||void 0,...getBoxMod(mod),...rest};return import_react6.default.createElement(import_react6.default.Fragment,null,parsedStyleProps.hasResponsiveStyles&&import_react6.default.createElement(InlineStyles,{selector:`.${responsiveClassName}`,styles:parsedStyleProps.styles,media:parsedStyleProps.media}),typeof renderRoot==="function"?renderRoot(props):import_react6.default.createElement(Element,{...props}));});_Box.displayName="@raikou/core/Box";var Box=createPolymorphicComponent(_Box);function useDirection(){return{dir:"ltr",toggleDirection:()=>{},setDirection:()=>{}};}
0&&(module.exports={Box,DEFAULT_THEME,FOCUS_CLASS_NAMES,InlineStyles,STYlE_PROPS_DATA,camelToKebabCase,closeOnEscape,createEventHandler,createPolymorphicComponent,createScopedKeydownHandler,createVarsResolver,darken,deepMerge,defaultVariantColorsResolver,em,extractStyleProps,factory,filterProps,findElementAncestor,getBaseValue,getBreakpointValue,getDefaultZIndex,getFontSize,getGradient,getLineHeight,getPrimaryShade,getRadius,getSafeId,getShadow,getSize,getSortedBreakpoints,getSpacing,getStyleObject,getThemeColor,isElement,isLightColor,isNumberLike,keys,lighten,mergeRaikouTheme,noop,parseStyleProps,parseThemeColor,polymorphicFactory,px,rem,resolveClassNames,resolveStyles,rgba,stylesToString,toRgba,useDirection,useProps,useRaikouTheme,useRandomClassName,useResolvedStylesApi,useStyles,validateRaikouTheme});