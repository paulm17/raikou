var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r=r||{})__hasOwnProp.call(r,t)&&__defNormalProp(e,t,r[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))__propIsEnum.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var t={};for(s in e)__hasOwnProp.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&__getOwnPropSymbols)for(var s of __getOwnPropSymbols(e))r.indexOf(s)<0&&__propIsEnum.call(e,s)&&(t[s]=e[s]);return t};import React12,{useState as useState2}from"react";import{useUncontrolled}from"@raikou/hooks";import{factory as factory7,useProps as useProps9}from"@raikou/core";import React11 from"react";function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t,s=arguments[r];for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,r){if(null==e)return{};for(var t,s={},a=Object.keys(e),o=0;o<a.length;o++)t=a[o],0<=r.indexOf(t)||(s[t]=e[t]);return s}import*as React from"react";import{useRef,useCallback}from"react";var updateRef=function(e,r){"function"==typeof e?e(r):e.current=r},useComposedRef=function(r,t){var s=useRef();return useCallback(function(e){r.current=e,s.current&&updateRef(s.current,null),(s.current=t)&&updateRef(t,e)},[t])},use_composed_ref_esm_default=useComposedRef,noop=function(){},_excluded=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],TextareaAutosize=function(e,r){e.cacheMeasurements,e.maxRows,e.minRows;var t=e.onChange,t=void 0===t?noop:t,e=(e.onHeightChange,_objectWithoutPropertiesLoose(e,_excluded)),s=(e.value,React.useRef(null)),s=use_composed_ref_esm_default(s,r);return React.useRef(0),React.useRef(),React.createElement("textarea",_extends({},e,{onChange:t,ref:s}))},index=React.forwardRef(TextareaAutosize);import{factory as factory6,useProps as useProps8}from"@raikou/core";import React10 from"react";import{polymorphicFactory as polymorphicFactory2}from"@raikou/core";import React9 from"react";import{Box as Box6,polymorphicFactory,useProps as useProps6,useStyles as useStyles6,extractStyleProps,getSize,getFontSize as getFontSize5,getRadius,rem as rem4,createVarsResolver as createVarsResolver5}from"@raikou/core";import React2,{createContext,useContext}from"react";import React3,{createContext as createContext2,useContext as useContext2}from"react";function createOptionalContext(e=null){const t=createContext2(e);return[({children:e,value:r})=>React3.createElement(t.Provider,{value:r},e),()=>useContext2(t)]}import{useState}from"react";import{useEffect,useLayoutEffect}from"react";var[InputWrapperProvider,useInputWrapperContext]=createOptionalContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});import React4 from"react";import{Box,factory,useProps,useStyles,getFontSize,createVarsResolver}from"@raikou/core";var Input_module_default={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps={labelElement:"label"},varsResolver=createVarsResolver((e,{size:r})=>({label:{"--input-label-size":getFontSize(r),"--input-asterisk-color":void 0}})),InputLabel=factory((e,r)=>{e=useProps("InputLabel",defaultProps,e);const t=useProps("InputLabel",defaultProps,e),{classNames:s,className:a,style:o,styles:l,unstyled:i,vars:n,labelElement:p,size:u,required:c,htmlFor:d,onMouseDown:_,children:m,__staticSelector:f,variant:v}=t,y=__objRest(t,["classNames","className","style","styles","unstyled","vars","labelElement","size","required","htmlFor","onMouseDown","children","__staticSelector","variant"]);var e=useStyles({name:["InputWrapper",f],props:e,classes:Input_module_default,className:a,style:o,classNames:s,styles:l,unstyled:i,rootSelector:"label",vars:n,varsResolver:varsResolver}),P=useInputWrapperContext(),P=(null==P?void 0:P.getStyles)||e;return React4.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},P("label")),{component:p,variant:v,size:u,ref:r,htmlFor:"label"===p?d:void 0,mod:{required:c},onMouseDown:e=>{null!=_&&_(e),!e.defaultPrevented&&1<e.detail&&e.preventDefault()}}),y),m,c&&React4.createElement("span",__spreadProps(__spreadValues({},P("required")),{"aria-hidden":!0})," *"))});InputLabel.displayName="@raikou/core/InputLabel";import React5 from"react";import{Box as Box2,factory as factory2,useProps as useProps2,useStyles as useStyles2,getFontSize as getFontSize2,rem,createVarsResolver as createVarsResolver2}from"@raikou/core";var defaultProps2={},varsResolver2=createVarsResolver2((e,{size:r})=>({error:{"--input-error-size":void 0===r?void 0:`calc(${getFontSize2(r)} - ${rem(2)})`}})),InputError=factory2((e,r)=>{var e=useProps2("InputError",defaultProps2,e),{classNames:t,className:s,style:a,styles:o,unstyled:l,vars:i,size:n,__staticSelector:p,__inheritStyles:u=!0,variant:c}=e,d=__objRest(e,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),p=useStyles2({name:["InputWrapper",p],props:e,classes:Input_module_default,className:s,style:a,classNames:t,styles:o,unstyled:l,rootSelector:"error",vars:i,varsResolver:varsResolver2}),e=useInputWrapperContext(),s=u&&(null==e?void 0:e.getStyles)||p;return React5.createElement(Box2,__spreadValues(__spreadValues({component:"p",ref:r,variant:c,size:n},s("error")),d))});InputError.displayName="@raikou/core/InputError";import React6 from"react";import{Box as Box3,factory as factory3,useProps as useProps3,useStyles as useStyles3,getFontSize as getFontSize3,rem as rem2,createVarsResolver as createVarsResolver3}from"@raikou/core";var defaultProps3={},varsResolver3=createVarsResolver3((e,{size:r})=>({description:{"--input-description-size":void 0===r?void 0:`calc(${getFontSize3(r)} - ${rem2(2)})`}})),InputDescription=factory3((e,r)=>{var e=useProps3("InputDescription",defaultProps3,e),t=useProps3("InputDescription",defaultProps3,e),{classNames:s,className:a,style:o,styles:l,unstyled:i,vars:n,size:p,__staticSelector:u,__inheritStyles:c=!0,variant:d}=t,t=__objRest(t,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),_=useInputWrapperContext(),u=useStyles3({name:["InputWrapper",u],props:e,classes:Input_module_default,className:a,style:o,classNames:s,styles:l,unstyled:i,rootSelector:"description",vars:n,varsResolver:varsResolver3}),e=c&&(null==_?void 0:_.getStyles)||u;return React6.createElement(Box3,__spreadValues(__spreadValues({component:"p",ref:r,variant:d,size:p},e("description")),t))});InputDescription.displayName="@raikou/core/InputDescription";import React7 from"react";import{Box as Box4,factory as factory4,useProps as useProps4,useStyles as useStyles4}from"@raikou/core";var defaultProps4={},InputPlaceholder=factory4((e,r)=>{var e=useProps4("InputPlaceholder",defaultProps4,e),t=useProps4("InputPlaceholder",defaultProps4,e),{classNames:s,className:a,style:o,styles:l,unstyled:i,__staticSelector:n,variant:p}=t,t=__objRest(t,["classNames","className","style","styles","unstyled","vars","__staticSelector","variant"]),n=useStyles4({name:["InputPlaceholder",n],props:e,classes:Input_module_default,className:a,style:o,classNames:s,styles:l,unstyled:i,rootSelector:"placeholder"});return React7.createElement(Box4,__spreadValues(__spreadProps(__spreadValues({},n("placeholder")),{component:"span",variant:p,ref:r}),t))});InputPlaceholder.displayName="@raikou/core/InputPlaceholder";import React8 from"react";import{useId}from"@raikou/hooks";import{Box as Box5,factory as factory5,useProps as useProps5,useStyles as useStyles5,createVarsResolver as createVarsResolver4,getFontSize as getFontSize4,rem as rem3}from"@raikou/core";function getInputOffsets(e,{hasDescription:r,hasError:t}){var s=e.findIndex(e=>"input"===e),a=e[s-1],e=e[s+1];return{offsetBottom:r&&"description"===e||t&&"error"===e,offsetTop:r&&"description"===a||t&&"error"===a}}var defaultProps5={labelElement:"label",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},varsResolver4=createVarsResolver4((e,{size:r})=>({label:{"--input-label-size":getFontSize4(r),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===r?void 0:`calc(${getFontSize4(r)} - ${rem3(2)})`},description:{"--input-description-size":void 0===r?void 0:`calc(${getFontSize4(r)} - ${rem3(2)})`}})),InputWrapper=factory5((e,r)=>{var e=useProps5("InputWrapper",defaultProps5,e),{classNames:t,className:s,style:a,styles:o,unstyled:l,vars:i,size:n,variant:p,__staticSelector:u,inputContainer:c,inputWrapperOrder:d,label:_,error:m,description:f,labelProps:v,descriptionProps:y,errorProps:P,labelElement:S,children:h,withAsterisk:R,id:b,required:I,__stylesApiProps:g}=e,z=__objRest(e,["classNames","className","style","styles","unstyled","vars","size","variant","__staticSelector","inputContainer","inputWrapperOrder","label","error","description","labelProps","descriptionProps","errorProps","labelElement","children","withAsterisk","id","required","__stylesApiProps"]),g=useStyles5({name:["InputWrapper",u],props:g||e,classes:Input_module_default,className:s,style:a,classNames:t,styles:o,unstyled:l,vars:i,varsResolver:varsResolver4}),e={size:n,variant:p,__staticSelector:u},s=useId(b),a="boolean"==typeof R?R:I,t=(null==P?void 0:P.id)||s+"-error",o=(null==y?void 0:y.id)||s+"-description",l=s,i=!!m&&"boolean"!=typeof m,u=!!f,b=`${i?t:""} `+(u?o:""),R=0<b.trim().length?b.trim():void 0,I=(null==v?void 0:v.id)||s+"-label";const x=_&&React8.createElement(InputLabel,__spreadValues(__spreadValues({key:"label",labelElement:S,id:I,htmlFor:l,required:a},e),v),_),N=u&&React8.createElement(InputDescription,__spreadProps(__spreadValues(__spreadValues({key:"description"},y),e),{size:(null==y?void 0:y.size)||e.size,id:(null==y?void 0:y.id)||o}),f),w=React8.createElement(React8.Fragment,{key:"input"},c(h)),V=i&&React8.createElement(InputError,__spreadProps(__spreadValues(__spreadValues({},P),e),{size:(null==P?void 0:P.size)||e.size,key:"error",id:(null==P?void 0:P.id)||t}),m);b=d.map(e=>{switch(e){case"label":return x;case"input":return w;case"description":return N;case"error":return V;default:return null}});return React8.createElement(InputWrapperProvider,{value:__spreadValues({getStyles:g,describedBy:R,inputId:l,labelId:I},getInputOffsets(d,{hasDescription:u,hasError:i}))},React8.createElement(Box5,__spreadValues(__spreadValues({ref:r,variant:p,size:n},g("root")),z),b))}),Input_module_default2=(InputWrapper.displayName="@raikou/core/InputWrapper",{wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"}),defaultProps6={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},varsResolver5=createVarsResolver5((e,r,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-height":getSize(r.size,"input-height"),"--input-fz":getFontSize5(r.size),"--input-radius":void 0===r.radius?void 0:getRadius(r.radius),"--input-left-section-width":void 0!==r.leftSectionWidth?rem4(r.leftSectionWidth):void 0,"--input-right-section-width":void 0!==r.rightSectionWidth?rem4(r.rightSectionWidth):void 0,"--input-padding-y":r.multiline?getSize(r.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":r.leftSectionPointerEvents,"--input-right-section-pointer-events":r.rightSectionPointerEvents}})),Input=polymorphicFactory((e,r)=>{var e=useProps6("Input",defaultProps6,e),{classNames:t,className:s,style:a,styles:o,unstyled:l,required:i,__staticSelector:n,__stylesApiProps:p,size:u,wrapperProps:c,error:d,disabled:_,leftSection:m,leftSectionProps:f,rightSection:v,rightSectionProps:y,variant:P,vars:S,pointer:h,multiline:R,id:b,withAria:I,withErrorStyles:g}=e,z=__objRest(e,["classNames","className","style","styles","unstyled","required","__staticSelector","__stylesApiProps","size","wrapperProps","error","disabled","leftSection","leftSectionProps","leftSectionWidth","rightSection","rightSectionProps","rightSectionWidth","rightSectionPointerEvents","leftSectionPointerEvents","variant","vars","pointer","multiline","radius","id","withAria","withErrorStyles"]),{styleProps:z,rest:x}=extractStyleProps(z),N=useInputWrapperContext(),w={offsetBottom:null==N?void 0:N.offsetBottom,offsetTop:null==N?void 0:N.offsetTop},n=useStyles6({name:["Input",n],props:p||e,classes:Input_module_default2,className:s,style:a,classNames:t,styles:o,unstyled:l,stylesCtx:w,rootSelector:"wrapper",vars:S,varsResolver:varsResolver5}),p=I?{required:i,disabled:_,"aria-invalid":!!d,"aria-describedby":null==N?void 0:N.describedBy,id:(null==N?void 0:N.inputId)||b}:{};return React9.createElement(Box6,__spreadProps(__spreadValues(__spreadValues(__spreadValues({},n("wrapper")),z),c),{mod:{error:!!d&&g,pointer:h,disabled:_,multiline:R,"data-with-right-section":!!v,"data-with-left-section":!!m},variant:P,size:u}),m&&React9.createElement("div",__spreadValues(__spreadProps(__spreadValues({},f),{"data-position":"left"}),n("section",{className:null==f?void 0:f.className,style:null==f?void 0:f.style})),m),React9.createElement(Box6,__spreadValues(__spreadProps(__spreadValues(__spreadValues({component:"input"},x),p),{ref:r,required:i,mod:{disabled:_,error:!!d&&g},variant:P}),n("input"))),v&&React9.createElement("div",__spreadValues(__spreadProps(__spreadValues({},y),{"data-position":"right"}),n("section",{className:null==y?void 0:y.className,style:null==y?void 0:y.style})),v))});Input.Wrapper=InputWrapper,Input.Label=InputLabel,Input.Error=InputError,Input.Description=InputDescription,Input.Placeholder=InputPlaceholder,Input.displayName="@raikou/core/Input";import{extractStyleProps as extractStyleProps2,useProps as useProps7}from"@raikou/core";function useInputProps(e,r,t){var e=useProps7(e,r,t),{label:r,description:t,error:s,required:a,classNames:o,styles:l,className:i,unstyled:n,__staticSelector:p,__stylesApiProps:u,errorProps:c,labelProps:d,descriptionProps:_,wrapperProps:m,id:f,size:v,style:y,inputContainer:P,inputWrapperOrder:S,withAsterisk:h,variant:R}=e,b=__objRest(e,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","__stylesApiProps","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant","vars"]),{styleProps:b,rest:I}=extractStyleProps2(b),r=__spreadValues({label:r,description:t,error:s,required:a,classNames:o,className:i,__staticSelector:p,__stylesApiProps:u||e,errorProps:c,labelProps:d,descriptionProps:_,unstyled:n,styles:l,size:v,style:y,inputContainer:P,inputWrapperOrder:S,withAsterisk:h,variant:R,id:f},m);return __spreadProps(__spreadValues({},I),{classNames:o,styles:l,unstyled:n,wrapperProps:__spreadValues(__spreadValues({},r),b),inputProps:{required:a,classNames:o,styles:l,unstyled:n,size:v,__staticSelector:p,__stylesApiProps:u||e,error:s,variant:R}})}var defaultProps7={__staticSelector:"InputBase",withAria:!0},InputBase=polymorphicFactory2((e,r)=>{var e=useInputProps("InputBase",defaultProps7,e),{inputProps:t,wrapperProps:s}=e,e=__objRest(e,["inputProps","wrapperProps"]);return React10.createElement(Input.Wrapper,__spreadValues({},s),React10.createElement(Input,__spreadProps(__spreadValues(__spreadValues({},t),e),{ref:r})))}),defaultProps8=(InputBase.displayName="@raikou/core/InputBase",{}),Textarea=factory6((e,r)=>{var e=useProps8("Textarea",defaultProps8,e),{autosize:t,maxRows:s,minRows:a,__staticSelector:o}=e,e=__objRest(e,["autosize","maxRows","minRows","__staticSelector"]),a=t?{maxRows:s,minRows:a}:{};return React11.createElement(InputBase,__spreadValues(__spreadProps(__spreadValues({component:t?index:"textarea",ref:r},e),{__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":t&&void 0===s||void 0}),a))});function validateJson(e,r){if("string"==typeof e&&0===e.trim().length)return!0;try{return r(e),!0}catch(e){return!1}}Textarea.displayName="@raikou/core/Textarea";var defaultProps9={serialize:JSON.stringify,deserialize:JSON.parse},JsonInput=factory7((e,r)=>{const t=useProps9("JsonInput",defaultProps9,e),{value:s,defaultValue:a,onChange:o,formatOnBlur:l,validationError:i,serialize:n,deserialize:p,onFocus:u,onBlur:c,readOnly:d,error:_}=t,m=__objRest(t,["value","defaultValue","onChange","formatOnBlur","validationError","serialize","deserialize","onFocus","onBlur","readOnly","error"]),[f,v]=useUncontrolled({value:s,defaultValue:a,finalValue:"",onChange:o}),[y,P]=useState2(validateJson(f,p));return React12.createElement(Textarea,__spreadProps(__spreadValues({value:f,onChange:e=>v(e.currentTarget.value),onFocus:e=>{null!=u&&u(e),P(!0)},onBlur:e=>{"function"==typeof c&&c(e);var r=validateJson(e.currentTarget.value,p);l&&!d&&r&&""!==e.currentTarget.value.trim()&&v(n(p(e.currentTarget.value),null,2)),P(r)},ref:r,readOnly:d},m),{autoComplete:"off",__staticSelector:"JsonInput",error:y?_:i||!0,"data-monospace":!0}))});JsonInput.displayName="@raikou/core/JsonInput";export{JsonInput};