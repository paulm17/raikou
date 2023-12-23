"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r=r||{})__hasOwnProp.call(r,t)&&__defNormalProp(e,t,r[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))__propIsEnum.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var t={};for(s in e)__hasOwnProp.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&__getOwnPropSymbols)for(var s of __getOwnPropSymbols(e))r.indexOf(s)<0&&__propIsEnum.call(e,s)&&(t[s]=e[s]);return t},__export=(e,r)=>{for(var t in r)__defProp(e,t,{get:r[t],enumerable:!0})},__copyProps=(r,t,s,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let e of __getOwnPropNames(t))__hasOwnProp.call(r,e)||e===s||__defProp(r,e,{get:()=>t[e],enumerable:!(o=__getOwnPropDesc(t,e))||o.enumerable});return r},__toESM=(e,r,t)=>(t=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?t:__defProp(t,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react11=(__export(src_exports,{InputBase:()=>InputBase}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core8=require("@raikou/core"),import_react10=__toESM(require("react")),import_core6=require("@raikou/core"),import_react=__toESM(require("react")),import_react2=__toESM(require("react"));function createOptionalContext(e=null){const t=(0,import_react2.createContext)(e);return[({children:e,value:r})=>import_react2.default.createElement(t.Provider,{value:r},e),()=>(0,import_react2.useContext)(t)]}var import_react3=require("react"),import_react4=require("react"),[InputWrapperProvider,useInputWrapperContext]=createOptionalContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0}),import_react5=__toESM(require("react")),import_core=require("@raikou/core"),Input_module_default={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps={labelElement:"label"},varsResolver=(0,import_core.createVarsResolver)((e,{size:r})=>({label:{"--input-label-size":(0,import_core.getFontSize)(r),"--input-asterisk-color":void 0}})),InputLabel=(0,import_core.factory)((e,r)=>{e=(0,import_core.useProps)("InputLabel",defaultProps,e);const t=(0,import_core.useProps)("InputLabel",defaultProps,e),{classNames:s,className:o,style:a,styles:i,unstyled:p,vars:l,labelElement:n,size:c,required:u,htmlFor:_,onMouseDown:d,children:m,__staticSelector:v,variant:f}=t,y=__objRest(t,["classNames","className","style","styles","unstyled","vars","labelElement","size","required","htmlFor","onMouseDown","children","__staticSelector","variant"]);var e=(0,import_core.useStyles)({name:["InputWrapper",v],props:e,classes:Input_module_default,className:o,style:a,classNames:s,styles:i,unstyled:p,rootSelector:"label",vars:l,varsResolver:varsResolver}),P=useInputWrapperContext(),P=(null==P?void 0:P.getStyles)||e;return import_react5.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},P("label")),{component:n,variant:f,size:c,ref:r,htmlFor:"label"===n?_:void 0,mod:{required:u},onMouseDown:e=>{null!=d&&d(e),!e.defaultPrevented&&1<e.detail&&e.preventDefault()}}),y),m,u&&import_react5.default.createElement("span",__spreadProps(__spreadValues({},P("required")),{"aria-hidden":!0})," *"))}),import_react6=(InputLabel.displayName="@raikou/core/InputLabel",__toESM(require("react"))),import_core2=require("@raikou/core"),defaultProps2={},varsResolver2=(0,import_core2.createVarsResolver)((e,{size:r})=>({error:{"--input-error-size":void 0===r?void 0:`calc(${(0,import_core2.getFontSize)(r)} - ${(0,import_core2.rem)(2)})`}})),InputError=(0,import_core2.factory)((e,r)=>{var e=(0,import_core2.useProps)("InputError",defaultProps2,e),{classNames:t,className:s,style:o,styles:a,unstyled:i,vars:p,size:l,__staticSelector:n,__inheritStyles:c=!0,variant:u}=e,_=__objRest(e,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),n=(0,import_core2.useStyles)({name:["InputWrapper",n],props:e,classes:Input_module_default,className:s,style:o,classNames:t,styles:a,unstyled:i,rootSelector:"error",vars:p,varsResolver:varsResolver2}),e=useInputWrapperContext(),s=c&&(null==e?void 0:e.getStyles)||n;return import_react6.default.createElement(import_core2.Box,__spreadValues(__spreadValues({component:"p",ref:r,variant:u,size:l},s("error")),_))}),import_react7=(InputError.displayName="@raikou/core/InputError",__toESM(require("react"))),import_core3=require("@raikou/core"),defaultProps3={},varsResolver3=(0,import_core3.createVarsResolver)((e,{size:r})=>({description:{"--input-description-size":void 0===r?void 0:`calc(${(0,import_core3.getFontSize)(r)} - ${(0,import_core3.rem)(2)})`}})),InputDescription=(0,import_core3.factory)((e,r)=>{var e=(0,import_core3.useProps)("InputDescription",defaultProps3,e),t=(0,import_core3.useProps)("InputDescription",defaultProps3,e),{classNames:s,className:o,style:a,styles:i,unstyled:p,vars:l,size:n,__staticSelector:c,__inheritStyles:u=!0,variant:_}=t,t=__objRest(t,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),d=useInputWrapperContext(),c=(0,import_core3.useStyles)({name:["InputWrapper",c],props:e,classes:Input_module_default,className:o,style:a,classNames:s,styles:i,unstyled:p,rootSelector:"description",vars:l,varsResolver:varsResolver3}),e=u&&(null==d?void 0:d.getStyles)||c;return import_react7.default.createElement(import_core3.Box,__spreadValues(__spreadValues({component:"p",ref:r,variant:_,size:n},e("description")),t))}),import_react8=(InputDescription.displayName="@raikou/core/InputDescription",__toESM(require("react"))),import_core4=require("@raikou/core"),defaultProps4={},InputPlaceholder=(0,import_core4.factory)((e,r)=>{var e=(0,import_core4.useProps)("InputPlaceholder",defaultProps4,e),t=(0,import_core4.useProps)("InputPlaceholder",defaultProps4,e),{classNames:s,className:o,style:a,styles:i,unstyled:p,__staticSelector:l,variant:n}=t,t=__objRest(t,["classNames","className","style","styles","unstyled","vars","__staticSelector","variant"]),l=(0,import_core4.useStyles)({name:["InputPlaceholder",l],props:e,classes:Input_module_default,className:o,style:a,classNames:s,styles:i,unstyled:p,rootSelector:"placeholder"});return import_react8.default.createElement(import_core4.Box,__spreadValues(__spreadProps(__spreadValues({},l("placeholder")),{component:"span",variant:n,ref:r}),t))}),import_react9=(InputPlaceholder.displayName="@raikou/core/InputPlaceholder",__toESM(require("react"))),import_hooks=require("@raikou/hooks"),import_core5=require("@raikou/core");function getInputOffsets(e,{hasDescription:r,hasError:t}){var s=e.findIndex(e=>"input"===e),o=e[s-1],e=e[s+1];return{offsetBottom:r&&"description"===e||t&&"error"===e,offsetTop:r&&"description"===o||t&&"error"===o}}var defaultProps5={labelElement:"label",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},varsResolver4=(0,import_core5.createVarsResolver)((e,{size:r})=>({label:{"--input-label-size":(0,import_core5.getFontSize)(r),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===r?void 0:`calc(${(0,import_core5.getFontSize)(r)} - ${(0,import_core5.rem)(2)})`},description:{"--input-description-size":void 0===r?void 0:`calc(${(0,import_core5.getFontSize)(r)} - ${(0,import_core5.rem)(2)})`}})),InputWrapper=(0,import_core5.factory)((e,r)=>{var e=(0,import_core5.useProps)("InputWrapper",defaultProps5,e),{classNames:t,className:s,style:o,styles:a,unstyled:i,vars:p,size:l,variant:n,__staticSelector:c,inputContainer:u,inputWrapperOrder:_,label:d,error:m,description:v,labelProps:f,descriptionProps:y,errorProps:P,labelElement:b,children:S,withAsterisk:I,id:h,required:g,__stylesApiProps:N}=e,E=__objRest(e,["classNames","className","style","styles","unstyled","vars","size","variant","__staticSelector","inputContainer","inputWrapperOrder","label","error","description","labelProps","descriptionProps","errorProps","labelElement","children","withAsterisk","id","required","__stylesApiProps"]),N=(0,import_core5.useStyles)({name:["InputWrapper",c],props:N||e,classes:Input_module_default,className:s,style:o,classNames:t,styles:a,unstyled:i,vars:p,varsResolver:varsResolver4}),e={size:l,variant:n,__staticSelector:c},s=(0,import_hooks.useId)(h),o="boolean"==typeof I?I:g,t=(null==P?void 0:P.id)||s+"-error",a=(null==y?void 0:y.id)||s+"-description",i=s,p=!!m&&"boolean"!=typeof m,c=!!v,h=`${p?t:""} `+(c?a:""),I=0<h.trim().length?h.trim():void 0,g=(null==f?void 0:f.id)||s+"-label";const w=d&&import_react9.default.createElement(InputLabel,__spreadValues(__spreadValues({key:"label",labelElement:b,id:g,htmlFor:i,required:o},e),f),d),z=c&&import_react9.default.createElement(InputDescription,__spreadProps(__spreadValues(__spreadValues({key:"description"},y),e),{size:(null==y?void 0:y.size)||e.size,id:(null==y?void 0:y.id)||a}),v),O=import_react9.default.createElement(import_react9.default.Fragment,{key:"input"},u(S)),V=p&&import_react9.default.createElement(InputError,__spreadProps(__spreadValues(__spreadValues({},P),e),{size:(null==P?void 0:P.size)||e.size,key:"error",id:(null==P?void 0:P.id)||t}),m);h=_.map(e=>{switch(e){case"label":return w;case"input":return O;case"description":return z;case"error":return V;default:return null}});return import_react9.default.createElement(InputWrapperProvider,{value:__spreadValues({getStyles:N,describedBy:I,inputId:i,labelId:g},getInputOffsets(_,{hasDescription:c,hasError:p}))},import_react9.default.createElement(import_core5.Box,__spreadValues(__spreadValues({ref:r,variant:n,size:l},N("root")),E),h))}),Input_module_default2=(InputWrapper.displayName="@raikou/core/InputWrapper",{wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"}),defaultProps6={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},varsResolver5=(0,import_core6.createVarsResolver)((e,r,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-height":(0,import_core6.getSize)(r.size,"input-height"),"--input-fz":(0,import_core6.getFontSize)(r.size),"--input-radius":void 0===r.radius?void 0:(0,import_core6.getRadius)(r.radius),"--input-left-section-width":void 0!==r.leftSectionWidth?(0,import_core6.rem)(r.leftSectionWidth):void 0,"--input-right-section-width":void 0!==r.rightSectionWidth?(0,import_core6.rem)(r.rightSectionWidth):void 0,"--input-padding-y":r.multiline?(0,import_core6.getSize)(r.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":r.leftSectionPointerEvents,"--input-right-section-pointer-events":r.rightSectionPointerEvents}})),Input=(0,import_core6.polymorphicFactory)((e,r)=>{var e=(0,import_core6.useProps)("Input",defaultProps6,e),{classNames:t,className:s,style:o,styles:a,unstyled:i,required:p,__staticSelector:l,__stylesApiProps:n,size:c,wrapperProps:u,error:_,disabled:d,leftSection:m,leftSectionProps:v,rightSection:f,rightSectionProps:y,variant:P,vars:b,pointer:S,multiline:I,id:h,withAria:g,withErrorStyles:N}=e,E=__objRest(e,["classNames","className","style","styles","unstyled","required","__staticSelector","__stylesApiProps","size","wrapperProps","error","disabled","leftSection","leftSectionProps","leftSectionWidth","rightSection","rightSectionProps","rightSectionWidth","rightSectionPointerEvents","leftSectionPointerEvents","variant","vars","pointer","multiline","radius","id","withAria","withErrorStyles"]),{styleProps:E,rest:w}=(0,import_core6.extractStyleProps)(E),z=useInputWrapperContext(),O={offsetBottom:null==z?void 0:z.offsetBottom,offsetTop:null==z?void 0:z.offsetTop},l=(0,import_core6.useStyles)({name:["Input",l],props:n||e,classes:Input_module_default2,className:s,style:o,classNames:t,styles:a,unstyled:i,stylesCtx:O,rootSelector:"wrapper",vars:b,varsResolver:varsResolver5}),n=g?{required:p,disabled:d,"aria-invalid":!!_,"aria-describedby":null==z?void 0:z.describedBy,id:(null==z?void 0:z.inputId)||h}:{};return import_react10.default.createElement(import_core6.Box,__spreadProps(__spreadValues(__spreadValues(__spreadValues({},l("wrapper")),E),u),{mod:{error:!!_&&N,pointer:S,disabled:d,multiline:I,"data-with-right-section":!!f,"data-with-left-section":!!m},variant:P,size:c}),m&&import_react10.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},v),{"data-position":"left"}),l("section",{className:null==v?void 0:v.className,style:null==v?void 0:v.style})),m),import_react10.default.createElement(import_core6.Box,__spreadValues(__spreadProps(__spreadValues(__spreadValues({component:"input"},w),n),{ref:r,required:p,mod:{disabled:d,error:!!_&&N},variant:P}),l("input"))),f&&import_react10.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},y),{"data-position":"right"}),l("section",{className:null==y?void 0:y.className,style:null==y?void 0:y.style})),f))}),import_core7=(Input.Wrapper=InputWrapper,Input.Label=InputLabel,Input.Error=InputError,Input.Description=InputDescription,Input.Placeholder=InputPlaceholder,Input.displayName="@raikou/core/Input",require("@raikou/core"));function useInputProps(e,r,t){var e=(0,import_core7.useProps)(e,r,t),{label:r,description:t,error:s,required:o,classNames:a,styles:i,className:p,unstyled:l,__staticSelector:n,__stylesApiProps:c,errorProps:u,labelProps:_,descriptionProps:d,wrapperProps:m,id:v,size:f,style:y,inputContainer:P,inputWrapperOrder:b,withAsterisk:S,variant:I}=e,h=__objRest(e,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","__stylesApiProps","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant","vars"]),{styleProps:h,rest:g}=(0,import_core7.extractStyleProps)(h),r=__spreadValues({label:r,description:t,error:s,required:o,classNames:a,className:p,__staticSelector:n,__stylesApiProps:c||e,errorProps:u,labelProps:_,descriptionProps:d,unstyled:l,styles:i,size:f,style:y,inputContainer:P,inputWrapperOrder:b,withAsterisk:S,variant:I,id:v},m);return __spreadProps(__spreadValues({},g),{classNames:a,styles:i,unstyled:l,wrapperProps:__spreadValues(__spreadValues({},r),h),inputProps:{required:o,classNames:a,styles:i,unstyled:l,size:f,__staticSelector:n,__stylesApiProps:c||e,error:s,variant:I}})}var defaultProps7={__staticSelector:"InputBase",withAria:!0},InputBase=(0,import_core8.polymorphicFactory)((e,r)=>{var e=useInputProps("InputBase",defaultProps7,e),{inputProps:t,wrapperProps:s}=e,e=__objRest(e,["inputProps","wrapperProps"]);return import_react11.default.createElement(Input.Wrapper,__spreadValues({},s),import_react11.default.createElement(Input,__spreadProps(__spreadValues(__spreadValues({},t),e),{ref:r})))});InputBase.displayName="@raikou/core/InputBase";